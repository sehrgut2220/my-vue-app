import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入刚才写的地图

const app = createApp(App)
app.use(router) // 告诉 Vue：我们要使用路由功能
app.mount('#app')