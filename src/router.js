import { createRouter, createWebHistory } from 'vue-router'
import CardDataList from './components/card/CardDataList'

const routes = [
    {
        path: "/",
        alias: "/tutorials",
        name: "tutorials",
        component: CardDataList
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router