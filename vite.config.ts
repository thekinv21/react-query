import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
// Eklendi
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url) // __filename tanımlandı
const __dirname = path.dirname(__filename) // __dirname hesaplandı

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src') // __dirname kullanıldı
		}
	}
})
