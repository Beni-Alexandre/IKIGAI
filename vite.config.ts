// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),// Resolve '@' to the 'src' folder
      'pages': '/src/pages',
      'components': '/src/components',
       'home': '/src/home'
      
    }
  },
  server: {
    port: 5173  // Ensure Vite is running on the correct port
  }
});