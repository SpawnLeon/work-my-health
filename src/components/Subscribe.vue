<template>
  <form
    novalidate="true"
    action=""
    class="free-access__form form-free-access"
    @submit.prevent="submit"
  >
    <div
      class="form-free-access__text"
      v-html="message"
      :class="{
        'form-free-access__text--success': isSuccess
      }"
    ></div>
    <div
      class="form-free-access__text"
      :class="{
        'form-free-access__text--error': hasError
      }"
      v-html="messageErrors"
    ></div>
    <div class="form-free-access__inner">
      <div class="form-free-access__field field-item field-item--text">
        <input
          v-model="email"
          requared
          placeholder="Ваш E-mail"
          value=""
          type="email"
          class="field-item__field"
        />
      </div>
      <div class="form-free-access__field field-item field-item--actions">
        <button type="submit" class="form-free-access__btn btn btn--filled">
          Отправить
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      errors: [],
      isSuccess: false,
      message: `Оставьте свою электронную почту<br>и вы узнаете о запуске данного сервиса первым!`
    };
  },
  computed: {
    messageErrors() {
      let result = '';
      if (this.errors.length > 0) {
        result = this.errors.join(`<br>`);
      }
      return result;
    },
    hasError() {
      return this.messageErrors.length !== 0;
    }
  },
  methods: {
    submit() {
      if (this.checkForm(this.email)) {
        this.sendForm();
        this.isSuccess = true;
        this.message = `Ваше сообщение отправлено.<br>Мы уведомим вас о запуске данного сервиса.`;
        this.email = '';
      }
    },
    sendForm() {
      this.isSuccess = true;
    },
    checkForm(e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }
      if (!this.errors.length) {
        return true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/vars.scss';

.form-free-access {
  &__text {
    font-size: 24px;

    &--error {
      color: rgb(244, 67, 54);
    }
    &--success {
      color: #20b4e6;
    }
  }

  &__inner {
    display: flex;
    margin-top: 55px;
  }

  &__btn {
    margin-left: 40px;
  }
}
.field-item {
  &__field {
    border-width: 1px;
    border-color: rgb(79, 105, 155);
    border-style: solid;
    padding: 20px 18px 19px;
    z-index: 30;
    border-radius: 100px;
    background-color: transparent;
    min-width: 360px;
    color: $mainFontColor;
  }
}
</style>
