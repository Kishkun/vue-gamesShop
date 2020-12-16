<template>
  <div class="panel-body">
    <h2>{{title}}</h2>
    <form @submit.prevent="validate">
      <VueFormGenerator
        :schema="formSchema"
        :model="formModel"
        :options="formOptions"
        ref="form"
        @modelUpdate="onUpdate"
      />
      <hr/>
      <div class="text-center">
        <button class="btn btn-success" type="submit">Потвердить</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'CrudForm',
    props: {
      title: {
        type: String,
        default: ''
      },
      formSchema: {
        type: Object,
        default: () => ({})
      },
      formModel: {
        type: Object,
        default: () => ({})
      },
      formOptions: {
        type: Object,
        default: () => ({
          validateAsync: true
        })
      }
    },
    data: () => ({}),
    mounted() {

    },
    computed: {},
    methods: {
      async validate() {
        console.log('form validate');
        const errors = await this.$refs.form.validate();
        const isValid = errors.length !== 0;
        if (isValid) {
          this.$emit('onSubmit', this.formModel);
        }
      },
      onUpdate(val, field) {
        console.log('form update');
        this.$emit(`on${field}Update`, val);
      },
    },
    watch: {}
  }
</script>
<style scoped lang="scss">
  .panel-body {

  }
</style>
