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
  <div class="joke-container">
    <h1>😄 每日一乐</h1>
    
    <div class="joke-card">
      <p v-if="!loading">{{ joke }}</p>
      <p v-else>正在找笑话，请稍等...</p>
    </div>

    <button @click="getJoke" :disabled="loading">
      {{ loading ? '寻找中...' : '再来一个' }}
    </button>
  </div>
</template>

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