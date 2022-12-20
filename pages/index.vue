<script setup lang="ts">
const colorMode = useColorMode()
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="w-screen h-screen bg-gray-100 dark:bg-slate-900">
    <div class="flex items-center justify-between p-4">
      <h1 class="text-xl dark:text-white">Color mode: {{ $colorMode.value }}</h1>
      <form class="h-6">
        <input type="checkbox" class="hidden" id="dark-mode" @change="toggleDarkMode">
        <label class="checkbox" for="dark-mode" />
      </form>
    </div>
    <div class="max-w-[800px] mx-auto mt-8">
      <div class="grid grid-cols-3 gap-x-4">
        <div class="space-y-2 rounded-lg bg-white px-6 py-8 ring-1 ring-slate-900/5 dark:bg-slate-800">
          <h3 class="text-slate-900 dark:text-white">Writes Upside-Down</h3>
          <p class="text-sm text-slate-500 dark-text-slate-400">The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
        </div>
        <div class="space-y-2 rounded-lg bg-white px-6 py-8 ring-1 ring-slate-900/5 dark:bg-slate-800">
          <h3 class="text-slate-900 dark:text-white">Writes Upside-Down</h3>
          <p class="text-sm text-slate-500 dark-text-slate-400">The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
        </div>
        <div class="space-y-2 rounded-lg bg-white px-6 py-8 ring-1 ring-slate-900/5 dark:bg-slate-800">
          <h3 class="text-slate-900 dark:text-white">Writes Upside-Down</h3>
          <p class="text-sm text-slate-500 dark-text-slate-400">The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  width: 48px;
  height: 24px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.4s;
  box-sizing: border-box;
  cursor: pointer;
}

.checkbox::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
}

input:checked + label {
  background-color: #4BD865;
}

input:checked + label::after {
  left: 24px;
}
</style>
