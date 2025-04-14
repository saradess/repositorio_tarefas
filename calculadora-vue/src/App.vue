<template>
  <div class="container mt-5 fade-in">
    <CalculatorCard />
  </div>
</template>

<script setup>
import CalculatorCard from './components/CalculatorCard.vue';
</script>

<style>
html body {
  background-color: #121212;
  color: #f8f9fa;
  font-family: 'Segoe UI', sans-serif;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
