<template>
  <div class="bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-200 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/50 selection:text-blue-900 dark:selection:text-blue-200 relative min-h-screen antialiased transition-colors duration-300">
    <TheNav />
    <main class="pt-16">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
/* Minimalist Light Aesthetics */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

body {
  background-color: #FFFFFF;
  color: #0F172A;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}

.dark body {
  background-color: #0b1120;
  color: #e2e8f0;
}

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

.dark .minimal-card {
  background: #0f172a;
  border-color: #1e293b;
}
.dark .minimal-card:hover {
  border-color: #334155;
  box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.5);
}

/* Clean Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #F8FAFC;
}
.dark ::-webkit-scrollbar-track {
  background: #0b1120;
}
::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 9999px;
}
.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}
::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}
.dark ::-webkit-scrollbar-thumb:hover {
  background: #475569;
}
</style>
