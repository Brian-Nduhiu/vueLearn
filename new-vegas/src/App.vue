<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
html.dark{
  color-scheme: dark;
}
body{
  @apply bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50;
}
</style>