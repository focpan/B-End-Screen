<template>
  <div class="container">
    <span class="title" style="left: 30%; z-index: 1999"
      ><span class="title-text">舆情</span></span
    >
    <span class="title" style="left: 67.5%; z-index: 1999"
      ><span class="title-text">来源</span></span
    >
    <span class="title" style="left: 87.5%; z-index: 1999"
      ><span class="title-text">时间</span></span
    >
    <div class="ranking">
      <div id="rank-top">
        <li class="public-event" v-for="(item, idx) in hotItems" :key="idx">
          <svg
            t="1692020547382"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4788"
            width="20"
            height="20"
          >
            <path
              d="M317.785975 395.497535l205.146029 204.792938L905.541707 218.351643c8.156408-8.121099 12.499431-19.490638 12.499431-30.860177l-3.813385-146.285714A42.47688 42.47688 0 0 0 871.892109 0.035309h-141.62491c-11.404848 0-21.715113 4.343023-29.871521 12.464122L317.785975 395.497535z"
              :fill="colorConfig[0][idx]"
              p-id="4789"
            ></path>
            <path
              d="M706.186375 395.497535L500.687254 600.290473 118.395333 218.351643A43.853936 43.853936 0 0 1 105.931211 187.526775l3.778077-146.285714A42.47688 42.47688 0 0 1 152.009622 0.035309h141.518982c11.404848 0 21.715113 4.343023 29.836213 12.464122C323.364817 13.029068 706.186375 395.497535 706.186375 395.497535z"
              :fill="colorConfig[1][idx]"
              p-id="4790"
            ></path>
            <path
              d="M176.549466 670.908727c0 194.941692 158.149581 353.091273 353.091272 353.091273s353.091273-158.149581 353.091273-353.091273S724.58243 317.817455 529.640738 317.817455 176.549466 475.967036 176.549466 670.908727z"
              :fill="colorConfig[2][idx]"
              p-id="4791"
            ></path>
            <path
              d="M671.265648 546.055653l104.974035 142.295783c0-4.590187 0.564946-9.745319 0.564946-14.300196C776.804629 535.745388 666.216443 423.744836 529.640738 423.744836s-247.163891 112.000552-247.163891 250.306404c0 118.285576 81.246302 217.151133 189.610014 244.021378l-104.40909-141.165891 303.587877-230.851074z"
              :fill="colorConfig[3][idx]"
              p-id="4792"
            ></path>
            <path
              d="M776.804629 661.940209L668.546845 529.672218 353.095102 744.634185l108.257784 131.703045c19.314093 4.307714 39.193131 6.426261 59.672425 6.426261 136.399159-0.529637 248.187856-97.594428 255.779318-220.823282z"
              :fill="colorConfig[4][idx]"
              p-id="4793"
            ></path>
            <path
              d="M353.095102 670.908727c0 97.735664 78.809972 176.545636 176.545636 176.545637s176.545636-78.809972 176.545637-176.545637-78.809972-176.545636-176.545637-176.545636c-97.206027 0-176.545636 78.809972-176.545636 176.545636z"
              :fill="colorConfig[5][idx]"
              p-id="4794"
            ></path>
          </svg>
          <div class="public-event-content">
            {{ `${(idx % (items.length / 2)) + 1}. ${item.text}` }}
          </div>
          <div>{{ item.origin }}</div>
          <div>{{ format(item.date) }}</div>
        </li>
      </div>
      <div id="rank-other">
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
            <div class="public-event-content">
              {{
                ` ${(idx % (items.length / 2)) + 1 + hotItems.length}. ${
                  item.text
                }`
              }}
            </div>
            <div>{{ item.origin }}</div>
            <div>{{ format(item.date) }}</div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicEventList",
  components: {},
  props: {
    data: Array,
    hotItems: Array,
    items: Array,
    limit: Number,
  },
  data() {
    return {
      colorConfig: [
        ["#D32F2F", "#72c6f1", "#e24632"],
        ["#F44336", "#72c6f1", "#e24632"],
        ["#FFCA28", "#cddbe3", "#db887d"],
        ["#FFA000", "#bfbfbf", "#b06157"],
        ["#FF8F00", "#bfbfbf", "#b06157"],
        ["#FFCA28", "#cddbe3", "#db887d"],
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    format(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    mouseOverEvent(event, dom) {
      const tooltip = document.createElement("div");
      tooltip.textContent = dom.innerHTML;
      tooltip.style.position = "absolute";
      tooltip.style.backgroundColor = "#191a1f85";
      tooltip.style.color = "#fff";
      tooltip.style.padding = "0.5rem";
      tooltip.style.border = "none";
      tooltip.style.display = "none"; // Initially hide tooltip

      // Add tooltip to the body
      document.body.appendChild(tooltip);

      // Calculate tooltip position
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const tooltipX = mouseX + 16; // 1rem = 16px

      const tooltipY = mouseY - 16; // Move tooltip above the mouse

      // Set tooltip position and display it
      tooltip.style.left = tooltipX + "px";
      tooltip.style.top = tooltipY + "px";
      tooltip.style.display = "block";
      dom.tooltip = tooltip;
    },
    mouseLeaveEvent(dom) {
      if (dom.tooltip == null) {
        return;
      }
      document.body.removeChild(dom.tooltip);
      dom.tooltip = null;
    },
    addMouseEvent() {
      let doms = document.getElementsByClassName("public-event-content");
      for (let i = 0; i < doms.length; ++i) {
        let dom = doms[i];
        dom.tooltip = null;
        if (dom.scrollWidth > dom.offsetWidth) {
          dom.addEventListener("mouseover", (event) => {
            this.mouseOverEvent(event, dom);
          });
          dom.addEventListener("mouseleave", () => {
            this.mouseLeaveEvent(dom);
          });
        }
      }
    },
  },
  created() {},
  mounted() {
    // this.data = this.data.concat(this.data);
    let event_dom = document
      .getElementById("scroll-area")
      .getElementsByClassName("public-event")[0];
    let offset = event_dom.offsetHeight * this.limit;
    document
      .getElementById("scroll-area")
      .style.setProperty("--dynamic-offset", `-${offset - 1}px`);
    this.addMouseEvent();
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
.public-event {
  display: flex;
  padding: 0.5rem 5px 0.5rem 5px;
  background-color: #0c0c2c;
  align-items: center;
  transition: color 0.3s;
  div:nth-of-type(1) {
    display: block !important;
    width: calc(60% - 20px);
  }
  div:nth-of-type(2) {
    justify-content: center;
    width: 15%;
  }
  div:nth-of-type(3) {
    justify-content: center;
    width: 25%;
  }
  div {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.container {
  height: calc(100% - 2rem);
  width: 100%;
  margin-top: 2rem;
  .ranking {
    height: 100%;
    cursor: default;
    #rank-top {
      .public-event {
        color: rgba(138, 192, 236, 0.842);
        height: 2.2rem;
        div:hover {
          color: rgba(184, 217, 245, 0.842);
        }
      }
      li:nth-of-type(1) {
        font-size: 0.9rem;
      }
      li:nth-of-type(2) {
        font-size: 0.8rem;
      }
      li:nth-of-type(3) {
        font-size: 0.7rem;
      }
    }
    #rank-other {
      height: calc(100% - 6.6rem);
      overflow: hidden;
      #scroll-area {
        -webkit-animation: 8s scrollTop linear infinite normal;
        animation: 8s scrollTop linear infinite normal;
        .public-event {
          color: rgb(110, 221, 242);
          height: 2rem;
          div:hover {
            color: rgb(161, 237, 252);
          }
        }
      }
    }
  }
}
</style>