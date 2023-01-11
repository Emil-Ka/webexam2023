<template>
  <main class="container">
    <h1 class="title">Сервис для записи ваших собеседований</h1>
    <div class="hero">
      <p class="hero__text">
        Вы постоянно проводите собеседования?
        Постоянно забываете, что хотели бы спросить у кандидата, а иногда и вовсе забываете про собеседование?
        Благодаря нашему сервису вы сможете записать все предстоящие собеседования, а также вопросы и темы, которые бы хотел спросить у кандидата.
      </p>
      <img class="hero__img" src="@/assets/todo.jpg" alt="todo" />
    </div>
    <div class="action">
      <img class="action__img" src="@/assets/interview.jpg" alt="interview" />
      <div>
        <p class="action__text">
          Чего же вы ждете?
          Создайте своё первое собеседование прямо сейчас.
        </p>
        <a href="/create-interview" class="action__link">Создать</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
}
</script>

<style scoped>
  .container {
    padding: 30px 0;
  }

  .title {
    margin-top: 40px;
  }
  
  .hero {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .hero__img {
    width: 30%;
  }

  .action {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .action__img {
    width: 30%;
  }

  .action__link {
    display: inline-block;
    padding: 8px 12px;
    background: teal;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 8px;
    margin-top: 14px;
  }
</style>