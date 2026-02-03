<script setup>
import { ref, onMounted } from 'vue'

const joke = ref('正在加载笑话...')
const loading = ref(false)

// 异步函数：去互联网上“抓取”数据
async function getJoke() {
  loading.value = true
  try {
    // 调用一个公开的随机笑话接口
    const response = await fetch('https://v1.hitokoto.cn/?c=d') 
    const data = await response.json()
    joke.value = data.hitokoto // 把抓到的文字赋值给响应式变量
  } catch (error) {
    joke.value = '哎呀，网络开小差了...'
  } finally {
    loading.value = false
  }
}

// 钩子函数：页面一加载就执行一次
onMounted(() => {
  getJoke()
})
</script>

<template>
  <nav>
    <router-link to="/">首页笑话</router-link> | 
    <router-link to="/about">关于项目</router-link>
  </nav>

  <hr />

  <router-view></router-view>
</template>

<style>
nav {
  padding: 30px;
  text-align: center;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}
/* 路由激活时的样式（Vue 会自动加上这个类） */
.router-link-active {
  color: #42b883;
}
</style>

<style scoped>
.joke-container { text-align: center; margin-top: 50px; }
.joke-card {
  background: #f9f9f9;
  border-left: 5px solid #42b883;
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled { background: #ccc; }
</style>