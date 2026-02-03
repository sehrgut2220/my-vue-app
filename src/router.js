import { createRouter, createWebHistory } from 'vue-router'
// 导入你的页面组件
import HomeView from './components/JokeView.vue' // 假设你把笑话代码改名存这了
import AboutView from './components/AboutView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
]

const router = createRouter({
    history: createWebHistory(), // 使用干净的 URL（没有 # 号）
    routes
})

export default router