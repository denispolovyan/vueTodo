<template>
  <div class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          <img src="../assets/img/logo.png" alt="todo list" />
        </div>
        <ul class="header__list">
          <li class="header__item header__success">Done {{ rate }}%</li>
          <li class="header__item header__watch" @click="watchAnotherTasks">
            Watch {{ tasks }}
          </li>
          <li class="header__item header__filter">
            <input placeholder="Filter" maxlength="20" type="text" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tasks: "All",
      rate: 50,
    };
  },
  methods: {
    watchAnotherTasks() {
      if (this.tasks == "All") {
        this.tasks = "Undone";
      } else if (this.tasks == "Undone") {
        this.tasks = "Done";
      } else {
        this.tasks = "All";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-family: "Kanit", sans-serif;
  background: #969696a2;
}
.container {
}
.header__body {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  img {
    height: 80px;
  }
}
.header__list {
  display: flex;
  gap: 30px;
  align-items: center;
}
.header__success {
  padding: 10.5px 10px;
  background: #e0f9529a;
}
.header__watch {
  padding: 10.5px 10px;
  cursor: pointer;
  background: #87d8ec9d;
}
.header__item {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  input {
    padding-left: 5px;
    height: 35px;
    width: 150px;
    background: rgba(214, 198, 198, 0.783);
    color: #000;
  }
}
.line {
  background: #bbb0b09d;
  height: 30px;
  width: 100%;
}

@media (max-width: 600px) {
  .header__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: right;
  }
  .header__success {
    order: 3;
  }
  .header__watch {
    order: 2;
  }
  .header__filter {
    order: 1;
  }
  .header__logo {
    img {
      height: 125px;
    }
  }
}
</style>
