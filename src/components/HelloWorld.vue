<template>
  <div class="hello">
    <a href="/new-bringlist" class="btn btn-primary"
       role="button">new message</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50; /* Green */
}

</style>
