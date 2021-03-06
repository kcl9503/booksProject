<template>
  <div>
    <b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
    <div class="list">
      <div class="block" v-for="list in firstDataList" :key="list.id">
        <router-link :to="{name:'detail', params:{id:list.id}}">
          <v-card
            class="mx-auto"
            max-width="344"
            @click="getBooksDetail(list.id)">
            <v-img :src="list.image" height="400px"></v-img>
            <v-card-title>{{list.name}}</v-card-title>
          </v-card>
        </router-link>
      </div>
      <v-expand-transition>
        <div v-show="firstShow">
          <v-divider></v-divider>
          <v-card-text>
            <b-button-toolbar aria-label="Toolbar with button groups and input groups">
              <div class="wrap">
                <div class="dollarCount">
                  <p>價格</p>
                  <el-input-number v-model="price" :min="0"></el-input-number>
                  <p>數量</p>
                  <el-input-number v-model="count" :min="1"></el-input-number>
                </div>
                <div class="sendBtn">
                    <b-button-group size="lg" class="mr-1">
                      <b-button variant="success" @click="sendData">確認修改</b-button>
                    </b-button-group>
                </div>
              </div>
            </b-button-toolbar>
          </v-card-text>
        </div>
      </v-expand-transition>
      <div class="block" v-for="list in secondDataList" :key="list.id">
        <router-link :to="{name:'detail', params:{id:list.id}}">
          <v-card
            class="mx-auto"
            max-width="344"
            @click="getBooksDetail(list.id)">
            <v-img :src="list.image" height="400px"></v-img>
            <v-card-title>{{list.name}}</v-card-title>
          </v-card>
        </router-link>
      </div>
      <v-expand-transition>
        <div v-show="secondShow">
          <v-divider></v-divider>
          <v-card-text>
            <b-button-toolbar aria-label="Toolbar with button groups and input groups">
              <div class="wrap">
                <div class="dollarCount">
                  <p>價格</p>
                  <el-input-number v-model="price" :min="0"></el-input-number>
                  <p>數量</p>
                  <el-input-number v-model="count" :min="1"></el-input-number>
                </div>
                <div class="sendBtn">
                    <b-button-group size="lg" class="mr-1">
                      <b-button variant="success" @click="sendData">確認修改</b-button>
                    </b-button-group>
                </div>
              </div>
            </b-button-toolbar>
          </v-card-text>
        </div>
      </v-expand-transition>
<!-- 
    <div class="block">
    <b-card-group v-for="list in firstDataList" :key="list.id" deck 
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      @click="modifyColumn()">
      <router-link :to="{name:'detail', params:{id:list.id}}">
      <b-card :title='list.name' :img-src='list.image' img-top  :aria-controls='list.name'>
      </b-card></router-link>
          <b-collapse :id='list.name' v-model="firstVisible" class="mt-2">
      <b-card>I should start open!</b-card>
    </b-collapse>
    </b-card-group>

    </div>
    <div class="block">
    <b-card-group v-for="list in secondDataList" :key="list.id" deck 
     :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="secondVisible = !secondVisible">
      <router-link :to="{name:'detail', params:{id:list.id}}">
      <b-card :title='list.name' :img-src='list.image' img-top>
      </b-card></router-link>
    </b-card-group>
    <b-collapse id="collapse-4" v-model="secondVisible" class="mt-2">
      <b-card>I should start open!</b-card>
    </b-collapse>
    </div> -->
    </div>
  </div>
</template>

<script>

export default {
  components:{

  },
  data(){
      return{
        // firstVisible: false,
        // secondVisible: false,

        count: 1,
        firstDataList: [],
        id: '',
        price: 0,
        firstShow: false,
        secondDataList: [],
        secondShow: false
      }
  },
  created(){
    this.$api.booksInfo()
    .then(res=>{
      this.firstDataList = res.data.slice(0,3);
      this.secondDataList = res.data.slice(3)
      console.log(this.secondDataList)
    })
    .catch(err=>{console.log(err)})
  },
  methods:{
    getBooksDetail(id){
      this.id = id;
      id <= 3 ? 
      this.firstShow = !this.firstShow:
      this.secondShow = !this.secondShow
      this.$api.getDetail(id)
      .then(res=>{
        this.count = res.data.count;
        this.price = res.data.price;
        console.log(res)
      })
    },
    sendData(){
       this.$api.submitData(this.id, this.count, this.price)
      .then(res=>{
        console.log(res)
      })
    },
  }

}
</script>

<style scoped>
.list{
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list .block{
  width: 30%;
  margin: 1rem .5rem;
}

.card-deck .card{
  min-height: 75vh;
}
.list img{
  height: 30vh;
}

.wrap{
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.dollarCount{
  width: 26%;
  margin-right: 25rem;
}
.sendBtn{
  width: 100%;
}

@media screen and (max-width: 600px) {
  .list{
    display: block;
    width: 100%;

  }
  .list .block{
    width: 100%;
    margin: 1rem auto;
  }
  .wrap{
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.dollarCount{
  width: 95%;
  padding-left: 1rem;
  margin-right: 0;
}
.sendBtn{
  margin-left: 3rem;
}
}
</style>