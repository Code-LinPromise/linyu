import { defineComponent } from 'vue';
import { Button } from '../../components/Button';
import { FloatButton } from '../../components/FloatButton';
import s from "./style.module.scss"
import { Center } from '../../components/Center';
import { Icon } from '../../components/Icon';
export const Start = defineComponent({
  setup: (props, context) => {
    return () => (
    <div>
        <menu>menu</menu>
        <Center direction='vertical' class={s.icon_wrapper}>
            <Icon name="piggy" class={s.icon}></Icon>
        </Center>
        <div class={s.box}>
                <Button class={s.button}>开始记账</Button>
        </div>
        
        <FloatButton></FloatButton>
    </div>
    )
  }
})