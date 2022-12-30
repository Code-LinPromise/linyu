
import s from "../WelcomeLayout/style.module.scss"
import chart from "../../assets/icons/chart.svg"
import {RouterLink} from "vue-router"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome3 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=><img src={chart} />,
                title:()=><h2>数据可视化<br />收支一目了然</h2>,
                
            }}
        </WelcomeLayout>
    )
  }
