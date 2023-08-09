<template>
    <baidu-map class="bm-view" ak="EX0G9G5xihrjWa3ugb5sRXGxtinIwHjq" :center="center" :zoom="zoom" @ready="handler">
  </baidu-map>
</template>


<script  >
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
    components: {
    BaiduMap
  },
    data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style lang="less" scoped>  
    .anchorBL{  
        display:none;  
    }
    .bm-view {
        width: 100%;
        height: 300px;
    }  
    </style>