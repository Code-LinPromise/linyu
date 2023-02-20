import { createApp } from 'vue'
import { App } from './App'
import { history } from './shared/history'
import {createRouter} from "vue-router"
import { routes } from './router'
import '@svgstore';


const router=createRouter({
    history,
    routes
})
createApp(App).use(router).mount('#app')
