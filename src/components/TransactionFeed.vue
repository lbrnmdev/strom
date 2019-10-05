<template>
    <div class="fit row wrap justify-center">
      <div v-if="status == 'no connection yet'" class="col-2 self-center">
        <q-card flat>
          <q-card-section align="center">
            <div class="text-h6">{{ status }}</div>
          </q-card-section>
          <q-card-actions vertical align="center">
            <q-btn @click="connect" outline rounded color="green" icon="power" >
              <q-tooltip anchor="bottom middle" self="top middle">
                  connect
                </q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div v-if="items.length > 0" class="col-6">
        <div class="row">
          <div class="col-12">
            <q-bar class="bg-primary text-white">
              <q-btn v-if="status == 'connected'" @click="disconnect" dense round flat icon="power">
                <q-tooltip anchor="top middle" self="bottom middle">
                  click to disconnect
                </q-tooltip>
              </q-btn>
              <q-btn v-else @click="connect" dense round flat icon="power_off">
                <q-tooltip anchor="top middle" self="bottom middle">
                  click to connect
                </q-tooltip>
              </q-btn>
              <div class="col text-center">event feed</div>
            </q-bar>
            <q-scroll-area ref="transactionFeedScrollArea" style="height: 400px;">
              <q-list separator>
                <q-item v-for="item in items" v-bind:key="item.id">
                  <q-item-section>
                    <q-item-label>{{ item.title }}</q-item-label>
                    <q-item-label caption>Secondary line text. Event details...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>X min ago/timestamp</q-item-label>
                    <q-icon name="done" color="green" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TransactionFeed',
  data () {
    return {
      server_message: '',
      status: 'no connection yet',
      items: [],
      nextItemId: 1
    }
  },
  created () {
    this.$options.sockets.onmessage = (event) => {
      this.server_message = event['data']
      this.items.push({
        id: this.nextItemId++,
        title: event['data']
      })
      // FIXME: tidy this up. refactor into helper method
      scrollTo(this.$refs.transactionFeedScrollArea, this.items)
    }
    this.$options.sockets.onopen = () => {
      this.status = 'connected'
    }
    this.$options.sockets.onclose = () => {
      this.status = 'disconnected'
      this.items.push({
        id: this.nextItemId++,
        title: 'WS connection closed'
      })
      // FIXME: tidy this up. refactor into helper method
      scrollTo(this.$refs.transactionFeedScrollArea, this.items)
    }
  },
  methods: {
    connect () {
      this.$connect()
    },
    disconnect () {
      this.$disconnect()
    }
  }
}

// helper functions
// scroll to bottom of list in scroll area
function scrollTo (area, list) {
  if (typeof area !== 'undefined') {
    area.setScrollPosition((area.getScrollPosition() + (list.length * 100)), 300)
  }
}
</script>
