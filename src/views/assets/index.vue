<template>
  <div >
    <div class="a">
    <h2>Assets</h2>
    </div>
    <div class="box header">
        <div><b-form-checkbox
                id="checkbox-1"
                size="lg"
                v-model="statusAll"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                @change.native ="clickTout"
                >
                Tout sélectioner
                </b-form-checkbox>
        </div>
        <div class="box absolute"><p>limit: </p><b-form-input class="style-input" placeholder="Enter your name"></b-form-input></div>
    </div>
    <div  v-for="item in allData"  :key="item.id" class="box">
        <div><b-form-checkbox
                id="checkbox-1"
                v-model="item.checkBox"
                name="checkbox-1"
                value="accepted"
                size="lg"
                unchecked-value="not_accepted"
                @change.native ="checkAllBox"
                >
                </b-form-checkbox>
        </div>
        <b-card class="card-data">
                <p>{{ item.name}}</p>
                <p>{{ item.location}}</p>
            </b-card>
        
        <div class="absolute"></div>
    </div>
  </div>
</template>

<script>
  // import Login from '../components/Login.vue';
  export default  {
  name: "assets",
  data() {
    return {
      statusAll: 'not_accepted',
      allData: [
          {
              id: 1,
              checkBox: 'not_accepted',
              name: 'Vu Thua Vu',
              location: 'Ngõ 43, Cau Giay District, Hanoï, 170, Viêt Nam'
          },
          {
              id: 2,
              checkBox: 'not_accepted',
              name: 'Vu Thua Vu',
              location: 'Ngõ 43, Cau Giay District, Hanoï, 170, Viêt Nam'
          },
          {
              id: 3,
              checkBox: 'not_accepted',
              name: 'Vu Thua Vu',
              location: 'Ngõ 43, Cau Giay District, Hanoï, 170, Viêt Nam'
          },
      ]
    };
  },
  mounted() {
    // console.log('sdv')
  },
  beforeUpdate() {
      
    // console.log(this.statusAll)
  },
  methods: {
        clickTout() {
            console.log(this.statusAll)
        this.allData = this.allData.map(el => {
            let _el = el;
            _el.checkBox = this.statusAll;
            return _el
        })
        
        // console.log(this.allData)
        },
        
        checkAllBox() {
            let count = 0
                this.allData.forEach(el => {
                    if (el.checkBox === 'not_accepted') {
                        count = ++count
                    }
                })
                if (count === 0 && this.statusAll != 'accepted') {
                    this.statusAll = 'accepted'
                }
                if (count === this.allData.length && this.statusAll != 'not_accepted') {
                    this.statusAll = 'not_accepted'
                }
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
  width: 60px;
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
.header {
  margin-bottom: 60px;
}
.phone-input {
  width: 240px;
  height: 40px;
}
.card-data {
    margin-left: 60px;
    margin-right: 40px;
    width: 100%;
}
</style>