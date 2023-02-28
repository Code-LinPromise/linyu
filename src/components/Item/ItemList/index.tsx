import { defineComponent, PropType } from 'vue';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import s from './style.module.scss';
export const ItemList = defineComponent({
  
  setup: (props, context) => {
    return () => (
            <MainLayout>
                {{
                    icon:()=><Icon name='left' class={s.menuIcon}></Icon>,
                    title:()=><span class={s.menuFont}>记一笔</span>,
                    default:()=>"hi"
                }}
            </MainLayout>
    )
  }
})