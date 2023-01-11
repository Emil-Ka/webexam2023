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
      <ul class="list">
        <li v-for="interview in interviews" :key="interview.id">
          <div class="card">
            <div class="card__info">
              <h2 class="card__title">{{ interview.title }}</h2>
              <b class="card__date">{{ dateFormat(interview.date) }}</b>
            </div>
            <a class="card__link" :href="`/interviews/${interview.id}`"
              >Узнать больше</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loading.vue';
import { dateFormat } from '@/utils/date-format';

export default {
  components: {
    Loader
  },
  methods: {
    dateFormat
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

.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card, .filter, .sort {
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 14px;
}

.card__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.card__title {
  font-size: 1.2rem;
  font-weight: 500;
}

.card__date {
  color: #7a7a7a;
  font-weight: 400;
}

.card__link {
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  background: #39b7b4;
  color: #ffffff;
}
</style>
