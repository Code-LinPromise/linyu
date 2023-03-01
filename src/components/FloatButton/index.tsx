import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
export const FloatButton = defineComponent({
  props:{
    goItemCreate:{
      type:Function as PropType<(even:MouseEvent)=>void>
    }
  },
  setup: (props, context) => {
    return () => (
    <div class={s.wrapper} onClick={props.goItemCreate}>
		<Icon name="add" class={s.icon}></Icon>
    </div>
    )
  }
})