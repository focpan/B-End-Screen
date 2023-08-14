<template>
  <div class="container">
    <span class="title" style="left: 30%; z-index: 1999"
      ><span class="title-text">舆情</span></span
    >
    <span class="title" style="left: 70%; z-index: 1999"
      ><span class="title-text">来源</span></span
    >
    <span class="title" style="left: 90%; z-index: 1999"
      ><span class="title-text">时间</span></span
    >
    <div id="scroll-area">
      <li class="public-event" v-for="(item, idx) in items" :key="idx">
        <svg
          t="1691992393163"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1734"
          width="20"
          height="20"
        >
          <path
            d="M123.904 485.376h722.944V791.04H123.904z"
            fill="#FFFFFF"
            p-id="1735"
          ></path>
          <path
            d="M378.368 46.592z m0 0z m138.752 514.56c-19.968 0-35.328 7.168-46.592 22.016-11.264 14.848-16.896 33.792-16.896 56.832s5.632 41.984 16.896 56.32c11.264 14.848 26.624 22.016 45.568 22.016 19.968 0 35.328-7.168 46.08-20.992 10.752-13.824 16.384-32.768 16.384-56.32 0-24.576-5.12-44.032-15.872-58.368-11.264-14.336-26.112-21.504-45.568-21.504z"
            fill="#D81E06"
            p-id="1736"
          ></path>
          <path
            d="M959.488 324.608c0-1.024-0.512-2.56-1.024-5.12-18.944 38.4-44.032 69.632-80.896 90.112-36.864 20.48-76.288 26.112-118.272 18.944 0-2.048 0-2.56 0.512-3.584 5.12-17.408 10.24-34.304 14.848-51.712 15.36-61.44 23.552-123.904 19.456-187.392-3.072-54.272-15.36-106.496-44.544-153.6C742.912 20.992 734.72 10.752 726.528 0c-2.048 2.56-3.584 4.096-4.608 5.12-25.088 34.304-49.664 69.632-75.776 103.424-42.496 54.272-89.088 104.96-143.36 147.968-28.16 22.528-57.856 43.008-92.16 56.832-12.288 5.12-14.336 4.096-22.528-6.144-3.072-4.096-6.656-8.192-8.192-12.8-4.608-11.264-9.728-22.528-12.8-34.816-9.216-37.376-8.192-75.264-4.096-112.64 4.096-33.792 9.728-67.584 14.848-100.864-60.928 59.392-117.76 121.856-167.936 190.464-32.768 45.056-61.952 92.16-86.016 141.824-23.552 48.128-42.496 97.792-53.76 150.528-10.752 48.64-15.36 97.28-5.632 146.432 27.648 137.728 104.96 237.568 230.912 299.008 38.4 18.432 78.336 32.256 120.32 40.96 106.496 22.528 204.8 0.512 294.4-57.856 75.776-49.152 130.048-119.808 172.544-198.656 14.848-27.136 27.136-55.808 37.888-84.48 10.752-30.208 19.456-60.416 26.112-91.648 17.92-85.504 20.992-171.52 12.8-258.048zM358.4 758.272h-50.688V660.48H206.848v97.792H156.16V521.216h50.688v95.744h100.864v-95.744H358.4v237.056z m240.64-30.208c-21.504 23.04-49.664 34.304-84.48 34.304-33.792 0-61.44-11.264-82.944-33.28-20.992-22.528-31.744-51.2-31.744-86.016 0-37.376 10.752-67.584 32.256-90.624 21.504-23.04 50.176-34.816 86.016-34.816 33.792 0 60.928 11.264 81.92 33.792 20.48 22.528 31.232 51.712 31.232 87.04 0 36.864-10.752 66.56-32.256 89.6z m238.08-165.376h-67.584v195.584h-50.688V562.688h-67.584v-41.472H837.12v41.472z"
            fill="#D81E06"
            p-id="1737"
          ></path>
        </svg>
        <div>
          {{ item.text }}
        </div>
        <div>{{ item.origin }}</div>
        <div>{{ format(item.date) }}</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicEventList",
  components: {},
  // props: {
  //   data: Array,
  // },
  data() {
    return {
      limit: 5,
      items: [
        {
          text: "一直很好奇，这种黄焖鸡又嫩又滑，和平常的鸡肉很不一样平常的鸡肉总是柴柴的，这种肉到底是真实的还是合成的，好好奇",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "我是妈生黄黑皮，真的很想变白啊，如果穿长裤防晒效果比较好我以后就算热也穿了！！",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "广州真的只有3.3万人喜欢看免费活动吗？？？？免费演出！免费打卡地！免费音乐会！好多 见面会！真的没有人喜欢了吗？",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "看《孤注一掷》前pxx员工狠狠代入了\
家人们，谁懂啊，看个电影给我看破防了，简直看到了自己在夕夕工作的三年（虽然但是我还是很喜欢这家公司，甚至可以说在所有工作经历中最快乐的一段经历，破防的是累的部分）相似点包括但不限于：",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "据说这是福建省省饭‼\
闽南人从小吃到大的咸饭\
万物皆可咸饭🍚\
最经典的是芋头饭、卷心菜饭、土豆饭",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "一直很好奇，这种黄焖鸡又嫩又滑，和平常的鸡肉很不一样平常的鸡肉总是柴柴的，这种肉到底是真实的还是合成的，好好奇",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "我是妈生黄黑皮，真的很想变白啊，如果穿长裤防晒效果比较好我以后就算热也穿了！！",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "广州真的只有3.3万人喜欢看免费活动吗？？？？免费演出！免费打卡地！免费音乐会！好多 见面会！真的没有人喜欢了吗？",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "看《孤注一掷》前pxx员工狠狠代入了\
家人们，谁懂啊，看个电影给我看破防了，简直看到了自己在夕夕工作的三年（虽然但是我还是很喜欢这家公司，甚至可以说在所有工作经历中最快乐的一段经历，破防的是累的部分）相似点包括但不限于：",
          origin: "小红书",
          date: new Date(),
        },
        {
          text: "据说这是福建省省饭‼\
闽南人从小吃到大的咸饭\
万物皆可咸饭🍚\
最经典的是芋头饭、卷心菜饭、土豆饭",
          origin: "小红书",
          date: new Date(),
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    format: function formatDateToYYYYMMDDHHMMSS(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
  created() {},
  mounted() {
    // this.data = this.data.concat(this.data);
    let event_dom = document.getElementsByClassName("public-event")[0];
    let offset = event_dom.offsetHeight * this.limit;
    document
      .getElementById("scroll-area")
      .style.setProperty("--dynamic-offset", `-${offset - 1}px`);
  },
};
</script>
<style lang="less" scoped>
@keyframes scrollTop {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, var(--dynamic-offset), 0);
  }
}
.title {
  position: absolute;
  display: inline-block;
  color: #6eddf1;
  border: 2px solid #6eddf1;
  height: 18px;
  padding: 0 2px;
  .title-text {
    position: relative;
    font-size: 16px;
    background: #09102e;
    display: inline-block;
    padding: 0 4px;
    transform: translateY(-5px);
  }
}

.container {
  height: calc(100% - 3rem);
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
  #scroll-area {
    -webkit-animation: 10s scrollTop linear infinite normal;
    animation: 10s scrollTop linear infinite normal;
    .public-event {
      display: flex;
      padding: 0.5rem 5px 0.5rem 5px;
      color: rgb(110, 221, 242);
      background-color: #121244;
      height: 3rem;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
      }
      div:nth-of-type(1) {
        width: calc(60% - 20px);
      }
      div:nth-of-type(2) {
        justify-content: center;
        width: 20%;
      }
      div:nth-of-type(3) {
        justify-content: center;
        width: 20%;
      }
    }
  }
}
</style>