<template>
    <div class="mt-4 text-center">
    <h4 class="text-info">
        <i class="bi bi-equals me-2"></i>Resultado: {{ resultado }}
    </h4>
    </div>
</template>y

<script setup>
defineProps(['resultado']);
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
