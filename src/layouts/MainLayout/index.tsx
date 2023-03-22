import { defineComponent } from 'vue';
import { NavBar } from '../../components/NavBar';
import s from './style.module.scss';
export const MainLayout = defineComponent({
  setup: (props, context) => {
    
    return () =>(
    <div class={s.wrapper}>
        <NavBar class={s.navbar}>
            {
                {
                    title:()=>context.slots.title?.(),
                    icon:()=>context.slots.icon?.() 
                }
            }
        </NavBar>
        {
            context.slots.default?.()
        }
    </div>

  )
}
})