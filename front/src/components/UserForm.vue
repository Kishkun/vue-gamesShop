<template>
    <form @submit.prevent="handleSubmit" class="needs-validation mb-5" novalidate ref="form">
        <div class="form-group">
            <label for="name">Ваше имя</label>
            <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Имя"
                v-model.trim="userForm.fullName"
                required
            >
        </div>
        <div class="form-group">
            <label for="address">Ваш адрес</label>
            <input
                type="text"
                class="form-control"
                id="address"
                name="address"
                placeholder="Адрес"
                v-model.trim="userForm.address"
                required
            >
        </div>
        <div class="form-group">
            <label for="phone">Ваш номер телефона</label>
            <input
                type="tel"
                class="form-control"
                id="phone"
                name="phone"
                placeholder="Номер телефона"
                v-model.trim="userForm.phone"
                required
            >
        </div>
        <div class="form-group">
            <label for="email">Ваш электронный адрес</label>
            <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                placeholder="Электронный адрес"
                v-model.trim="userForm.email"
                required
            >
        </div>
        <button class="btn btn-success" type="submit">Купить</button>
    </form>
</template>
<script>
  export default {
    name: 'UserForm',
    props: {
      isReset: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      userForm: {
        fullName: '',
        phone: '',
        email: '',
        address: ''
      },
      validationStatusFrom: null
    }),
    methods: {
      handleSubmit() {
        this.validationStatusFrom = this.$refs.form.checkValidity();
        if (this.validationStatusFrom) {
          this.$refs.form.classList.remove('was-validated');
          this.$emit('onFormSubmit', this.userForm);
          if (this.isReset) {
            this.resetForm()
          }
        } else {
          this.$refs.form.classList.add('was-validated');
        }
      },
      resetForm() {
        this.userForm = {
          fullName: '',
          phone: '',
          email: '',
          address: ''
        };
        this.$refs.form.classList.remove('was-validated');
      },
    },
    watch: {}
  }
</script>
<style scoped lang="scss">
</style>
