<template>
  <div class="layout">

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
    font-family: 'Archia-Bold';
    src: url('../assets/fonts/ArchiaBold.woff2') format('woff2'),
        url('../assets/fonts/ArchiaBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Archia-Regular';
    src: url('../assets/fonts/ArchiaRegular.woff2') format('woff2'),
        url('../assets/fonts/ArchiaRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}






h1, h2, h3, h4, h5, h6 {
    font-family: "Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
}

.title span {
  font-family: "Archia-Regular",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: smaller;

}


body {
  font-family: "Archia-Regular",Roboto,"Helvetica Neue",Arial,sans-serif;

  margin:0;
  padding:0;

  width: 99vw;
}
a {
  color: #000;
  text-decoration: none;
  font-family: "Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.active {
text-decoration: none;
}
.nav__link {
  font-family: "Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
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
  z-index: 100;
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
    z-index: 100;
  }
}

</style>
