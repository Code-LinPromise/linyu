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
    return () => (
		<MainLayout>
			{{
				icon: () => <Icon name="left" class={s.menuIcon} onClick={back}></Icon>,
				title: () => <span class={s.menuFont}>记一笔</span>,
				default: () => (
					<>
						<Tabs v-model:selected={refKind.value}>
							<Tab name="收入">123</Tab>
							<Tab name="支出">1456</Tab>
						</Tabs>
						<InputPad></InputPad>
					</>
				),
			}}
		</MainLayout>
	)
  }
})