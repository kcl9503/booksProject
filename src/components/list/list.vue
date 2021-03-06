<template>
  <div>
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
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
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
    })
    .catch(err=>{console.log(err)})
  },
  methods:{
    getBooksDetail(id){
      this.id = id;
      if(id <= 3){ 
        this.firstShow = !this.firstShow
        this.secondShow = false;
      }else{
        this.firstShow = false
        this.secondShow = !this.secondShow
      }
      this.$api.getDetail(id)
      .then(res=>{
        this.count = res.data.count;
        this.price = res.data.price;
      })
      .catch(err=>{console.log(err)})
    },
    sendData(){
       this.$api.submitData(this.id, this.count, this.price)
      .then(res=>{
        if(res.status === 200){
          this.$notify({
          title: '成功修改',
          type: 'success',
          duration: 2000
        });
        }        
      })
      .catch(err=>{console.log(err)})
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