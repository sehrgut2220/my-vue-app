<script setup>
import { ref } from 'vue'

// 1. 定义接收的属性 (Props)
defineProps({
  title: {
    type: String,      // 规定必须是字符串
    default: '计数器'   // 如果没给值，默认叫这个
  },
  color: {
    type: String,
    default: '#42b883'
  }
})

const count = ref(0)
</script>

<template>
  <div class="counter-card" :style="{ borderColor: color }">
    <h3 :style="{ color: color }">{{ title }}</h3>
    <p>数值：{{ count }}</p>
    <button @click="count++">增加</button>
  </div>
</template>

<style scoped>
.counter-card {
  border: 2px solid;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  display: inline-block;
  width: 150px;
}
</style>