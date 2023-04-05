import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tabs, Tab } from '../../Tabs';
import s from './style.module.scss';
import { useRouter } from 'vue-router';
import { InputPad } from '../../InputPad';
import { Button } from '../../Button';
import { useTags } from '../../../shared/useTags';
import { http } from '../../../shared/Http';
export const ItemCreate = defineComponent({

  setup: (props, context) => {
    const router=useRouter()
    const refKind = ref("收入")
    const onUpdateSelected = (name: string) => {
      refKind.value=name
    }
    const back=()=>{
      router.back()
    }
	const { tags: expensesTags, hasMore, fetchTags } = useTags((page) => {
		return http.get<Resources<Tag>>('/tags', {
		  kind: 'expenses',
		  page: page + 1,
		  _mock: 'tagIndex'
		})
	  })
	  const { tags: incomeTags,
		hasMore: hasMore2,
		fetchTags: fetchTags2
	  } = useTags((page) => {
		return http.get<Resources<Tag>>('/tags', {
		  kind: 'income',
		  page: page + 1,
		  _mock: 'tagIndex'
		})
	  })
	
    return () => (
		<MainLayout>
			{{
				icon: () => <Icon name="left" class={s.menuIcon} onClick={back}></Icon>,
				title: () => <span class={s.menuFont}>记一笔</span>,
				default: () => (
					<>
					<div class={s.wrapper}>
						<Tabs v-model:selected={refKind.value} onUpdate:selected={() => console.log(1)} class={s.tabs}>
							<Tab name="支出">
								<div class={s.tags_wrapper}>
									<div class={s.tag}>
										<div class={s.sign}>
											<Icon name="add" class={s.createTag} />
										</div>
										<div class={s.name}>
											新增
										</div>
									</div>
									{expensesTags.value.map(tag =>
										<div class={[s.tag, s.selected]}>
											<div class={s.sign}>
												{tag.sign}
											</div>
											<div class={s.name}>
												{tag.name}
											</div>
										</div>
									)}
								</div>
								<div class={s.more}>
									{hasMore.value ?
										<Button class={s.loadMore} onClick={fetchTags}>加载更多</Button> :
										<span class={s.noMore}>没有更多</span>
									}
								</div>
							</Tab>
								<Tab name="收入" >
									<div class={s.tags_wrapper}>
										<div class={s.tag}>
											<div class={s.sign}>
												<Icon name="add" class={s.createTag} />
											</div>
											<div class={s.name}>
												新增
											</div>
										</div>
										{incomeTags.value.map(tag =>
											<div class={[s.tag, s.selected]}>
												<div class={s.sign}>
													{tag.sign}
												</div>
												<div class={s.name}>
													{tag.name}
												</div>
											</div>
										)}
									</div>
									<div class={s.more}>
										{hasMore2.value ?
											<Button class={s.loadMore} onClick={fetchTags2}>加载更多</Button> :
											<span class={s.noMore}>没有更多</span>
										}
									</div>
								</Tab>
					  </Tabs>
					</div>
					<div class={s.inputPad_wrapper}>
						<InputPad />
					</div>
				  </>
				),
			}}
		</MainLayout>
	)
  }
})