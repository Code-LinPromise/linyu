import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
export const InputPad = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
   setup: (props, context) => {
    return ()=>(
        <div class={s.wrapper}>
            <span>
                <Icon name="notes"></Icon>
            </span>
            <span>time</span>
            <input type="text" />
        </div>
    )
}
})