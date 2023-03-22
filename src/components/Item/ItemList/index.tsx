import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tab, Tabs } from '../../Tabs';
import s from './style.module.scss';
export const ItemList = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
   setup: (props, context) => {
    const refSelected=ref("本月")
    return ()=>(
        <MainLayout>
            {{
                icon:()=><Icon name="menu" class={s.icon}></Icon>,
                title:()=><span class={s.font}>山竹记账</span>,
                default: () => (
                    <Tabs v-model:selected={refSelected.value}>
                        <Tab name='本月'>1</Tab>
                        <Tab name='上月'>2</Tab>
                        <Tab name='今年'>3</Tab>
                        <Tab name='自定义时间'>4</Tab>
                    </Tabs>
                )
            }}
        </MainLayout>  
    )
}
})