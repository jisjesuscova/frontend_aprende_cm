<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div class="w-3/4">
        <img :src="`https://paneldecontrolaprende.cl/public/storage/${post.image}`" alt="">
        <hr class="mt-5 mb-5">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageDataComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
