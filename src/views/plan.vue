<template>
  <div class="k-v-plan">

    <k-snippet v-for="({date,rows}, index) in planGroupList" :key="index" :title="date">
      <div v-for="(content,index) in rows" :key="index" :class="`k-v-plan--item k-v-plan--item-color-${index}`">
        {{ content }}
      </div>
    </k-snippet>
  </div>
</template>

<script>
import moment from 'dayjs'

export default {
  data() {
    return {
      planList: [
        { date: '2018-11-30', content: 'test0' },
        { date: '2018-12-01', content: 'test1' },
        { date: '2018-12-02', content: 'test2' },
        { date: '2018-12-03', content: 'test3' },
        { date: '2018-12-04', content: 'test4' },
        { date: '2018-12-05', content: 'test5' },
      ]
    }
  },
  computed: {
    planGroupList() {
      let planMap = {}
      let intervalList = [1, 2, 4, 7, 15, 30, 60]
      this.planList.forEach(({ date, content }) => {
        intervalList.forEach(interval => {
          let reviewDate = moment(date).add(interval, 'days');
          if (reviewDate.isBefore(moment().add(-1, 'days'), 'day')) return
          let reviewDateFormat = reviewDate.format("YYYY-MM-DD")
          if (!planMap[reviewDateFormat]) {
            planMap[reviewDateFormat] = []
          }
          planMap[reviewDateFormat].push(content)
        });
      });
      let rows = []
      for (const key in planMap) {
        rows.push({ date: key, rows: planMap[key] })
      }
      rows.sort()
      return rows
    }
  }
}
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
