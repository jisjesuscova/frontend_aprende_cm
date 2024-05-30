<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div class="w-3/4 h-3/4">
        <h2 class="whatsapp_share mt-10 mx-auto">
          <center>
            Compartir mediante
            <a :href="getWhatsAppShareLink(post.whatsapp_type_id, post.whatsapp_url)" target="_blank">
              <i class="fa-brands fa-whatsapp whatsapp_button"></i>
            </a>
          </center>
        </h2>
        <audio controls>
          <source :src="post.audio_src" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>
        <br>
        <hr>
        <h2 class="video_description mb-10">
          {{ post.src_description }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioDataComponent',
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
