import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
export const FloatButton = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
    <div class={s.wrapper}>
			<Icon name="add"></Icon>
    </div>
    )
  }
})