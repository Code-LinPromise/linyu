import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => (
    <div class={s.wrapper}>
		<Icon name="add" class={s.icon}></Icon>
    </div>
    )
  }
})