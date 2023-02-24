import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';
export const NavBar = defineComponent({
  
  setup: (props, context) => {
    const {title,icon}=context.slots;
    return () => (
        <div class={s.wrapper}>
            <span>{icon?.()}</span>
            <span>{title?.()}</span>
        </div>
    )
  }
})