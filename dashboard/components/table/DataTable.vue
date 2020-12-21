<template>
  <table class="table">
    <thead>
    <tr>
      <slot name="columns">
        <th>#</th>
        <th v-for="({name}, index) in columns" :key="index">{{name}}</th>
        <th v-if="actions.length !== 0">Действия</th>
      </slot>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, iItem) in data" :key="iItem">
      <slot :row="item">
        <td>{{iItem + 1}}</td>
        <td v-for="({key}, iTd) in columns" :key="`column-${iTd}`">{{item[key]}}</td>
        <td>
          <button
              v-for="(action, iAction) in actions"
              :key="`action-${iAction}`"
              :class="action.className"
              @click="$emit(action.emit, {id: item[action.actionKey]})"
          >{{action.label}}</button>
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'DataTable',
    props: {
      data: {
        type: Array,
        default: () => ([])
      },
      columns: {
        type: Array,
        default: () => ([])
      },
      actions: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
