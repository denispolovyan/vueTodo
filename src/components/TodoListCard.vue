<template>
  <div class="cards">
    <div class="card" v-for="card in this.$store.getters.getTasks" :key="card">
      <div class="card__body">
        <div class="card__title">{{ card.title }}</div>
        <div class="card__task">
          {{ card.text }}
        </div>
        <div class="card__buttons">
          <div class="button button__change">
            <button>change</button>
          </div>
          <div class="button button__done">
            <button @click.prevent="completeTask(card.id)">done</button>
          </div>
          <div class="button button__delete">
            <button @click.prevent="deleteTask(card.id)">delete</button>
          </div>
        </div>
        <div class="card__img">
          <img src="../assets/img/card/redPin.png" alt="red pin" />
        </div>
        <div class="card__stage">
          <img src="../assets/img/card/stage.png" alt="task stage" />
          <p>{{ card.stage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cards: [],
    };
  },
  methods: {
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
      this.showResults();
    },
    completeTask(id) {
      this.$store.commit("completeTask", id);
      this.showResults();
    },
    getTasks() {
      this.cards = this.$store.getters.getTasks;
    },
    showResults() {
      let allTasks = this.$store.getters.getTasks.length;
      let completedTasks = this.$store.getters.getTasks.filter(
        (t) => t.stage == "done"
      ).length;

      if (!completedTasks) {
        this.$store.commit("setResults", 0);
      } else {
        this.$store.commit(
          "setResults",
          (completedTasks / (allTasks)).toFixed(2)
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  gap: 30px 20px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  position: relative;
  display: flex;
  flex: 0 0 31%;
  box-shadow: 5px 3px 3px rgb(175, 175, 175);
}
.card__body {
  width: 100%;
  padding: 40px 20px;
  background: url("../assets/img/card/background.jpg");
}
.card__title {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 24px;
}
.card__task {
  margin-bottom: 10px;
}
.card__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
.button {
  button {
    height: 30px;
    text-transform: uppercase;
    font-weight: 500;
  }
}
.button__change {
  flex: 0 1 45%;
  transition-duration: 1s;

  button {
    width: 100%;
    background: #dbd97944;
  }
  &:hover {
    background: #dbd979b0;
  }
}
.button__done {
  flex: 0 1 45%;
  transition-duration: 1s;
  button {
    width: 100%;
    background: #73e18e83;
  }
  &:hover {
    background: #73e18ec8;
  }
}
.button__delete {
  flex: 0 1 100%;
  transition-duration: 1s;
  button {
    width: 100%;
    background: #dd5c5c7d;
  }
  &:hover {
    background: #dd5c5ccd;
    transition-duration: 1s;
  }
}
.card__img {
  img {
    position: absolute;
    width: 40px;
    top: 0px;
    left: 0px;
  }
}
.card__stage {
  font-weight: 500;
  gap: 5px;
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
}
@media (max-width: 700px) {
  .cards {
    justify-content: space-between;
  }
  .card {
    flex: 0 0 47%;
  }
}
@media (max-width: 500px) {
  .cards {
    justify-content: center;
  }
  .card {
    flex: 0 0 90%;
  }
}
@media (max-width: 500px) {
  .card {
    flex: 0 0 100%;
    justify-content: center;
  }
}
</style>
