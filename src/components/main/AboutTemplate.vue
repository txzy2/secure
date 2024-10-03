<script setup lang="ts">
import { Motion } from '@oku-ui/motion';
</script>

<template>
  <div class="about" id="about">
    <div class="about--line"></div>

    <div class="about__text">
      <h2>Почему выбирают нас</h2>
      <p>
        Агентство безопасности "Защитник" универсальная организация с самым
        широким спектром услуг! Вы ставите задачу, мы её решаем! Сегодня Вам не
        нужна безопасность, завтра может быть поздно!
      </p>
    </div>

    <div class="about__content">
      <Motion class="about__content--item" :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0 }" :transition="{ duration: 1, delay: 0.5 }">
        <p class="about__content--item-number">01</p>
        <div class="about__content--item-text">
          <h3>Индивидуальный подход</h3>
          <p>
            Мы понимаем, что каждая ситуация уникальна, поэтому предлагаем
            персонализированные решения для обеспечения безопасности с учётом
            всех ваших потребностей и особенностей
          </p>
        </div>
      </Motion>

      <Motion class="about__content--item" :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0 }" :transition="{ duration: 1, delay: 1 }">
        <p class="about__content--item-number">02</p>
        <div class="about__content--item-text">
          <h3>Большой спектор услуг</h3>
          <p>
            От охраны объектов до персональной безопасности и технических
            решений — мы предлагаем комплексный набор услуг, чтобы полностью
            закрыть ваши потребности в защите
          </p>
        </div>
      </Motion>

      <Motion class="about__content--item" :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0 }" :transition="{ duration: 1, delay: 1.5 }">
        <p class="about__content--item-number">03</p>
        <div class="about__content--item-text">
          <h3>Надежность</h3>
          <p>
            Мы гарантируем высокие стандарты безопасности и профессионализм,
            обеспечивая спокойствие и уверенность в защите ваших интересов
          </p>
        </div>
      </Motion>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 40px 0;

  &--line {
    width: 200px;

    margin: 0 auto;
    border-top: 3px solid black;
  }

  &__text {
    width: 60%;
    display: flex;
    flex-direction: column;

    gap: 10px;
    margin: 0 auto;

    margin-bottom: 40px;

    h2 {
      font-size: 30px;
      text-align: center;
      font-weight: 600;
    }

    p {
      width: 70%;
      font-size: 16px;

      text-align: center;

      margin: 0 auto;
    }
  }

  &__content {
    width: 90%;
    display: flex;

    margin: 00 auto;

    &--item {
      width: 90%;
      display: flex;

      gap: 20px;
      padding: 5px;

      border-radius: 10px;

      &-number {
        text-align: center;

        color: rgb(209, 209, 209);

        font-size: 50px;
      }

      &-text {
        display: flex;
        flex-direction: column;

        text-align: start;

        gap: 3px;

        h3 {
          width: max-content;

          text-align: start;
          padding: 2px 5px;

          font-size: 20px;
          font-weight: 600;

          border-radius: 10px;
        }

        p {
          text-align: start;
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 921px) {
  .about {
    margin: 20px 0;

    &--line {
      width: 100px;
      border-top: 2px solid black;
    }

    &__text {
      width: 90%;

      h2 {
        font-size: 25px;
      }

      p {
        width: 100%;
        font-size: 14px;
      }
    }

    &__content {
      flex-direction: column;

      gap: 20px;
    }
  }
}
</style>
