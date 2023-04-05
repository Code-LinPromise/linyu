import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tabs, Tab } from '../../Tabs';
import s from './style.module.scss';
import { useRouter } from 'vue-router';
import { InputPad } from '../../InputPad';
import { http } from '../../../shared/Http';
import { Tags } from '../Tags';
export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const router=useRouter()
    const refKind = ref("支出")
	const refTagId = ref<number>()
    const refHappenAt = ref<string>(new Date().toISOString())
    const refAmount = ref<number>(0)
    const back=()=>{
      router.back()
    }
	const refExpensesTags = ref<Tag[]>([])
	const refIncomeTags = ref<Tag[]>([])
	onMounted(async () => {
		const response = await http.get<{ resources: Tag[] }>('/tags', {
		  kind: 'expenses',
		  _mock: 'tagIndex'
		})
		refExpensesTags.value = response.data.resources
	  })
	  
	  onMounted(async () => {
		const response = await http.get<{ resources: Tag[] }>('/tags', {
		  kind: 'income',
		  _mock: 'tagIndex'
		})
		refIncomeTags.value = response.data.resources
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
								<Tags kind='expenses' v-model:selected={refTagId.value}></Tags>
							</Tab>
							<Tab name="收入" >
								<Tags kind='income' v-model:selected={refTagId.value}></Tags>
							</Tab>
					  </Tabs>
					</div>
					<div class={s.inputPad_wrapper}>
						<InputPad
							v-model:happenAt={refHappenAt.value}
							v-model:amount={refAmount.value} 
						/>
					</div>
				  </>
				),
			}}
		</MainLayout>
	)
  }
})