<template>
  <ul class="list">
    <li v-for="interview in interviews" :key="interview.id">
      <div class="card">
        <div class="card__info">
          <h2 class="card__title">{{ interview.title }}</h2>
          <b class="card__date">{{ dateFormat(interview.date) }}</b>
        </div>
        <a class="card__link" :href="`/interviews/${interview.id}`">
          Узнать больше
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
import { dateFormat } from '@/utils/date-format';

export default {
  name: 'InterviewList',
  props: {
    interviews: Array
  },
  methods: {
    dateFormat
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.card__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.card {
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 14px;
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