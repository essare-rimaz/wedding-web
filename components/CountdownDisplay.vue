<template>
  <!-- TODO add v-if "už je to tady" -->
  <div v-if="isValid" class="flex w-auto">
    <CountdownItem
      v-for="item in remainingTime.formatted"
      :key="item.id"
      :label="item.label"
      :count="item.count"
      class="ml-4 mr-4 lg:ml-10 lg:mr-10 mb-4"
    />
  </div>
  <p v-else class="tracking-widest text-2xl lg:text-3xl mb-3 font-montserrat text-dark-blue font-semibold">Už je to tady!</p>
</template>

<script>
import { DateTime, HumanDate, Interval } from '@/utils/date'

export default {
  name: 'CountdownDisplay',
  props: {
    endTime: String
  },

  data: () => ({
    timer: null,
    remainingTime: null,
    isValid: true
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
      const interval = Interval.fromDateTimes(DateTime.now(), endTime)
      const isValid = interval.isValid

      if (isValid) {
        this.remainingTime = new HumanDate(diffTime)
        this.timer = setTimeout(this.tick, 1000) // update every 1000ms
      }
      this.isValid = isValid
    }
  }
}
</script>

<style scoped>

</style>
