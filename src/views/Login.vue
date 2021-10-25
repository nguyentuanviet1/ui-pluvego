<template>
  <div >
            <!-- <div class="a">
            <h2>Profil</h2>
            </div> -->
            <div class="container note-content">
              <label class="name"><b>Name</b></label>
              <b-form-input class="style-input" v-model="fromLogin.name" placeholder="Enter your name"></b-form-input>
              <br>
              <label class="name"><b>password</b></label>
              <b-form-input class="style-input" v-model="fromLogin.pass" placeholder="Enter your name"></b-form-input>
              <br>
              <b-button @click.prevent="clickLogin()"  variant="primary" class=" btn-login">Login</b-button>
            </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import router from '../routes';
// import VueRouter from 'vue-router';
    
// Vue.use(VueRouter);
    
// const router = new VueRouter({
//   routes: Routes,
// });
import { mapState, mapActions } from 'vuex';
export default  {
  name: "login",
  data() {
    return {
      fromLogin: {
        name: '',
        pass: '',
    }
    };
  },
  computed: {
      ...mapState([
        'loggingIn',
        'loginError'
      ])
    },
  mounted() {
    // console.log('sdv')
  },
  methods: {
    ...mapActions([
        'doLogin'
      ]),
    clickLogin() {
      this.doLogin({
          email: this.fromLogin.name,
          password: this.fromLogin.pass
        });
      // console.log('sdv')
    }
  }
}
</script>
    
<style scoped>
.a {
  text-align: center;
}
.content {
  height: 900px;
 border-right: 1px solid black;
}
.note-content {
  margin: 20px;
}
.name {
  width: 180px;
  margin-top: 30px;
}
.box {
    display: flex;
    flex-wrap: nowrap;
}
.dropdown-data {
  margin-top: 20px;
  width: 120px;
}
.phone-number {
  margin-top: 20px;
}
.style-input {
  width: 400px;
}
.absolute {
  position: absolute;
  right: 0;
  /* color:; */
}
.btn-login {
    margin: 30px 180px;
}
</style>