<template>
  <h2 class="whatsapp_share mt-10 mx-auto">
    <center>
      Compartir mediante
      <a :href="getWhatsAppShareLink(post.whatsapp_type_id, post.whatsapp_url)" target="_blank">
        <i class="fa-brands fa-whatsapp whatsapp_button"></i>
      </a>
    </center>
  </h2>
  <div class="md:container md:mx-auto">
    {{ text_description }}
    <h2 class="video_description mb-10">
      {{ post.video_description }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'TextView',
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
