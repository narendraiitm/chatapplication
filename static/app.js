import Message from './components/message.js'
import messageForm from './components/message_input.js'
import User from './components/user.js'

const app = new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    messageData: {
      message: '',
      user: localStorage.getItem('user_name')
        ? localStorage.getItem('user_name')
        : 'Annonymous',
    },
    messages: [],
    userName: '',
    isActive: localStorage.getItem('user_name'),
    channel: '',
  },
  methods: {
    changeSetting() {
      this.messageData.user = localStorage.getItem('user_name')
      this.isActive = true
    },
  },
  components: {
    'message-form': messageForm,
    user: User,
    'message-component': Message,
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search)
    this.channel = urlParams.get('channel')
    var source = new EventSource(`/stream?channel=${this.channel}`)
    source.addEventListener(
      'score_update',
      (event) => {
        var data = JSON.parse(event.data)
        this.messages.push(data)
        this.messageData.message = ''
      },
      false
    )
    source.addEventListener(
      'error',
      function (event) {
        console.log('Failed to connect to event stream. Is Redis running?')
      },
      false
    )
  },
})
