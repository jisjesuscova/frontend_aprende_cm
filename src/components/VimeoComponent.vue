<template>
  <div class="md:container md:mx-auto">
    <h2 class="whatsapp_share mt-10 mx-auto">
      <center>
        Compartir mediante
        <a :href="getWhatsAppShareLink(post.whatsapp_type_id, post.whatsapp_url)" target="_blank">
          <i class="fa-brands fa-whatsapp whatsapp_button"></i>
        </a>
      </center>
    </h2>
    <iframe
      :src="`https://player.vimeo.com/video/${post.video_id}?playsinline=0`"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      class="video"
      width="100%"
    ></iframe>
    <h2 class="video_description mb-10">
      {{ post.video_description }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'VimeoComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    getWhatsAppShareLink(whatsapp_type_id, whatsapp_url) {
      if (whatsapp_type_id == 1) {
        return whatsapp_url
      } else {
        const shareText = 'Hola te quiero compartir un enlace de la Fundación Conecta Mayor'
        return `https://wa.me/?text=${encodeURIComponent(shareText + ' - ' + window.location.href)}`
      }
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
