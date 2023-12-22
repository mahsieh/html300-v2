<template>
  <div class="about">
    <h1>This is an about page for Travel Buddy</h1>

    <p> Travel Buddy is a website designed for travelers (like you!) that actually want to learn about the places that
      they're going to. Additionally, we'll help you figure out whether your planned travel dates are a good fit for the
      vacation you have in mind, or if the local climate is going to cause some problems. Additionally, if there's any
      urgent news pertaining the area, we'll also include that so you're really in the know.
    </p>

    <!--try out if/else in vue to display a button depending on state of the page/button itself-->
    <button v-if="!toggle" type="button" name="button" v-on:click="toggle = !toggle">Travels!</button>
    <button v-else type="button" name="button2" v-on:click="toggle = !toggle">Travel?</button>

    <!--flavor text to accompany/explain the buttons-->
    <p v-if="toggle">Travel is great isn't it</p>
    <p v-else>Guess you don't like traveling?</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // handle the toggling of the button/text
      toggle: false
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}</style>
