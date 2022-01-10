<template>
  <div class="container">
    <div class="grid-buttons">
      <div class="button button-red" @click="clickBtn(1)" :class="{ active: playingButton[1] }"></div>
      <div class="button button-blue" @click="clickBtn(2)" :class="{ active: playingButton[2] }"></div>
      <div class="button button-green" @click="clickBtn(3)" :class="{ active: playingButton[3] }"></div>
      <div class="button button-orange" @click="clickBtn(4)" :class="{ active: playingButton[4] }"></div>
    </div>
    <div class="levels">
      <button
        class="level"
        :class="{ active: activeButton === 'easy' }"
        @click="
          gameMode = 'easy';
          activeButton = 'easy';
        "
      >
        Легко
      </button>
      <button
        class="level"
        :class="{ active: activeButton === 'normal' }"
        @click="
          gameMode = 'normal';
          activeButton = 'normal';
        "
      >
        Нормально
      </button>
      <button
        class="level"
        :class="{ active: activeButton === 'hard' }"
        @click="
          gameMode = 'hard';
          activeButton = 'hard';
        "
      >
        Сложно
      </button>
    </div>
    <button @click="startGame">Старт</button>
    <p>Счёт: {{ score }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      play: false,
      gameMode: "easy",
      activeButton: "easy",
      defeat: false,
      sounds: {
        1: "sounds/red.mp3",
        2: "sounds/blue.mp3",
        3: "sounds/green.mp3",
        4: "sounds/orange.mp3"
      },
      playingButton: {
        1: false,
        2: false,
        3: false,
        4: false
      },
      score: 0,
      sequence: [],
      playerSequence: [],
      sequenceInterval: null,
      isClickable: false
    };
  },
  methods: {
    sound(file) {
      if (this.sounds[file]) {
        var audio = new Audio(this.sounds[file]);
        audio.play();
      }
    },
    startGame() {
      this.play = true;
      this.sequence = [];
      this.playerSequence = [];
      this.defeat = false;
      this.score = 0;
      clearInterval(this.sequenceInterval);
      this.showSequence();
    },
    clickBtn(num) {
      if (this.isClickable) {
        this.sound(num);
        this.lightUp(num);
        this.playerSequence.push(num);
        this.checkWinLose();
      }
    },
    checkWinLose() {
      for (let i = 0; i < this.playerSequence.length; i++) {
        if (this.playerSequence[i] !== this.sequence[i]) {
          this.playerSequence = [];
          alert("Defeat");
          this.defeat = true;
          this.showSequence(true);
        }
      }
      if (this.playerSequence.length === this.sequence.length) {
        this.playerSequence = [];
        this.score++;
        if (this.score === 20) {
          this.isClickable = false;
          alert("Victory");
        } else {
          this.showSequence();
        }
      }
    },
    lightUp(file) {
      this.playingButton[file] = true;
      setTimeout(() => {
        this.playingButton[file] = false;
      }, 300);
    },
    showSequence(gen) {
      let currentIndex = 0;
      let speed = this.sequence.length === 0 ? 1000 : this.getModeSpeed(this.gameMode);
      this.isClickable = false;
      if (!gen) {
        this.sequence.push(Math.floor(Math.random() * 4 + 1));
      }
      this.sequenceInterval = setInterval(() => {
        if (currentIndex >= this.sequence.length) {
          clearInterval(this.sequenceInterval);
          return (this.isClickable = true);
        }
        this.sound(this.sequence[currentIndex]);
        this.lightUp(this.sequence[currentIndex]);
        currentIndex++;
      }, speed);
    },
    getModeSpeed(mode) {
      if (mode === "easy") {
        return 1500;
      } else if (mode === "normal") {
        return 1000;
      } else {
        return 400;
      }
    }
  },
  components: {}
};
</script>

<style lang="scss">
$red: rgb(255, 0, 0);
$blue: rgb(0, 0, 255);
$green: rgb(0, 255, 0);
$orange: rgb(255, 166, 0);
.grid-buttons {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-gap: 10px 10px;
  margin-right: 30px;
}
.levels {
  display: grid;
}
.active {
  background: greenyellow;
}
.button {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  margin-right: 10px;
  opacity: 0.4;
  &.active {
    border: 2px solid white;
    opacity: 1;
  }
}

.button-red {
  background: $red;
}
.button-blue {
  background: $blue;
}
.button-green {
  background: $green;
}
.button-orange {
  background: $orange;
}

.container {
  width: 800px;
  background: rgba($color: #000000, $alpha: 0.1);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 25px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
