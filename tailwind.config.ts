import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          navy: '#0F172A',
          slate: '#334155',
          subtle: '#64748B',
          border: '#E2E8F0',
          canvas: '#F8FAFC',
          pure: '#FFFFFF',
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 12px 28px -4px rgba(15, 23, 42, 0.09)',
      }
    }
  }
}
