import { defineComponent } from 'vue';
import s from "./style.module.scss"
export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {slots:{icon,title,buttons}}=context
    
    return () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            {icon?.()}
            {title?.()}
        </div>
        <div class={s.action}>
            {buttons?.()}
        </div>
    </div>
    )
  }
})