<template>
  <div class="container">
    <img :src="logo" alt>
    <hello></hello>
    <div class="editor"></div>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
import logo from '@/assets/logo.png';
import BalmEditor from '@src/scripts/editor';

export default {
  name: 'app',
  components: {
    Hello
  },
  data() {
    return {
      logo,
      editor: null
    };
  },
  mounted() {
    this.editor = new BalmEditor('.editor', {});
  }
};
</script>
