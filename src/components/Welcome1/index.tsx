import s from "../WelcomeLayout/style.module.scss"
import piggy from "../../assets/icons/piggy.svg"
import {RouterLink} from "vue-router"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome1 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=><img src={piggy} />,
                title:()=><h2>会挣钱<br />还会省钱</h2>,
            }}
        </WelcomeLayout>
    )
  }
