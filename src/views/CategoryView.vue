<template>
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
    <div class="container" v-if="postQuantity > 2">
      <div class="content" ref="content">
        <div v-for="(post, index) in posts" :key="post.id">
          <NormalCategoryButton :post="post" v-if="post.content_type_id == 0" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 1" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 2" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 3" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 4" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 5" />
          <CallButton :post="post" v-if="post.content_type_id == 6" />
          <ExternalPageButton :post="post" v-if="post.content_type_id == 7" />
          <AppButton :post="post" v-if="post.content_type_id == 8" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 9" />
          <div class="pt-5"></div>
        </div>
      </div>
      <div class="buttons" >
        <!-- Botones fijos en la parte derecha -->
        <button
          @click="scrollToTop"
          class="rounded-full bg-blue-500 text-white p-5 mb-2 w-16 h-16 flex items-center justify-center"
        >
          <i class="fa-solid fa-arrow-up arrow-button"></i>
        </button>
        <button
          @click="scrollToBottom"
          class="rounded-full bg-blue-500 text-white p-5 w-16 h-16 flex items-center justify-center"
        >
          <i class="fa-solid fa-arrow-down arrow-button"></i>
        </button>
      </div>
    </div>
    <div v-else class="full-width-content">
      <div class="content" ref="content">
        <div v-for="(post, index) in posts" :key="post.id">
          <NormalCategoryButton :post="post" v-if="post.content_type_id == 0" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 1" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 2" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 3" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 4" />
          <CategoryShowButton :post="post" v-if="post.content_type_id == 5" />
          <CallButton :post="post" v-if="post.content_type_id == 6" />
          <ExternalPageButton :post="post" v-if="post.content_type_id == 7" />
          <AppButton :post="post" v-if="post.content_type_id == 8" />
          <div class="pt-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NormalCategoryButton from '@/components/NormalCategoryButtonComponent.vue'
import ExternalPageButton from '@/components/ExternalPageButtonComponent.vue'
import CallButton from '@/components/CallButtonComponent.vue'
import AppButton from '@/components/AppButtonComponent.vue'
import CategoryShowButton from '@/components/CategoryShowButtonComponent.vue'

export default {
  name: 'CategoryView',
  components: {
    NormalCategoryButton,
    ExternalPageButton,
    CallButton,
    AppButton,
    CategoryShowButton
  },
  data() {
    return {
      posts: [],
      loading: true,
      postQuantity: 0,
    }
  },
  async mounted() {
    await this.getRegion()
    await this.getCommune()
    await this.getData()
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    async getRegion() {
      try {
        const region_id = localStorage.getItem('region_id')

        if (region_id != null && region_id != undefined && region_id != '') {
          this.region = region_id
        } else {
          const response = await axios.post('/api/region/find')

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
          const response = await axios.post('/api/commune/find')

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
        const response = await axios.get(
          'https://paneldecontrolaprende.cl/api/front_category/' + this.$route.params.id + '/' + this.region + '/' + this.commune,
          {
            headers: {
              accept: 'application/json'
            }
          }
        )

        this.posts = response.data.data
        this.postQuantity = this.posts.length
        this.loading = false
      } catch (error) {
        console.error('Error al obtener la lista de categorias:', error)
      }
    },
    scrollToTop() {
      const content = this.$refs.content
      const scrollAmount = 50;
      content.scrollTo({
        top: content.scrollTop - scrollAmount,
        behavior: 'smooth'
      })
    },
    scrollToBottom() {
      const content = this.$refs.content
      const scrollAmount = 50;
      content.scrollTo({
        top: content.scrollTop + scrollAmount,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
  scrollbar-width: thin; /* Ancho del scrollbar (puedes ajustarlo) */
  -ms-overflow-style: none;
}

.content::-webkit-scrollbar {
  width: 8px; /* Ancho del scrollbar (puedes ajustarlo) */
}

.content::-webkit-scrollbar-thumb {
  background-color: #3498db; /* Color del scrollbar */
  border-radius: 4px; /* Borde redondeado del thumb */
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  background-color: #d2caca;
}

button {
  margin-bottom: 10px;
  margin-top: 170px;
}
</style>