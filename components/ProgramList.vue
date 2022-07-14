<template>
  <div class="flex flex-col items-center">
    <div>
      <ProgramItem
        v-for="(item, index) of programItems"
        :key="index"
        :time="item.time"
        :title="item.name"
        :description="item.description"
        :last-item="index === programItems.length - 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramList',
  props: {
    programItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
