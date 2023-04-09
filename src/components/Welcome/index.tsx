import { defineComponent, Transition, VNode,ref, watchEffect } from 'vue';
import {RouteLocationNormalizedLoaded, RouterView,useRoute,useRouter} from "vue-router"
import s from "./style.module.scss"
import { useSwipe } from '../../hooks/useSwipe';
import { throttle } from '../../shared/throttle';
import { Icon } from '../Icon';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main =ref<HTMLElement>()
    const {swipeing,direction}=useSwipe(main,{
        beforeStart:e=>e.preventDefault()
    })
    const pushMap:Record<string,string>={
        'welcome1':'/welcome/2',
        'welcome2':'/welcome/3',
        'welcome3':'/welcome/4',
        'welcome4':'/start'
    }
    const route=useRoute()
    const router=useRouter()
    const push=throttle(()=>{
        const name=(route.name || 'welcome1').toString() 
        router.push(pushMap[name])
    },500)
    watchEffect(()=>{
        if(swipeing.value && direction.value === 'left'){
            push()
        }
    })
    return () => (
    <div class={s.wrapper}>
        <header class={s.header}>
            <Icon name="mangosteen"></Icon>
            <h1 class={s.font}>淋语记账</h1>
        </header>
        <main class={s.main} ref={main} >
            <RouterView name='main'>
                {
                    ({Component:X,route:R}: { Component: VNode, route: RouteLocationNormalizedLoaded })=>
                        <Transition
                          enterFromClass={s.slide_fade_enter_from}
                          enterActiveClass={s.slide_fade_enter_active}
                          leaveToClass={s.slide_fade_leave_to}
                          leaveActiveClass={s.slide_fade_leave_active}
                        >
                          {X}
                        </Transition>
                    
                }
            </RouterView>
        </main>
        <footer class={s.footer}>
            <RouterView name='footer'/>
        </footer>
    </div>
    )
  }
})

export default Welcome