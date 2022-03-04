const messageForm = {
  template: `<div>
        <div class="row align-items-start bg-light p-3 position-fixed bottom-0 start-0 end-0">
            <div class="col-9">
            <input class="form-control shadow-none" type="text" v-model="messageData.message">
            </div>
            <div class="col-3">
            <button class="btn btn-block shadow-none" style="background-color:#21325E; color: white" @click="updateMessage">Send</button>
            </div>
        </div>
    </div>`,

  props: ['messagedata', 'channel'],
  data() {
    return { messageData: this.messagedata }
  },
  methods: {
    updateMessage() {
      fetch(`/score/${this.channel}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.messageData),
      })
      this.messageData.message = ''
    },
  },
}

export default messageForm
