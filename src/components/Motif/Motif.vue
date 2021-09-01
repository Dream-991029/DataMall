<template>
    <div id="motif">
        <div class="icon-body">
<!--            <Neck></Neck>-->
            <!--分割线-->
            <div class="icon-fen">
                <el-divider></el-divider>
            </div>
            <Upside></Upside>
            <Content></Content>

<!--            <Skip></Skip>-->
            <div class="icon-fen-1">
                <el-divider></el-divider>
            </div>
            <Tail></Tail>
        </div>

    </div>
</template>

<script>
import Tail from "@/components/Tail/Tail";
import Neck from "@/components/Neck/Neck";
import Upside from "@/components/Upside/Upside";
import Content from "@/components/Content/Content";
import Skip from "@/components/Content/Skip";
export default {
  name: "motif",
  components: {Skip, Upside, Neck, Tail,Content},
  data() {
    return{

    }
  },
  methods:{

  },
  computed:{
    info(){
      const _f = this.$parent.usa_info;
      if(!_f || _f.length === 0){
        return []
      }else {
        return _f
      }
    }
  }
}
</script>

<style scoped>
#motif{
  width: 100%;
  max-width: 1200px;
  display: inline-block;
  min-height: 1000px;
}
.icon-body{
  width: 100%;
  display: inline-block;
  min-height: 1000px;
}
.icon-fen{
  width: 1000px;
  margin-left: 70px;
  text-align: center;
}
.icon-fen-1{
  width: 1000px;
  float: left;
  margin-left: 70px;
  text-align: center;
}



</style>