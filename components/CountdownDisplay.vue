<template>
  <!-- TODO add v-if "už je to tady" -->
  <!-- TODO fix on mobile" -->
  <div class="grid grid-cols-2 lg:flex lg:w-auto">
    <CountdownItem
      v-for="item in remainingTime.formatted"
      :key="item.id"
      :label="item.label"
      :count="item.count"
      class="ml-10 mr-10 mb-4"
    />
  </div>
</template>

<script>
import { DateTime, HumanDate } from '@/utils/date'

export default {
  name: 'CountdownDisplay',
  props: {
    endTime: String
  },

  data: () => ({
    timer: null,
    remainingTime: null
  }),

  created () {
    this.tick() // starts the countdown updateting
  },

  destroyed () {
    this.timer && clearTimeout(this.timer)
  },

  methods: {
    tick () {
      const endTime = DateTime.fromISO(this.endTime)
      const diffTime = endTime.diffNow(['days', 'hours', 'minutes', 'seconds'])

      this.remainingTime = new HumanDate(diffTime)
      this.timer = setTimeout(this.tick, 1000) // update every 1000ms
    }
  }
}
</script>

<style scoped>

</style>
