<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <button @click="$colorMode.preference = 'light'">Light</button>
    <button @click="$colorMode.preference = 'dark'">Dark</button>
  </div>
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
