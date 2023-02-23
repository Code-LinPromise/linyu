
import { Icon } from "../Icon"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome4 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=>{
                    return (
                        <Icon name="cloud"></Icon>
                
                    )
                },
                title:()=><h2>云备份<br />再也不怕数据丢失</h2>,
                 
            }}
        </WelcomeLayout>
    )
  }
