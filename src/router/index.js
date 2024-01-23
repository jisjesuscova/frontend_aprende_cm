import { createRouter, createWebHistory } from 'vue-router'
import SectionView from '../views/SectionView.vue'
import SectionShowView from '../views/SectionShowView.vue'
import CategoryView from '../views/CategoryView.vue'
import CategoryShowView from '../views/CategoryShowView.vue'
import ContentView from '../views/ContentView.vue'
import ContentShowView from '../views/ContentShowView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'section_view',
      component: SectionView,
      meta: {
        title: "Aprende Conecta Mayor - Secciones"
      },
    },
    {
      path: '/section/show/:id',
      name: 'section_show',
      component: SectionShowView,
      meta: {
        title: "Aprende Conecta Mayor - Detalle de Sección"
      },
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView,
      meta: {
        title: "Aprende Conecta Mayor - Categorias"
      },
    },
    {
      path: '/category/show/:id',
      name: 'category_show',
      component: CategoryShowView,
      meta: {
        title: "Aprende Conecta Mayor - Detalle de Categoría"
      },
    },
    {
      path: '/content/:section_id/:category_id',
      name: 'content',
      component: ContentView,
      meta: {
        title: "Aprende Conecta Mayor - Contenido"
      },
    },
    {
      path: '/content/show/:id',
      name: 'content_show',
      component: ContentShowView,
      meta: {
        title: "Aprende Conecta Mayor - Detalle de Contenido"
      },
    },
  ]
})

export default router
