
import { Icon } from "../Icon"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome3 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=>{
                    return (
                        <Icon name="chart"></Icon>
                    )
                },
                title:()=><h2>数据可视化<br />收支一目了然</h2>,
                
            }}
        </WelcomeLayout>
    )
  }
