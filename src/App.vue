<template>
<div>
  <header class="position-fixed">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href=""><h2>Pluvego</h2></a>
            <div class="absolute navbar-brand">Martin.D.Se <button @click=logout> déconnecter</button></div>
        </nav>
    </header>
    <div>
      <b-row>
        <b-col sm="2" class="content" v-if="!isLogin">
          <b-list-group class="w-100">
            <b-list-group-item button @click.prevent="clickRouter('alertes')">Mes alertes</b-list-group-item>
            <b-list-group-item button @click.prevent="clickRouter('assets')">Mes assets</b-list-group-item>
            <b-list-group-item button @click.prevent="clickRouter('contacts')">Mes contacts</b-list-group-item>
            <b-list-group-item button @click.prevent="clickRouter('user')">Profil</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col sm="10">
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2"  v-if="!isLogin">
        </b-col>
        <b-col sm="10" class="router-view">
          <router-view></router-view>
        </b-col>
      </b-row>
    </div>
</div>
  
</template>

<script>
import { mapActions } from 'vuex';
// import Vue from 'vue'
// import router from '../routes';
// import VueRouter from 'vue-router';
    
// Vue.use(VueRouter);
    
// const router = new VueRouter({
//   routes: Routes,
// });
export default  {
  name: "login",
  data() {
    return {
      isLogin: false
    };
  },
  created() {
    this.int()
  },
  beforeUpdate() {
    this.int()
  },
  methods: {
    int() {
      // console.log(this.$route.name)
      if (this.$route.name ==='login') {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    
    },
    clickRouter(routeName = '') {
      this.$router.push({ name: routeName })
      this.int()
    },
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.a {
  text-align: center;
}
.content {
  top: +75px;
  position: fixed;
  z-index: 100;
  height: 900px;
  padding: 0px;
  border-right: 1px solid black;
}
.position-fixed {
  width: 100%;
  position: fixed;
  z-index: 150;
}
.router-view {
  padding-top: 80px;
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
.w-100 {
  width: 100%;
}
</style>
