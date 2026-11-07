import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({ plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'Digital Skills Passport',short_name:'DSP',theme_color:'#2563eb',background_color:'#f8fafc',display:'standalone',icons:[]},workbox:{globPatterns:['**/*.{js,css,html,svg,png}']}})] });
