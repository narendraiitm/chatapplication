const User = {
  template: `<div style="height: 100vh" class="d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-8">
                <input class="form-control shadow-none" type="text" v-model="username_data" style="width:100%" placeholder="Your Name...." />
            </div>
            <div class="col-4">
                <button class="btn btn-danger shadow-none" @click="setUser(); $emit('remount')">
                    Submit
                </button>
            </div>
        </div>
      </div>`,

  props: ['username', 'messagedata', 'isactive'],
  data() {
    return { username_data: this.username }
  },
  methods: {
    setUser() {
      const user = localStorage.getItem('user_name')
      if (!user) {
        localStorage.setItem('user_name', this.username_data)
      }
    },
  },
}

export default User
