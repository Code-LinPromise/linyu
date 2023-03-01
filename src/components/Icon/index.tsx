import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';
export const Icon = defineComponent({
  props: {
    name: {
        type: String as PropType<'add' | "chart" | "clock" | "cloud" |
                             "mangosteen" | "piggy" | "menu" |"charts" |"classification"
                             |"export" |"notify" |"left" |"notes">,
        require:true
    },
    onClick:{
        type:Function as PropType<(e:MouseEvent)=>void>
    }
  },
  setup: (props, context) => {
    return () => (
        <svg class={s.svg} onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
  }
})