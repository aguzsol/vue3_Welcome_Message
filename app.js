const app = Vue.createApp({
    data() {
        return {
            message: '',
            newMessage: ''
        }
    },
    methods:{
    showMessage(){
        this.newMessage = this.message
    }
}
})

app.mount('#app')
