<template>
  <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>An event occured.</q-item-label>
          <q-item-label caption>Secondary line text. Event details...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>X min ago/timestamp</q-item-label>
          <q-icon name="done" color="green" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Another event occured.</q-item-label>
          <q-item-label caption>Secondary line text. Event details...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>X min ago/timestamp</q-item-label>
          <q-icon name="clear" color="red" />
        </q-item-section>
      </q-item>
    </q-list>
</template>

<script>
export default {
  // name: 'TransactionFeed',
  data () {
    return {}
  }
}
</script>
