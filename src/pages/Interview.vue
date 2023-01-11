<template>
  <div class="container">
    <Loader v-if="loading" />
    <div v-else>
      <h1 class="title">{{ interview.title }}</h1>
      <div class="card">
        <div class="heading">
          <b class="date">{{ dateFormat(interview.date) }}</b>
        </div>
        <p class="desc">{{ interview.desc }}</p>
      </div>
      <h2 v-if="reviews.length" class="subtitle">Комментарии</h2>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <div class="card">
            <h3>{{ review.name }}</h3>
            <p>{{ review.text }}</p>
          </div>
        </li>
      </ul>
      <h2 class="subtitle subtitle_comments">Создать комментарий</h2>
      <v-form class="form">
        <v-text-field
          v-model="name"  
          label="Имя" 
          required
          :rules="nameRules"
          :counter="32"
        >
        </v-text-field>
        <v-textarea
          v-model="text"
          label="Текст комментария"
          required
          :rules="textRules"
        >
        </v-textarea>
        <div class="buttons">
          <v-btn className="button" @click="submit">
            Отправить
          </v-btn>
        </div>
      </v-form>
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
  mounted() {
    this.$store.dispatch('fetchCurrentInterview', this.$route.params.id);
    this.fetchReviews();
  },
  methods: {
    fetchReviews() {
      this.$store.dispatch('fetchCurrentReview', this.$route.params.id);
    },
    dateFormat,
    submit() {
      this.$store.dispatch('addReview', {
        name: this.name,
        text: this.text,
        interview_id: this.interview_id,
      });
      this.name = '';
      this.text = '';

      this.fetchReviews();
    }
  },
  data() {
    return {
      name: '',
      text: '',
      interview_id: this.$route.params.id,
      nameRules: [
        v => !!v || 'Имя обязательно!',
        v => v.length <= 32 || 'Длина имени не должна превышать 32 символа'
      ],
      textRules: [
        v => !!v || 'Текст обязательно!',
      ]
    };
  },
  computed: {
    interview() {
      return this.$store.getters.getCurrentInterview;
    },
    reviews() {
      return this.$store.getters.getCurrentReview;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
}
</script>

<style scoped>
  .card {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-radius: 8px;
    max-width: 60%;
    min-width: 400px;
    margin: 30px auto;
  }

  .heading {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  .date {
    color: teal;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .desc {
    white-space: pre-wrap;
  }

  .subtitle {
    margin: 40px 0 20px;
  }

  @media print {
    .form {
      display: none;
    }

    .subtitle_comments {
      display: none;
    }
  }
</style>