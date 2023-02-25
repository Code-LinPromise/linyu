import { defineComponent, PropType } from 'vue';
import s from "./style.module.scss"
export const Button = defineComponent({
    props:{
        onClick:{
            type:Function as PropType<(e:MouseEvent)=>void>
            
        }
    },
  setup: (props, context) => {
    
    return () => (
    <button class={s.button}>{context.slots.default?.()}</button>  
)
  }
})