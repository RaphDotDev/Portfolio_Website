<template>
  <section class="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80 min-h-[80vh] transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">Portfolio</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Featured Projects</h2>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1.5">Selected mobile and full-stack applications.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Card -->
        <div v-for="project in projects" :key="project.title" class="minimal-card rounded-xl overflow-hidden flex flex-col">
          <div class="h-48 w-full bg-slate-100 dark:bg-slate-800 relative border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <div class="text-4xl opacity-50">{{ project.icon }}</div>
          </div>
          
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 text-[10px] font-mono font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800/50/60">
                {{ tag }}
              </span>
            </div>
            
            <div class="flex gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
              <a :href="project.demo" target="_blank" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors flex items-center gap-1">
                View Live
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a :href="project.github" target="_blank" class="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'A full-featured cross-platform mobile application built with Flutter and Firebase, featuring real-time cart synchronization and payment gateway integration.',
    icon: '🛍️',
    tags: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Task Management Dashboard',
    description: 'A modern web dashboard for team collaboration and task tracking, utilizing Nuxt 3 server routes and a PostgreSQL database.',
    icon: '📊',
    tags: ['Nuxt 3', 'Vue', 'Tailwind', 'PostgreSQL'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Social Media Analytics',
    description: 'A SaaS platform that aggregates and analyzes social media metrics using powerful data visualization libraries and a scalable Node.js backend.',
    icon: '📈',
    tags: ['Vue.js', 'Node.js', 'Express', 'D3.js'],
    demo: '#',
    github: '#'
  }
]
</script>

<style scoped>
.minimal-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.minimal-card:hover {
  border-color: #CBD5E1;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.07);
}
</style>
