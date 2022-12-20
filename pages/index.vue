<template>
  <div>
    <h1 class="text-xl dark:text-xs">Color mode: {{ $colorMode.value }}</h1>
    <button @click="$colorMode.preference = 'light'">Light</button>
    <button @click="$colorMode.preference = 'dark'">Dark</button>
  </div>
</template>
