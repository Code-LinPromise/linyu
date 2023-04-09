
import {RouteRecordRaw} from "vue-router"
import { Welcome1 } from '../components/Welcome1'
import { Welcome2 } from '../components/Welcome2'
import { Welcome3 } from '../components/Welcome3'
import { Welcome4 } from '../components/Welcome4'
import { WelcomeAction1 } from "../components/WelcomeAction1"
import { WelcomeAction2 } from "../components/WelcomeAction2"
import { WelcomeAction3 } from "../components/WelcomeAction3"
import { WelcomeAction4 } from "../components/WelcomeAction4"
import { ItemList } from "../components/Item/ItemList"
import { ItemCreate } from "../components/Item/ItemCreate"
import { TagCreate } from "../components/TagCreate"
import { TagEdit } from "../components/TagEdit"
import ComingSoon from "../pages/ComingSoon"
export const routes:RouteRecordRaw[]=[
    {
        path:"",redirect:"/welcome"
    },
    {
        path:"/welcome",component:()=>import('../components/Welcome'),
        beforeEnter: (to, from, next) => {
            localStorage.getItem('skipFeatures') === 'yes' ? next('/start') : next()
          },
        children:[
            {path:"",redirect:"/welcome/1"},
            {path:"1",name:"welcome1",components:{main:Welcome1,footer:WelcomeAction1}},
            {path:"2",name:"welcome2",components:{main:Welcome2,footer:WelcomeAction2}},
            {path:"3",name:"welcome3",components:{main:Welcome3,footer:WelcomeAction3}},
            {path:"4",name:"welcome4",components:{main:Welcome4,footer:WelcomeAction4}},
        ]
    },
    {
        path:"/start",component:()=>import("../pages/Strat")
    },
    
    {
        path:"/items" ,component:()=>import("../pages/ItemPage"),
        children:[
            {path:"",component:ItemList},
            {path:"create",component:ItemCreate},
        ]
    },
    {
        path:"/tags",component:()=>import("../pages/TagPage"),
        children:[
            {path:"create",component:TagCreate},
            {path:":id/edit",component:TagEdit}
        ]
    },
    {
        path:"/sign_in",component:()=>import("../pages/SignInPage"),
    },
    {
        path: '/statistics', component: ()=>import("../pages/StatisticsPage")
    }
    ,{
        path: '/export', component:()=> import("../pages/ComingSoon")
    }
    ,{
        path: '/notify', component:()=> ComingSoon
    }
]