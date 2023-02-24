import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<'add' | "chart" | "clock" | "cloud" |
                             "mangosteen" | "piggy" | "menu">
    }
  },
  setup: (props, context) => {
    props:["name"]
    return () => (
        <svg class={s.svg}  >
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
  }
})