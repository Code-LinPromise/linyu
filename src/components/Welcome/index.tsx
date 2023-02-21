import { defineComponent, Transition, VNode,ref, watchEffect } from 'vue';
import {RouteLocationNormalizedLoaded, RouterView} from "vue-router"
import s from "./style.module.scss"
import { useSwipe } from '../../hooks/useSwipe';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main =ref<HTMLElement | null>(null)
    const {direction} =useSwipe(main)
    watchEffect(()=>{
        console.log(direction.value)
    })
    return () => (
    <div class={s.wrapper}>
        <header class={s.header}>
            <svg >
                <use xlinkHref='#mangosteen'></use>
            </svg>
            <h1 class={s.font}>山竹记账</h1>
        </header>
        <main class={s.main} ref={main}>
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