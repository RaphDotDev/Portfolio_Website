<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[scrolled ? 'bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3' : 'bg-transparent py-4']">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Brand Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none">
        <div class="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white transition-all group-hover:bg-blue-600">
          <span class="font-mono font-bold text-xs tracking-tight">RD</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Raphael Dacara</span>
          <span class="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-0.5">Developer</span>
        </div>
      </NuxtLink>
      
      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 text-xs font-medium">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path" class="px-3.5 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all" active-class="bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm">
          {{ link.name }}
        </NuxtLink>
      </nav>
      
      <div class="flex items-center gap-3">
        <ClientOnly>
          <button @click="toggleColorMode" class="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none">
            <!-- Sun Icon (shows in dark mode) -->
            <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            <!-- Moon Icon (shows in light mode) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>
          <template #fallback>
            <div class="w-9 h-9"></div>
          </template>
        </ClientOnly>
        
        <!-- Mobile Menu Toggle -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <NuxtLink to="#contact" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200 shadow-sm">
          <span>Let's Talk</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-4 flex flex-col gap-2">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path" @click="isMobileMenuOpen = false" class="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
        {{ link.name }}
      </NuxtLink>
      <NuxtLink to="#contact" @click="isMobileMenuOpen = false" class="sm:hidden mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 transition-all shadow-sm">
        <span>Let's Talk</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrolled = ref(false)
const isMobileMenuOpen = ref(false)

const links = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Technologies', path: '#tech' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
