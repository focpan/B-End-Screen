<template>
  <div style="height: 100%; width: 100%">
    <channel-bar
      id="left_1"
      title="商户评级分析"
      :data="data1"
      ref="channelBar1"
    ></channel-bar>
    <distribution-solider
      id="left_2"
      :data="data2"
      ref="distributionSolider1"
    ></distribution-solider>
  </div>
</template>

<script>
import channelBar from "./channelBar.vue";
import distributionSolider from "./distributionSolider.vue";
export default {
  name: "StoreRateDetail",
  components: {
    channelBar,
    distributionSolider,
  },
  props: {
    data1: Array,
    data2: Array,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped>
</style>