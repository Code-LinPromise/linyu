import { defineComponent } from 'vue';
import { NavBar } from '../../components/NavBar';
import s from './style.module.scss';
export const MainLayout = defineComponent({
  setup: (props, context) => {
    
    return () =>(
    <>
        <NavBar>
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
    </>

  )
}
})