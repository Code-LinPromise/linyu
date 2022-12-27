
import {RouteRecordRaw} from "vue-router"
import { Welcome } from '../components/Welcome'
import { Welcome1 } from '../components/Welcome1'
import { Welcome2 } from '../components/Welcome2'
import { Welcome3 } from '../components/Welcome3'
import { Welcome4 } from '../components/Welcome4'
import { Start } from "../pages/Strat"

export const routes:RouteRecordRaw[]=[
    {
        path:"/start",component:Start
    },
    {
        path:"/welcome",component:Welcome,
        children:[
            {path:"1",component:Welcome1},
            {path:"2",component:Welcome2},
            {path:"3",component:Welcome3},
            {path:"4",component:Welcome4},
        ]
    }
]