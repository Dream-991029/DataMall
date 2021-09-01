<template>
    <div id="daohang">
      <div class="upload-nav">
        <el-menu  :default-active="activeIndex2"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  auto
                  >
<!--          StaticEnableDefaultPopOutImage = false-->
          <el-menu-item index="1">全部</el-menu-item>
          <el-submenu index="2" v-for="(item,index) in usa_list" :key="index">
            <template slot="title">{{ item.data_type_name }}</template>
            <el-menu-item index="2-1" v-for="(item1,index) in item.country_list">{{item1}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
</template>

<script>
export default {
  name: "DaoHang",
  data(){
    return{
      activeIndex2: '1',
      usa_list:[],
    }
  },
  methods: {
    handleSelect(key, keyPath) {

    },

  },
  created() {
    this.axios({
      method:'get',
      url:'/datamall/datatype/'
    }).then(res=>{
      if(res.data.status === 200){
        this.usa_list = res.data.data
        this.$store.commit('getCountryList', this.CountryList)
      }
    })
  },
  computed: {
    CountryList() {
      let country_list = []
      for (let obj of this.usa_list) {
        for (let country of obj['country_list']) {
          country_list.push(country)
        }
      }
      return country_list
    }
  }
}
</script>

<style scoped>
.upload-nav{
  max-width: 1200px;
}
.text-eight{
  opacity: 0;
  background-color: white;
}
</style>