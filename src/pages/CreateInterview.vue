<template>
  <div class="container">
    <h1 class="title">Создайте новое собеседование</h1>
    <Loader v-if="loading" />
    <Error v-else-if="error" />
    <v-form v-else class="form">
      <v-text-field
        v-model="title"  
        label="Название собеседования" 
        required
        :rules="titleRules"
        :counter="32">
      </v-text-field>
      <v-textarea
        v-model="desc"
        label="Описание собеседования"
        required
        :rules="descRules">
      </v-textarea>
      <v-text-field
        v-model="date"
        label="Дата и время собеседования"
        type="datetime-local">
      </v-text-field>
      <div class="buttons">
        <v-btn className="button" @click="submit">
          Отправить
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import Loader from '@/components/Loading.vue';
import Error from '@/components/Error.vue';

export default {
  components: {
    Loader,
    Error
  },
  data() {
    return {
      title: '',
      desc: '',
      date: '',
      titleRules: [
        v => !!v || 'Название обязательно!',
        v => v.length <= 32 || 'Длина названия не должна превышать 32 символа'
      ],
      descRules: [
        v => !!v || 'Описание обязательно!',
      ]
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('addInterview', {
        title: this.title,
        desc: this.desc,
        date: this.date,
      });
      this.title = '';
      this.desc = '';
      this.date = '';
    }
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
    error() {
      return this.$store.getters.getError;
    }
  }
}
</script>

<style scoped>
  .buttons {
    display: flex;
  }
</style>