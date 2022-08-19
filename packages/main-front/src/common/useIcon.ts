/**
 * 导入elementUI 使用的所有Icon
 *
 */

import { App } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export default {
  install(app: App) {
    // Reflect.ownKeys(ElementPlusIconsVue).forEach(icon => {
    //   app.component(icon as string, ElementPlusIconsVue[icon]);
    // });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};