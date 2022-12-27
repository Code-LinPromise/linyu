
import s from "../WelcomeLayout/style.module.scss"
import clock from "../../assets/icons/clock.svg"
import {RouterLink} from "vue-router"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome2 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=><img src={clock} />,
                title:()=><h2>每日提醒<br />不会遗漏每一笔账单</h2>,
                buttons:()=>
                    <>
                    <RouterLink to="/welcome/2" class={s.fake}>跳过</RouterLink>
                    <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                    </>
            }}
        </WelcomeLayout>
    )
  }
