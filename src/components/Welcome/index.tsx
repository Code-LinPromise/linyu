import { defineComponent } from 'vue';
import {RouterView} from "vue-router"
import s from "./style.module.scss"
import logo from "../../assets/icons/mangosteen.svg"
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
    <div class={s.wrapper}>
        <header class={s.header}>
            <img src={logo} class={s.img}/>
            <h1 class={s.font}>山竹记账</h1>
        </header>
        <main class={s.main}>
            <RouterView/>
        </main>
    </div>
    )
  }
})