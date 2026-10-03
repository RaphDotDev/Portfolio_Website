<template>
  <section class="py-16 md:py-20 bg-slate-50/60 dark:bg-slate-900/20 border-b border-slate-200/80 dark:border-slate-800/80 min-h-[80vh] transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">Background</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">About Me</h2>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1.5">A clear overview of my engineering journey and core competencies.</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Editorial Bio Column -->
        <div class="lg:col-span-6 bg-white dark:bg-slate-900/50 p-7 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-blue-600 dark:text-blue-400"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Passionate Builder &amp; Problem Solver
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            I'm <strong class="text-slate-900 dark:text-white">Raphael E. Dacara</strong>, a mobile and full stack developer with 2+ years of experience building, deploying, and maintaining Flutter mobile applications for iOS and Android and web applications.
          </p>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Currently working as <strong class="text-slate-900 dark:text-white">Mobile Developer / Full Stack Developer at InventAsia Ltd.</strong>, delivering assigned features, app stability, and App Store / Google Play releases, with prior experience at <strong class="text-slate-900 dark:text-white">Centralized Cloud Computing Inc.</strong>
          </p>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Skilled in Firebase Crashlytics &amp; Analytics, REST API and Laravel service integration, Node.js, PostgreSQL relational modeling, and Docker containerization.
          </p>
          
          <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-start gap-3.5 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/50">
              <div class="p-2 rounded bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">Bachelor of Science in Information Technology</h4>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                    Magna Cum Laude
                  </span>
                </div>
                <p class="text-slate-500 dark:text-slate-400 text-xs mt-1">Polytechnic University of the Philippines – Santa Maria Bulacan Campus</p>
                <p class="text-[11px] font-mono text-blue-600 dark:text-blue-400 mt-1">2020 – 2024</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Structured Highlights Grid -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">Flutter Mobile</h4>
            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">Feature delivery, bug fixing, regression testing, and responsive UI optimization.</p>
          </div>
          <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">Node.js &amp; REST API</h4>
            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">Integrating mobile apps with Node.js backends, REST endpoints, and external SDKs.</p>
          </div>
          <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-slate-700 dark:text-slate-300"><path d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path></svg>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">Firebase Crashlytics</h4>
            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">Real-time crash reporting, diagnostic logging, and stability monitoring in production.</p>
          </div>
          <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">Database Management</h4>
            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">Relational modeling in PostgreSQL and real-time data storage with Firebase Firestore.</p>
          </div>
          <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">App Store &amp; Play Store Releases</h4>
            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">Build preparation, versioning, release readiness notes, and deployment management.</p>
          </div>
          <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-slate-700 dark:text-slate-300"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">Real-Time &amp; Automation</h4>
            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">Bidirectional communication with Socket.IO and workflow automation via n8n.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
