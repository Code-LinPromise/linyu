
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome2 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=>{
                    return (
                    <svg >
                        <use xlinkHref='#clock'></use>
                    </svg>
                    )
                },
                title:()=><h2>每日提醒<br />不会遗漏每一笔账单</h2>,
              
            }}
        </WelcomeLayout>
    )
  }
