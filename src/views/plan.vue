<template>
  <div class="k-v-plan">
    <k-snippet v-for="({date,rows}, index) in planGroupList" :key="index" :title="date">
      <div v-for="(name,index) in rows" :key="index" :class="`k-v-plan--item k-v-plan--item-color-${index}`">
        {{ name }}
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
      let intervalList = [1, 2, 4, 7, 15, 30, 60];
      this.planList.forEach(({ date, name, path }) => {
        if (!path || !date) return;
        intervalList.forEach(interval => {
          let reviewDate = moment(date).add(interval, "days");
          if (reviewDate.isBefore(moment().add(-1, "days"), "day")) return;
          let reviewDateFormat = reviewDate.format("YYYY-MM-DD");
          if (!planMap[reviewDateFormat]) {
            planMap[reviewDateFormat] = [];
          }
          planMap[reviewDateFormat].push(name);
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
  mounted() {
    localStorage.setItem("page-plan", true);
  }
};
</script>

<style lang="scss" scoped>
.k-v-plan {
  .k-v-plan--item {
    border: 1px solid rgba(0, 32, 128, 0.1);
    border-radius: 2px;
    border-left: 5px solid #ff4c9f;
    padding: 1rem;
    margin-bottom: 0.8rem;
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
}
</style>
