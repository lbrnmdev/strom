<template>
  <q-page class="flex flex-center">
    <transactionFeed></transactionFeed>
  </q-page>
</template>

<script>
import TransactionFeed from '../components/TransactionFeed'

export default {
  name: 'PageWatch',
  components: { TransactionFeed },
  data () {
    return {}
  }
}
</script>
