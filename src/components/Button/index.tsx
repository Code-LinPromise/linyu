import { defineComponent, PropType } from 'vue';
import s from "./style.module.scss"
export const Button = defineComponent({
    props:{
        onClick:{
            type:Function as PropType<(e:MouseEvent)=>void>    
        },
        level:{
            type:String as PropType<"important" | "default" | "danger">,
            default: 'important'
        },
        type:{
            type:String as PropType<'submit' | 'button'>
        }
    },
  setup: (props, context) => {
    
    return () => (
    <button class={[s.button,s[props.level]]} onClick={props.onClick}>{context.slots.default?.()}</button>  
)
  }
})