<template>
  <q-layout view="hHh lpR fff">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <strong>telco</strong>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- injection point -->
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-3 text-white">
      <q-bar>
        <div class="col text-center">
          lbrnm®
        </div>
      </q-bar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
