import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../Icon';
export const TagCreate = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
   setup: (props, context) => {
    return ()=>(
        <MainLayout>
            {{
                icon:()=><Icon name="left" class={s.icon}></Icon>,
                title:()=><span class={s.font}>新建标签</span>,
                default:()=>"hi"
            }}
        </MainLayout>
    )
}
})