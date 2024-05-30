<template>
  <div class="md:container md:mx-auto">
    <div v-if="loading">
      <div class="flex h-screen items-center justify-center">
        <div class="w-1/12">
          <div class="flex flex-col w-full">
            <img src="../assets/images/spinner.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="../assets/images/logo_frontend.png" alt="" class="mx-auto pt-2 logo" />
      <h1 class="text-center pb-2 pt-2 text-base font-bold">
        Haz click en los botones para ver cada contenido
      </h1>
      <!-- Sección para mostrar las secciones -->
      <div class="flex flex-wrap pt-5">
        <div v-for="(post, index) in posts" :key="post.id" class="w-1/2 mb-8">
          <NormalSectionButton :post="post" v-if="post.content_type_id == 0" />
          <SectionShowButton :post="post" v-if="post.content_type_id == 1" />
          <SectionShowButton :post="post" v-if="post.content_type_id == 2" />
          <SectionShowButton :post="post" v-if="post.content_type_id == 3" />
          <SectionShowButton :post="post" v-if="post.content_type_id == 4" />
          <SectionShowButton :post="post" v-if="post.content_type_id == 5" />
          <CallButton :post="post" v-if="post.content_type_id == 6" />
          <ExternalPageButton :post="post" v-if="post.content_type_id == 7" />
          <AppButton :post="post" v-if="post.content_type_id == 8" />
          <SectionShowButton :post="post" v-if="post.content_type_id == 9" />

          <!-- Agregar un elemento de separación después de cada segundo elemento -->
          <div v-if="(index + 1) % 2 === 0" class="w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NormalSectionButton from '@/components/NormalSectionButtonComponent.vue'
import ExternalPageButton from '@/components/ExternalPageButtonComponent.vue'
import CallButton from '@/components/CallButtonComponent.vue'
import AppButton from '@/components/AppButtonComponent.vue'
import SectionShowButton from '@/components/SectionShowButtonComponent.vue'

export default {
  name: 'SectionView',
  components: {
    NormalSectionButton,
    ExternalPageButton,
    CallButton,
    AppButton,
    SectionShowButton
  },
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  methods: {
    async getRegion() {
      try {
        const region_id = localStorage.getItem('region_id')

        if (region_id != null && region_id != undefined && region_id != '') {
          this.region = region_id
        } else {
          const response = await axios.post('https://paneldecontrolaprende.cl/api/region/find')

          this.region = response.data.data.region_id

          localStorage.setItem('region_id', this.region)
        }
        
      } catch (error) {
        console.log(error)
      }
    },
    async getCommune() {
      try {
        const commune_id = localStorage.getItem('commune_id')

        if (commune_id != null && commune_id != undefined && commune_id != '') {
          this.commune = commune_id
        } else {
          const response = await axios.post('https://paneldecontrolaprende.cl/api/commune/find')

          this.commune = response.data.data.commune_id

          localStorage.setItem('commune_id', this.commune)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getData() {
      this.loading = true

      try {
        const response = await axios.post('https://paneldecontrolaprende.cl/api/front_section/'+this.region+'/'+this.commune, {
          headers: {
            accept: 'application/json'
          }
        })

        this.posts = response.data.data
        this.loading = false
      } catch (error) {
        console.error('Error al obtener la lista de secciones:', error)
      }
    }
  },
  async mounted() {
    await this.getRegion()
    await this.getCommune()
    await this.getData()
  }
}
</script>
<style scoped>
.logo {
  height: 60px !important;
}
</style>