
import s from "../WelcomeLayout/style.module.scss"
import cloud from "../../assets/icons/cloud.svg"
import {RouterLink} from "vue-router"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome4 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=><img src={cloud} />,
                title:()=><h2>云备份<br />再也不怕数据丢失</h2>,
                buttons:()=>
                    <>
                    <RouterLink to="/welcome/2" class={s.fake}>跳过</RouterLink>
                    <RouterLink to="/start">开启应用</RouterLink>
                    <RouterLink to="/welcome/2" class={s.fake}>跳过</RouterLink>
                    </>
            }}
        </WelcomeLayout>
    )
  }
