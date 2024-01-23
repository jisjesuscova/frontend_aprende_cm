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
      :src="`https://docs.google.com/viewer?url=${
        'https://paneldecontrolaprende.cl/public/storage/' + post.pdf
      }&embedded=true`"
      width="100%"
      class="pdf"
      style="border: none"
    ></iframe>
    <h2 class="pdf_description mb-10">
      {{ post.pdf_description }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'PdfDataComponent',
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
