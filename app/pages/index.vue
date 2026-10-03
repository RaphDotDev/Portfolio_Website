<template>
  <div>
    <section id="home" class="pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 relative transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Content Left -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for New Opportunities</span>
            </div>
            <div class="space-y-3">
              <p class="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold transition-colors">
                Raphael E. Dacara
              </p>
              <h1 class="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] transition-colors">
                Flutter Developer <br>
                <span class="text-slate-500 dark:text-slate-400 font-normal">&amp; Full Stack Developer</span>
              </h1>
            </div>
            <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal transition-colors">
              Mobile and full stack developer with 2+ years of experience building, deploying, and maintaining Flutter mobile applications for iOS and Android and web applications. Skilled in Firebase, REST API and Node.js service integration, PostgreSQL, and Docker-based deployment.
            </p>
            
            <!-- Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                <span>View My Projects</span>
              </a>
              <a href="#contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0b1120] hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-300 dark:border-slate-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                <span>Contact Me</span>
              </a>
              <a :href="cvUrl" target="_blank" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                <span>Download CV</span>
              </a>
            </div>
            
            <!-- Minimal Metrics Counter Strip -->
            <div class="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-6 max-w-lg transition-colors">
              <div>
                <div class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide">Specialty</div>
                <div class="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Flutter &amp; Dart</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Cross-Platform UI</div>
              </div>
              <div>
                <div class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide">Current Role</div>
                <div class="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Mobile &amp; Full Stack</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">InventAsia Ltd.</div>
              </div>
              <div>
                <div class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide">Academic</div>
                <div class="text-lg font-bold text-blue-600 dark:text-blue-400 mt-0.5">Magna Cum Laude</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">BSIT Graduate</div>
              </div>
            </div>
          </div>
          
          <!-- Code Blueprint Visual Right -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <div class="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-md group transition-colors">
                <img alt="Raphael Dacara" class="w-full aspect-square object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADXhcdQreJaypxA_CNVO9-3M1bRDoo6vT_SZQszR3XpGoidORRE06Lw_RPxZ-i7plC59-IFUo5vqMuBYVFkwc0GKgxZyGQ2FF0sVeflpn2k0X0afmHc8CZvvF_-fJhMZrhWvJiVTEr1XxLQLLqFBX--5ineBkfYS9O6Bi97caQG0LOouIUsW-wDlWrYn_MbfeDCv2iyEygxpB432_wRzuUH3dMMlAR1fDwJxuS51gwqfCxzPa1LniL9Q6BmlVqzO8">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 dark:via-slate-900/60 to-transparent pointer-events-none transition-colors"></div>
                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md border border-white/20 dark:border-white/10 text-xs font-mono">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Flutter &amp; Full Stack</span>
                  </div>
                  <span class="text-[11px] font-mono text-slate-200 bg-slate-900/60 dark:bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Components for scrollable sections -->
    <SectionAbout id="about" />
    <SectionTech id="tech" />
    <SectionExperience id="experience" />
    <SectionProjects id="projects" />
    <SectionContact id="contact" />
  </div>
</template>

<script setup lang="ts">
import cvUrl from '~/assets/Raphael_E_Dacara_CV.pdf'
</script>
