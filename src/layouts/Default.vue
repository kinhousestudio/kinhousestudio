<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">



        <g-link exact class="nav__link"  to="/">kinhouse</g-link>
        <g-link       class="nav__link" to="/#filmy">films</g-link>
        <g-link       class="nav__link" to="/#osoby">get in touch</g-link>


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

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.2;
  width: 99vw;
}
a {
  color: #000;
  text-decoration: none;
}
.active {
text-decoration: none;
}


.layout {
  width:80vw;
  margin: 0 auto;

}



.nav__link {
margin: 0;
font-size: 3vw;
padding: 0 6.8vw;

}

.nav li {
  display: flex;
flex-direction: row;     /* make main axis horizontal (default setting) */
justify-content: center; /* center items horizontally, in this case */
align-items: center;
}
.nav {
  position: fixed;
  top: 0;
  border-bottom: 3px solid black;
  padding-bottom: 2vh;
  padding-top: 2vh;
  background-color: #fff;
  width: 80vw!important;




}
</style>
