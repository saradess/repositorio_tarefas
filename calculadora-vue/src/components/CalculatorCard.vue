<template>
    <div class="card shadow p-4">
    <h2 class="text-center mb-4 text-white">
        <i class="bi bi-calculator-fill me-2"></i>
        Calculadora Aritmética
    </h2>

    <CalculatorForm
        :numero1="numero1"
        :numero2="numero2"
        :operacao="operacao"
        @update-numero1="(val) => numero1 = val"
        @update-numero2="(val) => numero2 = val"
        @update-operacao="(val) => operacao = val"
    />

    <CalculatorResult :resultado="resultado" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CalculatorForm from './CalculatorForm.vue';
import CalculatorResult from './CalculatorResult.vue';

let numero1 = ref(0);
let numero2 = ref(0);
let operacao = ref('+');

const resultado = computed(() => {
    switch (operacao.value) {
    case '+': return numero1.value + numero2.value;
    case '-': return numero1.value - numero2.value;
    case '*': return numero1.value * numero2.value;
    case '/': return numero2.value !== 0 ? numero1.value / numero2.value : 'Erro';
    default: return 0;
    }
});
</script>

<style scoped>
.card {
    background-color: #1f1f1f !important;
    border: none !important;
    transition: all 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.01);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
}
</style>
