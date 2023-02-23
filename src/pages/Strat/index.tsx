import { defineComponent } from 'vue';
import { Button } from '../../components/Button';
import s from "./style.module.scss"
export const Start = defineComponent({
  setup: (props, context) => {
    return () => (
    <div>
        <div class={s.box}>
            <Button class={s.button}>測試</Button>
        </div>
    </div>
    )
  }
})