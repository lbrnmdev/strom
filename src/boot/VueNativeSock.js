// import something here
import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

let socketPath
if (process.env.DEV) {
  socketPath = 'ws://localhost:8080/ws'
} else {
  socketPath = String(process.env.TELCO_SOCK_PATH)
}

Vue.use(VueNativeSock, socketPath, { connectManually: true })
