import { createStore } from 'vuex';
import axios from 'axios';

const INTERVIEW_URL = 'https://63ba9ec432d17a50907855fc.mockapi.io/exam/interviews';
const REVIEW_URL = 'https://63ba9ec432d17a50907855fc.mockapi.io/exam/reviews';

export const store = createStore({
  state: {
    interviews: [],
    currentReview: [],
    currentInterview: {},
    loading: false,
    error: null,
  },
  getters: {
    getInterviews(state) {
      return ({ search, sort, startDate, endDate }) => {
        let interviews = state.interviews;

        const startDateMs = startDate ? new Date(startDate).getTime() : 0;
        const endDateMs = endDate ? new Date(endDate).getTime() : new Date().getTime();

        console.log(startDateMs, endDateMs);

        if (sort === 'asc') {
          interviews = interviews.sort((interview1, interview2) => {
            return new Date(interview1.date).getTime() - new Date(interview2.date).getTime();
          });
        }

        if (sort === 'desc') {
          interviews = interviews.sort((interview1, interview2) => {
            return new Date(interview2.date).getTime() - new Date(interview1.date).getTime();
          });
        }

        interviews = interviews.filter((interview) => {
          if (interview.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            return interview;
          }
        });

        interviews = interviews.filter((interview) => {
          console.log('if', new Date(interview.date).getTime())
          if (new Date(interview.date).getTime() > startDateMs && new Date(interview.date).getTime() < endDateMs) {
            return interview;
          }
        });

        return interviews;
      }
    },
    getCurrentInterview(state) {
      return state.currentInterview;
    },
    getCurrentReview(state) {
      return state.currentReview;
    },
    getLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    }
  },
  mutations: {
    setInterviews(state, payload) {
      state.interviews = payload;
    },
    setCurrentInterview(state, payload) {
      state.currentInterview = payload;
    },
    setCurrentReview(state, payload) {
      state.currentReview = payload;
    },
    addInterview(state, payload) {
      state.interviews.push(payload);
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    async fetchInterviews(context) {
      context.commit('setLoading', true);
      context.commit('setError', null);

      try {
        const { data } = await axios.get(INTERVIEW_URL);
        context.commit('setInterviews', data);
      } catch(err) {
        if (err instanceof Error) {
          context.commit('setError', err.message);
        }
      } finally {
        context.commit('setLoading', false);
      }
    },
    async addInterview(context, payload) {
      context.commit('setLoading', true);
      context.commit('setError', null);

      try {
        await axios.post(INTERVIEW_URL, {...payload});
      } catch(err) {
        if (err instanceof Error) {
          context.commit('setError', err.message);
        }
      } finally {
        context.commit('setLoading', false);
      }
    },
    async fetchCurrentInterview(context, id) {
      context.commit('setLoading', true);
      context.commit('setError', null);

      try {
        const { data } = await axios.get(`${INTERVIEW_URL}/${id}`);
        context.commit('setCurrentInterview', data);
      } catch(err) {
        if (err instanceof Error) {
          context.commit('setError', err.message);
        }
      } finally {
        context.commit('setLoading', false);
      }
    },
    async fetchCurrentReview(context, id) {
      context.commit('setLoading', true);
      context.commit('setError', null);

      try {
        const { data } = await axios.get(`${REVIEW_URL}?interview_id=${id}`);
        context.commit('setCurrentReview', data);
      } catch(err) {
        if (err instanceof Error) {
          context.commit('setError', err.message);
        }
      } finally {
        context.commit('setLoading', false);
      }
    },
    async addReview(context, payload) {
      context.commit('setLoading', true);
      context.commit('setError', null);

      try {
        const { data } = await axios.post(REVIEW_URL, {...payload});
        context.commit('setCurrentReview', data);
      } catch(err) {
        if (err instanceof Error) {
          context.commit('setError', err.message);
        }
      } finally {
        context.commit('setLoading', false);
      }
    }
  },
});

