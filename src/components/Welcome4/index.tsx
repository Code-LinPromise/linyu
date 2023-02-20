
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome4 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=>{
                    return (
                    <svg >
                        <use xlinkHref='#cloud'></use>
                    </svg>
                    )
                },
                title:()=><h2>云备份<br />再也不怕数据丢失</h2>,
                 
            }}
        </WelcomeLayout>
    )
  }
