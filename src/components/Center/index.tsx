import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';

const directionMap={
    '-':"horizontal",
    '|':"vertical",
    'horizontal':"horizontal",
    'vertical':"vertical"
}
export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'-'|'|'|'horizontal'|'vertical'>,
      default:"horizontal"
    }
  },
  setup: (props, context) => {
    const direction=directionMap[props.direction]
    return () => (
    <div class={[s.wrapper,direction]}>
        {
            context.slots.default?.()
        }
    </div>
    )
  }
})