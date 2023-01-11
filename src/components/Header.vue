<template>
  <header class="header">
    <div class="container">
      <a href="/">
        <div class="logo">Собес</div>
      </a>
      <nav>
        <ul class="list">
          <li v-for="link in links" :key="link.label">
            <a 
              :class="`list__link ${link.href === location ? 'list__link_active' : ''}`" 
              :href="link.href"
            >
            {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    location() {
      return this.$route.path;
    }
  },

  data() {
    return {
      links: [
        {
          label: 'Мои собеседования',
          href: '/interviews',
        },
        {
          label: 'Создать собесдование',
          href: '/create-interview',
        },
        {
          label: 'Git',
          href: 'https://github.com/Emil-Ka/webexam2023',
        },
        {
          label: 'JSON',
          href: '/main.json',
        },
        {
          label: 'Ты гость',
          href: '/',
        }
      ]
    };
  }
}
</script>

<style scoped>

  .header {
    padding: 20px 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .logo {
    padding: 4px 12px;
    background: #1ba39f;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 12px;
  }

  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .list__link:hover {
    text-decoration: underline;
  }

  .list__link_active {
    text-decoration: underline;
  }
</style>