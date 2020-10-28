<template>
  <div class="quiz">
      <h1 class="title"> Congradulation</h1>
      <div class="subtitle"> For getting information about the next point you need to solve the task </div>
      <div class="task"> На часах 3 часа 15 минут, сколько градусов между стрелками?</div>
    <form @submit.prevent="">
      <input type="text" v-model="ansver" :maxlength="5">
      <button type="submit" @click="checkAnswer">Check</button>
    </form>
    <div class="error" v-if="showErrorMessage">NO NO NO ....</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      ansver : "",
      correctAnswer : 7.5,
      showErrorMessage : false
    }
  },
  methods : {
    checkAnswer(){
       if( +this.ansver.split("").filter(el => el !== " ").join("") === this.correctAnswer) {
           this.$router.push("next_step")
       }else{
         this.showErrorMessage = true
       }
    }
  }
}
</script>

<style lang="scss" scoped>
  .error{
    color: red;
      margin-top: 5px;
  }
    .task{
        margin: 15px 0;
    }
</style>
