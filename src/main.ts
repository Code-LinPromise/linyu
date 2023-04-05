import { createApp } from 'vue'
import { App } from './App'
import { history } from './shared/history'
import {createRouter} from "vue-router"
import { http } from './shared/Http';
import { fetchMe, mePromise } from './shared/me';
import { routes } from './router'
import '@svgstore';



const router=createRouter({
    history,
    routes
})

fetchMe()

router.beforeEach(async (to, from) => {
  if (to.path === '/' || to.path.startsWith('/welcome') || to.path.startsWith('/sign_in')
    || to.path === '/start') {
    return true
  } else {
    const path = await mePromise!.then(
      () => true,
      () => '/sign_in?return_to=' + to.path
    )
    return path
  }
})
createApp(App).use(router).mount('#app')
