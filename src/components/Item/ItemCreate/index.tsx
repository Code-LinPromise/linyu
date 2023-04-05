import { AxiosError } from 'axios';
import { Dialog } from 'vant';
import { defineComponent, onMounted, PropType, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tabs, Tab } from '../../Tabs';
import s from './style.module.scss';
import { InputPad } from '../../InputPad';
import { http } from '../../../shared/Http';
import { Tags } from '../Tags';
export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const router=useRouter()
    const formData = reactive({
		kind: '支出',
		tags_id: [],
		amount: 0,
		happen_at: new Date().toISOString(),
	  })
    const back=()=>{
      router.back()
    }
	
    const onError = (error: AxiosError<ResourceError>) => {
      if (error.response?.status === 422) {
        Dialog.alert({
          title: '出错',
          message: Object.values(error.response.data.errors).join('\n')
        })
      }
      throw error
    }
    const onSubmit = async () => {
      await http.post<Resource<Item>>('/items', formData,
        { params: { _mock: 'itemCreate' } }
      ).catch(onError)
      router.push("/items")
    }

	
    return () => (
		<MainLayout>
			{{
				icon: () => <Icon name="left" class={s.menuIcon} onClick={back}></Icon>,
				title: () => <span class={s.menuFont}>记一笔</span>,
				default: () => (
					<>
					
					<div class={s.wrapper}>
						<Tabs v-model:selected={formData.kind} onUpdate:selected={() => console.log(1)} class={s.tabs}>
							<Tab name="支出">
								<Tags kind='expenses' v-model:selected={formData.tags_id[0]}></Tags>
							</Tab>
							<Tab name="收入" >
								<Tags kind='income' v-model:selected={formData.tags_id[0]}></Tags>
							</Tab>
					  </Tabs>
					</div>
					<div class={s.inputPad_wrapper}>
						<InputPad
							v-model:happenAt={formData.happen_at}
							v-model:amount={formData.amount} 
							onSubmit={onSubmit}
						/>
					</div>
				  </>
				),
			}}
		</MainLayout>
	)
  }
})