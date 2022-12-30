
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
              
            }}
        </WelcomeLayout>
    )
  }
