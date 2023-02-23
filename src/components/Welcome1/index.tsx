import { Icon } from "../Icon"
import {WelcomeLayout} from "../WelcomeLayout"
export const Welcome1 = () => {
    return () => (
        <WelcomeLayout>
            {{
                icon:()=>{
                    return (
                    <Icon name="piggy"></Icon>
                    )
                },
                title:()=><h2>会挣钱<br />还会省钱</h2>,
            }}
        </WelcomeLayout>
    )
  }
