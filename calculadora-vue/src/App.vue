<script setup>

</script>

<template>
<div id="app" class="container mt-5 fade-in">
    <div class="card shadow p-4">
      <h2 class="text-center mb-4">
        <i class="bi bi-calculator-fill me-2"></i>
        Calculadora Aritmética
      </h2>
      <form class="row g-3">
        <div class="col-md-4">
          <label class="form-label text-light"><i class="bi bi-123 me-1"></i>Número 1</label>
          <input type="number" class="form-control bg-dark text-light border-light" v-model.number="numero1" placeholder="Número 1">
        </div>
        <div class="col-md-4">
          <label class="form-label text-light"><i class="bi bi-list me-1"></i>Operação</label>
          <select class="form-select bg-dark text-light border-light" v-model="operacao">
            <option value="+">Adição (+)</option>
            <option value="-">Subtração (-)</option>
            <option value="*">Multiplicação (*)</option>
            <option value="/">Divisão (/)</option>
          </select>
        </div>
        <div class="col-md-4">
          <label class="form-label text-light"><i class="bi bi-123 me-1"></i>Número 2</label>
          <input type="number" class="form-control bg-dark text-light border-light" v-model.number="numero2" placeholder="Número 2">
        </div>
      </form>
      <div class="mt-4 text-center">
        <h4 class="text-info">
          <i class="bi bi-equals me-2"></i>Resultado: {{ resultado }}
        </h4>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #121212;
  color: #f8f9fa;
  font-family: 'Segoe UI', sans-serif;
}

.card {
  background-color: #1f1f1f;
  border: none;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>
