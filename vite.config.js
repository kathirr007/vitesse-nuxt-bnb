import { defineConfig } from 'vite'
import StylelintPlugin from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [StylelintPlugin(
    { fix: true },
  )],
  publicDir: 'public'
})
