<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">



        <g-link exact class="nav__link"  to="/">kinhouse</g-link>
        <g-link       class="nav__link" to="/#filmy">films</g-link>
        <g-link       class="nav__link" to="/#osoby">get_in_touch</g-link>


      </nav>
    </header>
    <slot/>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Footer from "~/components/footer.vue"



export default {
  components: {
    Footer
  }

}


</script>


<style>
@font-face {
  font-family: Archia-Bold;
  src: url('../assets/fonts/Archia-Bold.otf');
  font-weight: normal;
}
h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
}




body {

  margin:0;
  padding:0;
  line-height: 1.2;
  width: 99vw;
}
a {
  color: #000;
  text-decoration: none;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.active {
text-decoration: none;
}


.layout {
  padding-top: 15vh;
  width:90vw;
  margin: 0 auto;

}

@media  (orientation: landscape) {
.nav__link {
margin: 0;
font-size: 2em;
padding: 0 6.8vw;
}
.nav li {
  display: flex;
flex-direction: row;     /* make main axis horizontal (default setting) */
align-content: space-around;
}
.nav {
  position: fixed;
  top: 0;
  border-bottom: 3px solid black;
  padding-bottom: 2vh;
  padding-top: 2vh;
  background-color: #fff;
  width: 90vw!important;
}

}
@media  (orientation: portrait) {
  .nav__link {
  margin: 0;
  font-size: 2vh;
  padding: 0 6.8vw;
  }
  .nav li {
    display: flex;
  flex-direction: row;     /* make main axis horizontal (default setting) */
  align-content: space-around;
  }
  .nav {
    position: fixed;
    top: 0;
    border-bottom: 3px solid black;
    padding-bottom: 2vh;
    padding-top: 2vh;
    background-color: #fff;
    width: 90vw!important;
  }
}

</style>
