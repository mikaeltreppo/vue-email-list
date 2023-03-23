const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmail:'',
      }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {
            this.randomEmail = response.data.response;
             console.log(this.randomEmail)
        }
      
    ) 
   
    }
  }).mount('#app')