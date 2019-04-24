<template lang="pug">
  v-toolbar.my-toolbar(app).elevation-2
    v-toolbar-side-icon#Hamburger.hidden-sm-and-up <!-- hamburger-->
    v-spacer
    v-toolbar-items.hidden-xs-only
      // Default icons before md
      v-btn(flat) Productos
      v-btn(flat) Vender

      // Icons md and up
      v-btn(flat).hidden-sm-and-down
        v-icon(left) mdi-email-outline
        | Contáctanos
      v-btn(flat).hidden-sm-and-down
        v-icon(left) mdi-cart-outline
        | Tu carrito

      // Icons sm and down
      v-btn(flat icon).hidden-md-and-up
        v-icon(dark) mdi-email-outline
      v-btn(flat icon).hidden-md-and-up
        v-icon(dark) mdi-cart-outline

</template>

<style lang="stylus">
  
</style>
