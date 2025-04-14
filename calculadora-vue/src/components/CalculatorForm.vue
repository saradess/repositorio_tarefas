<template>
    <form class="row g-3">
    <div class="col-md-4">
        <label class="form-label text-light">
        <i class="bi bi-123 me-1"></i>Número 1
        </label>
        <input
        type="number"
        class="form-control bg-dark text-light border-light"
        :value="numero1"
        @input="$emit('update-numero1', Number($event.target.value))"
        placeholder="Número 1"
        >
    </div>

    <div class="col-md-4">
        <label class="form-label text-light">
        <i class="bi bi-list me-1"></i>Operação
        </label>
        <select
        class="form-select bg-dark text-light border-light"
        :value="operacao"
        @change="$emit('update-operacao', $event.target.value)"
        >
        <option value="+">Adição (+)</option>
        <option value="-">Subtração (-)</option>
        <option value="*">Multiplicação (*)</option>
        <option value="/">Divisão (/)</option>
        </select>
    </div>

    <div class="col-md-4">
        <label class="form-label text-light">
        <i class="bi bi-123 me-1"></i>Número 2
        </label>
        <input
        type="number"
        class="form-control bg-dark text-light border-light"
        :value="numero2"
        @input="$emit('update-numero2', Number($event.target.value))"
        placeholder="Número 2"
        >
    </div>
    </form>
</template>

<script setup>
defineProps(['numero1', 'numero2', 'operacao']);
defineEmits(['update-numero1', 'update-numero2', 'update-operacao']);
</script>
