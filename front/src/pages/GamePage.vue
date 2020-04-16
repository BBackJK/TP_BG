<template>
  <game-component />
</template>

<script>
import { Game } from '../components';

const { GameComponent } = Game;

export default {
  name: 'GamePage',
  components: {
    GameComponent
  }
};
</script>
