import { defineComponent,ref } from 'vue';
import { Button } from '../../components/Button';
import { FloatButton } from '../../components/FloatButton';
import s from "./style.module.scss"
import { Center } from '../../components/Center';
import { Icon } from '../../components/Icon';
import { Overlay } from '../../components/Overlay';
import { MainLayout } from '../../layouts/MainLayout';
import { useRouter } from 'vue-router';
export const Start = defineComponent({
    
  setup: (props, context) => {
    const isShow=ref(false)
    const router =useRouter()
    const setOverlay=()=>{
        isShow.value=!isShow.value
    }
    const closeOverlay=()=>{
        isShow.value=false
    }
    const goItemCreate=()=>{
        router.push("/item/create")
    }
    return () => (
      <div>
        <MainLayout>
          {{
            icon: () => (
              <Icon name="menu" class={s.menuIcon} onClick={setOverlay}></Icon>
            ),
            title: () => <span class={s.menuFont}>山竹记账</span>,
            default: () => (
              <>
                <Center direction="vertical" class={s.icon_wrapper}>
                  <Icon name="piggy" class={s.icon}></Icon>
                </Center>
                <div class={s.box}>
                  <Button class={s.button}>开始记账</Button>
                </div>
                {isShow.value && <Overlay close={closeOverlay}></Overlay>}
                <FloatButton goItemCreate={goItemCreate}></FloatButton>
              </>
            )
          }}
        </MainLayout>
      </div>
    );
  }
})