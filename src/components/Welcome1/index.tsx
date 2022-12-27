import { defineComponent } from 'vue';
import s from "./style.module.scss"
import piggy from "../../assets/icons/piggy.svg"
import {RouterLink} from "vue-router"
export const Welcome1 = defineComponent({
  setup: (props, context) => {
    return () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <img src={piggy} />
            <h2>会省钱<br />还要会花钱</h2>
        </div>
        <div class={s.action}>
            <RouterLink to="/welcome/2" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/welcome/2">跳过</RouterLink>
        </div>
    </div>
    )
  }
})