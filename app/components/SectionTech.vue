<template>
  <section class="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80 min-h-[80vh] transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">Toolbox &amp; Technologies</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Technologies &amp; Tools</h2>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1.5">Categorized stack used across production client projects.</p>
      </div>
      
      <div class="space-y-10">
        <!-- Category 1: Mobile Development -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">01. Mobile Development</span>
            <span class="text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800/50/60">Primary Focus</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <!-- Flutter -->
            <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 minimal-card">
              <div class="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                <svg class="w-full h-full" fill="none" viewBox="0 0 24 24">
                  <path d="M14.314 0L2.3 12 6 15.7 21.7 0H14.314z" fill="#02569B"></path>
                  <path d="M14.286 9.429L8.571 15.143 14.286 20.857H21.714L16 15.143l5.714-5.714H14.286z" fill="#0175C2"></path>
                  <path d="M8.571 15.143l5.715 5.714H8.571L4.857 17.143l3.714-2z" fill="#29B6F6"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm">Flutter</h4>
                <p class="text-slate-500 dark:text-slate-400 text-xs">Cross-platform iOS &amp; Android</p>
              </div>
            </div>
            <!-- Dart -->
            <div class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 minimal-card">
              <div class="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                <svg class="w-full h-full" fill="none" viewBox="0 0 24 24">
                  <path d="M4.108 4.108A9.957 9.957 0 001.077 11.23l7.986 7.985 8.95-3.076L4.108 4.108z" fill="#01579B"></path>
                  <path d="M18.013 16.139L10.027 8.153 14.135 4.045l7.986 7.986-4.108 4.108z" fill="#00B0FF"></path>
                  <path d="M4.108 4.108L12.094 12.094 7.986 16.202 0 8.216 4.108 4.108z" fill="#29B6F6"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm">Dart</h4>
                <p class="text-slate-500 dark:text-slate-400 text-xs">Typed OOP client language</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category 2: Frontend Web Development -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">02. Frontend Web Development</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <!-- HTML5 -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#E34F26" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.6H4.6l.4 4.5h13.9l-.5 5.5-4.4 1.2-4.4-1.2-.3-2.9h-3l.5 5.4 6.8 1.9 6.8-1.9 1.1-12.5z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">HTML5</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Semantic Web</p>
            </div>
            <!-- CSS3 -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#1572B6" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.6H4.6l.4 4.5h9.4l-.4 4.5-4 1.1-4-1.1-.3-2.9h-3l.5 5.4 6.8 1.9 6.8-1.9.9-10.9H4.6"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">CSS3</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Responsive Style</p>
            </div>
            <!-- JavaScript -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#F7DF1E" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.797-1.025-.192-.29-.198-.654-.044-.995.27-.478.907-.63 1.488-.508.419.09.84.345 1.144.69.175.195.337.38.442.477l1.798-1.127c-.381-.599-.877-1.082-1.485-1.391-.84-.424-1.895-.555-2.846-.381-1.343.24-2.398 1.056-2.679 2.21-.371 1.48.243 2.76 1.706 3.42 1.095.48 2.302.766 2.459 1.407.214.764-.34 1.344-1.442 1.344-.996 0-1.62-.435-2.098-1.157l-1.884 1.139c.645 1.199 1.777 1.832 3.195 1.883 1.956.071 3.468-.909 3.553-2.614zM8.384 19.5c.34-.582.52-1.28.52-2.14v-7.14H6.38v7.03c0 .87-.27 1.35-.91 1.35-.45 0-.75-.24-.96-.66L2.83 19.1c.64 1.14 1.62 1.74 3.03 1.74 1.18 0 1.99-.44 2.52-1.34z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">JavaScript</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">ES6+ Logic</p>
            </div>
            <!-- Nuxt.js -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#00DC82" viewBox="0 0 24 24">
                  <path d="M12.27 19.38l6.8-11.78a2 2 0 013.46 2L17.7 20.38a2 2 0 01-3.46 0L12.27 19.38zm-5.04 0L14.7 6.62a2 2 0 00-3.46-2L3.77 17.38a2 2 0 001.73 3h1.73l-.001-1z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">Nuxt.js</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Vue Framework</p>
            </div>
            <!-- Tailwind CSS -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full text-[#38B2AC]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">Tailwind CSS</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Utility First</p>
            </div>
            <!-- PixiJS -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-pink-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">PixiJS</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">2D WebGL</p>
            </div>
          </div>
        </div>
        
        <!-- Category 3 & 4: Backend & Database -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Backend -->
          <div class="space-y-3">
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">03. Backend Development</span>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg class="w-full h-full" fill="#FF2D20" viewBox="0 0 24 24">
                    <path d="M21.1 6.9c-.3-.5-.7-.8-1.2-1l-7.2-4.1c-.8-.5-1.8-.5-2.6 0L2.9 5.9c-.5.2-.9.5-1.2 1C1.4 7.4 1.2 8 1.2 8.6v6.8c0 .6.2 1.2.5 1.7.3.5.7.8 1.2 1l7.2 4.1c.4.2.9.3 1.3.3s.9-.1 1.3-.3l7.2-4.1c.5-.2.9-.5 1.2-1 .3-.5.5-1.1.5-1.7V8.6c0-.6-.2-1.2-.5-1.7zm-9.7 12.8l-6-3.4V9.9l6 3.4v6.4zm1.2-7.8L6.6 8.5l6-3.4 6 3.4-6 3.4zm6 4.4l-6 3.4v-6.4l6-3.4v6.4z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">Laravel</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">API Services</p>
                </div>
              </div>
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg class="w-full h-full" fill="#339933" viewBox="0 0 24 24">
                    <path d="M12 10.97v4.61l4-2.31v-4.6l-4 2.3zM12 2l9.9 5.7v11.4L12 24.8 2.1 19.1V7.7L12 2zm7.9 15.9V8.9L12 4.4 4.1 8.9v9l7.9 4.5 7.9-4.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">Node.js</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">Runtime Env</p>
                </div>
              </div>
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center flex-shrink-0">
                  <span class="font-mono font-bold text-slate-800 dark:text-white text-xs">ex</span>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">Express.js</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">Fast REST APIs</p>
                </div>
              </div>
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg class="w-full h-full" fill="#FFA000" viewBox="0 0 24 24">
                    <path d="M3.89 15.67L6.2 1.34a.6.6 0 011.13-.15l3.18 5.96L3.89 15.67z"></path>
                    <path d="M13.8 8.87L11.53 4.6a.6.6 0 00-1.07.03L3.89 15.67l9.91-6.8z" fill="#F57C00"></path>
                    <path d="M3.89 15.67l8.28 4.66a1.5 1.5 0 001.46 0l8.47-4.66L18.4 2.82a.6.6 0 00-1.08-.27L3.89 15.67z" fill="#FFCA28"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">Firebase</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">Crashlytics &amp; Auth</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Database -->
          <div class="space-y-3">
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">04. Database Management</span>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg class="w-full h-full" fill="#4169E1" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">PostgreSQL</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">Relational SQL</p>
                </div>
              </div>
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg class="w-full h-full" fill="#FFA000" viewBox="0 0 24 24">
                    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zM5 9.5l6 3.3v7.3l-6-3.3V9.5zm14 7.3l-6 3.3v-7.3l6-3.3v7.3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">Firestore</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">NoSQL Real-Time</p>
                </div>
              </div>
              <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 minimal-card">
                <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-blue-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">Sequelize</h4>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">SQL ORM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category 5: DevOps & Tools -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">05. DevOps &amp; Development Tools</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <!-- Docker -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#2496ED" viewBox="0 0 24 24">
                  <path d="M13.98 11.08h-2.1v-2.1h2.1v2.1zm-2.73 0h-2.1v-2.1h2.1v2.1zm-2.73 0h-2.1v-2.1h2.1v2.1zm8.18 0h-2.1v-2.1h2.1v2.1zm-2.73-2.73h-2.1v-2.1h2.1v2.1zm-2.73 0h-2.1v-2.1h2.1v2.1zm-2.72 0h-2.1v-2.1h2.1v2.1zm14.47 2.37c-.3-1.9-1.9-3.2-3.8-3.2-.5 0-.9.1-1.3.3V7.2h-2.1v1.6H1.5v6.1c0 3.7 3.1 6.8 6.8 6.8 5.3 0 9.7-3.6 10.8-8.6 1.3-.2 2.6-.9 3.2-2.1z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">Docker</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Containers</p>
            </div>
            <!-- Git -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#F05032" viewBox="0 0 24 24">
                  <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.128 0L8.88 2.51l3.52 3.52a1.78 1.78 0 011.66 2.4l3.39 3.39a1.78 1.78 0 012.35 1.7l3.746-2.59zM12.44 14.86a1.78 1.78 0 01-1.78-1.78c0-.39.13-.75.34-1.05l-3.3-3.3A1.78 1.78 0 015.3 9.07l-4.85 4.85a1.5 1.5 0 000 2.12l10.48 10.48a1.5 1.5 0 002.12 0l4.85-4.85-5.46-6.81z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">Git</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Version Control</p>
            </div>
            <!-- Nginx -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#009639" viewBox="0 0 24 24">
                  <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.3l8.4 4.8v9.7L12 21.6 3.6 16.8V7.1L12 2.3zM7.5 7.5v9h2.3l4.7-6.2v6.2h2.3v-9h-2.3L9.8 13.7V7.5H7.5z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">Nginx</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Reverse Proxy</p>
            </div>
            <!-- Postman -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-1.5 mb-2">
                <svg class="w-full h-full" fill="#FF6C37" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5l-4-2.5 4-2.5v5zm0-7v-2h-2v2h2z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">Postman</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">API Testing</p>
            </div>
            <!-- n8n -->
            <div class="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center minimal-card">
              <div class="w-8 h-8 rounded bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-rose-600"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white text-xs">n8n</h4>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Automation</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
