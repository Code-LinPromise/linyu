
import { Icon } from "../Icon"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome2 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=>{
                    return (
                        <Icon name="clock"></Icon>
                    )
                },
                title:()=><h2>每日提醒<br />不会遗漏每一笔账单</h2>,
              
            }}
        </WelcomeLayout>
    )
  }
