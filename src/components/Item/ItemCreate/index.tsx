import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tabs, Tab } from '../../Tabs';
import s from './style.module.scss';
import { useRouter } from 'vue-router';
import { InputPad } from '../../InputPad';
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
	const refExpensesTags = ref([
		{ id: 1, name: '餐费', sign: '￥', category: 'expenses' },
		{ id: 2, name: '打车', sign: '￥', category: 'expenses' },
		{ id: 3, name: '聚餐', sign: '￥', category: 'expenses' },
		{ id: 4, name: '打车', sign: '￥', category: 'expenses' },
		{ id: 5, name: '聚餐', sign: '￥', category: 'expenses' },
		{ id: 6, name: '打车', sign: '￥', category: 'expenses' },
		{ id: 7, name: '聚餐', sign: '￥', category: 'expenses' },
	  ])
	  const refIncomeTags = ref([
		{ id: 4, name: '工资', sign: '￥', category: 'income' },
		{ id: 5, name: '彩票', sign: '￥', category: 'income' },
		{ id: 6, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 11, name: '彩票', sign: '￥', category: 'income' },
		{ id: 18, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 17, name: '彩票', sign: '￥', category: 'income' },
		{ id: 19, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 4, name: '工资', sign: '￥', category: 'income' },
		{ id: 5, name: '彩票', sign: '￥', category: 'income' },
		{ id: 6, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 11, name: '彩票', sign: '￥', category: 'income' },
		{ id: 18, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 17, name: '彩票', sign: '￥', category: 'income' },
		{ id: 19, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 4, name: '工资', sign: '￥', category: 'income' },
		{ id: 5, name: '彩票', sign: '￥', category: 'income' },
		{ id: 6, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 11, name: '彩票', sign: '￥', category: 'income' },
		{ id: 18, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 17, name: '彩票', sign: '￥', category: 'income' },
		{ id: 19, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 4, name: '工资', sign: '￥', category: 'income' },
		{ id: 5, name: '彩票', sign: '￥', category: 'income' },
		{ id: 6, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 11, name: '彩票', sign: '￥', category: 'income' },
		{ id: 18, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 17, name: '彩票', sign: '￥', category: 'income' },
		{ id: 19, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 4, name: '工资', sign: '￥', category: 'income' },
		{ id: 5, name: '彩票', sign: '￥', category: 'income' },
		{ id: 6, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 11, name: '彩票', sign: '￥', category: 'income' },
		{ id: 18, name: '滴滴', sign: '￥', category: 'income' },
		{ id: 17, name: '彩票', sign: '￥', category: 'income' },
		{ id: 19, name: '滴滴', sign: '￥', category: 'income' },
	  ])
    return () => (
		<MainLayout>
			{{
				icon: () => <Icon name="left" class={s.menuIcon} onClick={back}></Icon>,
				title: () => <span class={s.menuFont}>记一笔</span>,
				default: () => (
					<>
					<div class={s.wrapper}>
					  <Tabs v-model:selected={refKind.value} onUpdate:selected={()=>console.log(1)} class={s.tabs}>
						<Tab name="支出" class={s.tags_wrapper}>
						  <div class={s.tag}>
							<div class={s.sign}>
							  <Icon name="add" class={s.createTag} />
							</div>
							<div class={s.name}>
							  新增
							</div>
						  </div>
						  {refExpensesTags.value.map(tag =>
							<div class={[s.tag, s.selected]}>
							  <div class={s.sign}>
								{tag.sign}
							  </div>
							  <div class={s.name}>
								{tag.name}
							  </div>
							</div>
						  )}
						</Tab>
						<Tab name="收入" class={s.tags_wrapper}>
						  <div class={s.tag}>
							<div class={s.sign}>
							  <Icon name="add" class={s.createTag} />
							</div>
							<div class={s.name}>
							  新增
							</div>
						  </div>
						  {refIncomeTags.value.map(tag =>
							<div class={[s.tag, s.selected]}>
							  <div class={s.sign}>
								{tag.sign}
							  </div>
							  <div class={s.name}>
								{tag.name}
							  </div>
							</div>
						  )}
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