import { defineComponent } from 'vue';
import s from "./style.module.scss"
export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {slots:{icon,title}}=context
    return () => (
      <div class={s.card}>
        {icon?.()}
        {title?.()}
      </div>
    );
  }
})