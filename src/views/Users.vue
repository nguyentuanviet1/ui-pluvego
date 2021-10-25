<template>
  <div >
    
            <div class="a">
            <h2>Profil</h2>
            </div>
            <div class="container note-content">
              <div class="box">
              <span class="name"><b>Nom</b></span>
              <b-form-input class="style-input"  placeholder="Racine " />
              </div>
              <div class="box">
              <label class="name"><b>Prénom</b></label>
              <b-form-input class="style-input"  placeholder="Jean" />
              </div>
              <div class="box">
              <label class="name"><b>Fonction</b></label>
              <b-form-input class="style-input"  placeholder="Directeur de la publication" />
              </div>
              <div class="box">
              <label class="name"><b>Adresse email</b></label>
              <b-form-input class="style-input"  placeholder="jean.racine@societe.com" />
              </div>
              <div class="box">
              <label class="name"><b>Numéro de téléphone</b></label>
              <div><b-input-group>
                <b-form-input ></b-form-input>
                <template #append>
                  <b-dropdown text="Dropdown"  variant="outline-secondary ">
                    <b-dropdown-item>Action C</b-dropdown-item>
                    <b-dropdown-item>Action D</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-input-group> </div>
              <b-form-input class="phone-input"  placeholder="jean.racine@societe.com" />
              </div>
            </div>
  </div>
</template>

<script>
  // import Login from '../components/Login.vue';
import Vue from 'vue'
import { BInputGroup } from 'bootstrap-vue'
Vue.component('b-input-group', BInputGroup)
  export default {
    name: 'user',
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
  margin-top: 10px;
}
.box {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 10px;
}
.dropdown-data {
  width: 120px;
}
.phone-number {
  margin-top: 20px;
}
.style-input {
  width: 400px;
  height: 40px;
}
.absolute {
  position: absolute;
  right: 0;
  /* color:; */
}
.input-group {
  width: 140px;
  height: 40px;
  margin-right: 20px;
}
.input-dropdown {
  width: 60px;
}
.phone-input {
  width: 240px;
  height: 40px;
}
</style>