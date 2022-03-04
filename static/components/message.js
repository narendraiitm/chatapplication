const Message = {
  template: `
        <div>
            <div v-for="message in messages" class='bg-light p-2 m-2'>
                <div style="color:#139487">{{userName(message)}}</div>
                <div style="font-size:.9em">{{message.message}}</div>
            </div>
        </div>
            `,
  props: ['messages'],
  methods: {
    userName(message) {
      {
        let words = message.user.split(' ')
        let CapitalizedWords = []
        words.forEach((element) => {
          CapitalizedWords.push(
            element[0].toUpperCase() + element.slice(1, element.length)
          )
        })
        return CapitalizedWords.join(' ')
      }
    },
  },
}

export default Message
