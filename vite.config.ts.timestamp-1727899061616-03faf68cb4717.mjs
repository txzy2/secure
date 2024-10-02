// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/kamae/Documents/Work/niyaz/secure-site/node_modules/.pnpm/vite@5.4.0_@types+node@20.14.15_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/kamae/Documents/Work/niyaz/secure-site/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.0_@types+node@20.14.15_sass@1.77.8__vue@3.4.37_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/kamae/Documents/Work/niyaz/secure-site/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.7_rollup@4.20.0_vite@5.4.0_@types+node@20.14.15_sass@1.77.8__vue@3.4.37_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import tailwind from "file:///C:/Users/kamae/Documents/Work/niyaz/secure-site/node_modules/.pnpm/tailwindcss@3.4.12/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/kamae/Documents/Work/niyaz/secure-site/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.47/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/kamae/Documents/Work/niyaz/secure-site/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/secure/",
  server: {
    port: 4e3
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrYW1hZVxcXFxEb2N1bWVudHNcXFxcV29ya1xcXFxuaXlhelxcXFxzZWN1cmUtc2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca2FtYWVcXFxcRG9jdW1lbnRzXFxcXFdvcmtcXFxcbml5YXpcXFxcc2VjdXJlLXNpdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2thbWFlL0RvY3VtZW50cy9Xb3JrL25peWF6L3NlY3VyZS1zaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJztcclxuXHJcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJztcclxuXHJcbmltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcyc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogJy9zZWN1cmUvJyxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDQwMDBcclxuICB9LFxyXG5cclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW3RhaWx3aW5kKCksIGF1dG9wcmVmaXhlcigpXVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IFt2dWUoKSwgdnVlRGV2VG9vbHMoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZVLFNBQVEsZUFBZSxXQUFVO0FBRTlXLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUV4QixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFQMEwsSUFBTSwyQ0FBMkM7QUFVcFEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQzlCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
