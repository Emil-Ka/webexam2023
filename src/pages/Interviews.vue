<template>
  <div class="container">
    <h1 class="title">Мои собеседования</h1>
    <Loader v-if="loading" />
    <div v-else class="content">
      <input class="search" v-model="search" placeholder="Поиск..." />
      <div class="sort">
        <label class="label">
          <span>Сортировать по возрастанию даты</span>
          <input type="radio" name="date" v-model="sort" value="asc" />
        </label>
        <label class="label">
          <span>Сортировать по убыванию даты</span>
          <input type="radio" name="date" v-model="sort" value="desc" />
        </label>
      </div>
      <div class="filter">
        <span class="filter__label">Фильтр по дате собеседования</span>
        <div class="filter__items">
          <v-text-field 
            label="Начальная дата"
            v-model="start_date"
            type="datetime-local">
          </v-text-field>
          <v-text-field 
            label="Конечная дата"
            v-model="end_date"
            type="datetime-local">
          </v-text-field>
        </div>
      </div>
      <InterviewList :interviews="interviews" />
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loading.vue';
import InterviewList from '@/components/InterviewList.vue';

export default {
  components: {
    Loader,
    InterviewList,
  },
  mounted() {
    this.$store.dispatch('fetchInterviews');
  },
  computed: {
    interviews() {
      return this.$store.getters.getInterviews({
        sort: this.sort,
        search: this.search,
        startDate: this.start_date,
        endDate: this.end_date,
      });
    },
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  data() {
    return {
      search: '',
      sort: 'asc',
      start_date: '',
      end_date: '',
    }
  }
}
</script>

<style scoped>

.filter__label {
  display: inline-block;
  margin-bottom: 12px;
}
.filter__items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.search {
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  padding: 6px 10px;
}

.search:focus {
  outline: none;
  border: 1px solid #606060;
}

.sort {
  display: flex;
  gap: 20px;
}

.label {
  display: flex;
  gap: 6px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 60%;
  min-width: 400px;
  margin: 30px auto;
}

.filter, .sort {
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 14px;
}
</style>
