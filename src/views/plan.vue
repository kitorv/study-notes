<template>
  <div class="k-v-plan">
    <k-snippet v-for="({date,rows}, index) in planGroupList"
               :key="index"
               :title="date">
      <div v-for="({plan:{name,path},day},index) in rows"
           :key="index"
           :class="`k-v-plan--item k-v-plan--item-color-${index}`"
           @click="handlePalnClick(path)">
        {{ name }}
        <div v-if="day==60"
             class="k-v-plan--item-last">LAST</div>
      </div>
    </k-snippet>
  </div>
</template>

<script>
import moment from "dayjs";
import { routes } from "@/setting";

export default {
  data() {
    return {
      planList: routes
    };
  },
  computed: {
    planGroupList() {
      let planMap = {};
      let intervalList = [0, 1, 2, 4, 7, 15, 30, 60];
      this.planList.forEach(plan => {
        const { date, name, path } = plan;
        if (!path || !date) return;
        intervalList.forEach(interval => {
          let reviewDate = moment(date).add(interval, "days");
          if (reviewDate.isBefore(moment(), "day")) return;
          let reviewDateFormat = reviewDate.format("YYYY-MM-DD");
          if (!planMap[reviewDateFormat]) {
            planMap[reviewDateFormat] = [];
          }
          planMap[reviewDateFormat].push({ plan, day: interval });
        });
      });
      let rows = [];
      for (const key in planMap) {
        rows.push({ date: key, rows: planMap[key] });
      }
      rows.sort((x, y) => moment(x.date).unix() - moment(y.date).unix());
      return rows;
    }
  },
  methods: {
    handlePalnClick(path) {
      const url = path.replace(/@/, "").replace(/.md$/, "");
      this.$router.push({ path: url });
    }
  }
};
</script>

<style lang="scss" scoped>
.k-v-plan {
  position: relative;
}
.k-v-plan--item {
  border: 1px solid rgba(0, 32, 128, 0.1);
  border-radius: 2px;
  border-left: 5px solid #ff4c9f;
  padding: 1rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.k-v-plan--item-color-0 {
  border-left-color: #ff4c9f;
}
.k-v-plan--item-color-1 {
  border-left-color: #01c5ae;
}
.k-v-plan--item-color-2 {
  border-left-color: #7983ff;
}
.k-v-plan--item-color-3 {
  border-left-color: #ffb000;
}
.k-v-plan--item-color-4 {
  border-left-color: #00cbfd;
}
.k-v-plan--item-color-5 {
  border-left-color: #ff7b74;
}
.k-v-plan--item-color-6 {
  border-left-color: #5f9de9;
}

.k-v-plan--item-last {
  position: absolute;
  background: red;
  background: linear-gradient(145deg, #ff003b, #ff4b39);
  color: #fff;
  padding: 1.3rem 1rem 0 1.5rem;
  font-size: 0.8rem;
  transform: rotate(40deg);
  font-weight: 700;
  top: -1rem;
  right: -1.4rem;
  text-align: center;
}
</style>
