<template>
    <div id="content">
        <div class="icon-content">
        <div class="icon-part" @click="Diao(item.id)" v-for="(item, index) in usa_info" :key="index">
          <img :src="item.icon_file_path" alt="">
          <p>{{item.title}}</p>
          <div>数量:{{item.count}}</div>
          <div>数据大小:{{item.size}}</div>
          <div class="icon-btn"><span>添加到购物车</span></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Content",
  data(){
    return{
      usa_info: []
    }
  },
  methods:{
    Diao (id) {
      this.axios({
        method:'get',
        url:'/datamall/info/',
        params:{'id': id}
      }).then(res=>{
        if (res.data.status === 200 ){
          let details_info = res.data.data
          this.$store.commit('getDetailsInfo', details_info)
          this.$router.push('/details')
        }
      })
    },
    getData(){
      this.axios({
        method:'get',
        url:'/datamall/country/',
        params: {country_name: this.country}
      }).then(res=>{
        if(res.data.status === 200){
          this.usa_info = res.data.data;
        }
      })
    }
  },
  computed: {
    // usa_info_default(){
    //   if(this.$parent.info.length !==0){
    //     return this.$parent.info[0].country_info.USA
    //   }else {
    //     return []
    //   }
    // },
    country() {
      let c = this.$store.state.countryList
      if (c.length !== 0) {
        return c[0]
      } else {
        return ''
      }
    },

  },
  watch:{
    country(n){
      this.getData()
    }
  }
}
</script>

<style scoped>
.icon-content{
  width: 100%;
  min-height: 750px;
  margin-top: 15px;
}
.icon-content{
  width: 100%;
  min-height: 750px;
  margin-top: 15px;
}
.icon-part{
  width: 200px;
  height: 320px;
  padding-bottom: 10px;
  margin: 10px 0 10px 70px;
  float: left;
  box-shadow: 5px 5px 10px #e1e1e1;
  cursor: pointer;
}
.icon-part > img{
  width:200px;
  height: 150px;
  text-align: left;
  box-shadow: none;
}
.icon-btn{
  width: 120px;
  height: 40px;
  border: 2px solid #e1e1e1;
  margin-left: 18%;
  line-height: 40px;
  margin-top: 7px;
}
.icon-part > div {
  cursor: pointer;
}
</style>