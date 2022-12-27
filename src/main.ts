import { createApp } from 'vue'
import { App } from './App'
import { history } from './shared/history'
import {createRouter} from "vue-router"
import { routes } from './router'


const router=createRouter({
    history,
    routes
})
createApp(App).use(router).mount('#app')
