
import {RouteRecordRaw} from "vue-router"
import { Welcome } from '../components/Welcome'
import { Welcome1 } from '../components/Welcome1'
import { Welcome2 } from '../components/Welcome2'
import { Welcome3 } from '../components/Welcome3'
import { Welcome4 } from '../components/Welcome4'
import { WelcomeAction1 } from "../components/WelcomeAction1"
import { WelcomeAction2 } from "../components/WelcomeAction2"
import { WelcomeAction3 } from "../components/WelcomeAction3"
import { WelcomeAction4 } from "../components/WelcomeAction4"
import { Start } from "../pages/Strat"

export const routes:RouteRecordRaw[]=[
    {
        path:"",redirect:"/welcome"
    },
    {
        path:"/start",component:Start
    },
    {
        path:"/welcome",component:Welcome,
        children:[
            {path:"",redirect:"/welcome/1"},
            {path:"1",name:"welcome1",components:{main:Welcome1,footer:WelcomeAction1}},
            {path:"2",name:"welcome2",components:{main:Welcome2,footer:WelcomeAction2}},
            {path:"3",name:"welcome3",components:{main:Welcome3,footer:WelcomeAction3}},
            {path:"4",name:"welcome4",components:{main:Welcome4,footer:WelcomeAction4}},
        ]
    }
]