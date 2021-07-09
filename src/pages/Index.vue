<template>
  <Layout>
    <header class="header">
      <nav class="nav">



        <p exact @click="scrollToTop" class="nav__link"  >kinhouse</p>
        <p  v-show="!lang2"      @click="scrollToFilmy" class="nav__link" >films</p>
        <p  v-show="lang2"      @click="scrollToFilmy" class="nav__link"  >filmy</p>
        <p  v-show="!lang2"      @click="scrollToOsoby" class="nav__link" >get_in_touch</p>
        <p  v-show="lang2"      @click="scrollToOsoby" class="nav__link" >kontakt</p>












      </nav>
    </header>
    <div class="intro_text">


      <div  v-for="edge in $page.allContentfulText.edges" :key="edge.node.id">
        <p v-show="!lang2" >{{edge.node.aboutTextEn}}</p>
        <p v-show="lang2" >{{edge.node.aboutTextPl}}</p>
      </div>

    </div>

    <div id="filmy" class="margin-top">
    </div>

    <h2 v-show="!lang2" ><span>films</span></h2>
    <h2 v-show="lang2" ><span>filmy</span></h2>
    <div class="spis_filmow">
    <div class="jeden_film" v-for="edge in $page.allContentfulKinhouseFilmy.edges" :key="edge.node.id">
      <div class="foto_filmu">
        <g-link :to="edge.node.path"><g-image :src="edge.node.filmPhoto.file.url" :alt=" edge.node.filmPhoto.title"/></g-link>
      </div>
      <div class="opis_filmu">
      <g-link :to="edge.node.path" v-show="!lang2" ><h3>{{edge.node.filmTitle}}</h3></g-link>
      <g-link :to="edge.node.path" v-show="lang2" ><h3>{{edge.node.filmTytul}}</h3></g-link>
      <p class="directed">{{edge.node.filmDirectedBy}}</p>
    </div>


    </div>
    </div><!-- koniec spis filmow -->

<div id="osoby" class="margin-top">
</div>
    <h2 v-show="!lang2" ><span>get in touch</span></h2>
    <h2 v-show="lang2" ><span>kontakt</span></h2>
<div class="about_text">


                <div  v-for="edge in $page.allContentfulText.edges" :key="edge.node.id">
                  <p v-show="lang2" >{{edge.node.getTextPl}}</p>
                  <p v-show="!lang2" >{{edge.node.getTextEn}}</p>
                </div>


    </div>

    <div v-for="edge in $page.allContentfulKinhouseOsoby.edges" :key="edge.node.id" style="" class="osoba">
      <div class="osoba_foto">
        <!-- <g-link :to="edge.node.path"><g-image :src="edge.node.photo.file.url" class="selfie"  :alt=" edge.node.photo.title"/></g-link> -->
        <g-image :src="edge.node.photo.file.url" class="selfie"  :alt=" edge.node.photo.title"/>
      </div>

      <div class="osoba_pisane">


        <div class="osoba_dane">

      <h3 style="" >{{edge.node.polname}}</h3>
      <p style="">{{edge.node.role}}</p>
      <p style="">{{edge.node.mail}}</p>
      <p style="">{{edge.node.phone}}</p>
      </div>

      <div class="osoba_opis">
      <p v-show="!lang2"  style="">{{edge.node.description}}</p>
      <p v-show="lang2"  style="">{{edge.node.descriptionPl}}</p>

    </div>
    </div>
    </div>


  </Layout>
</template>

<page-query>
  {
    allContentfulKinhouseFilmy (sortBy:  "updatedAt") {
      edges {
        node {
          filmTitle
          filmTytul
          filmDirectedBy
          updatedAt
          id
          path
          filmPhoto {
            id
            title
            file {
              url
            }
          }
        }
      }
    }

    allContentfulKinhouseOsoby (sortBy:  "updatedAt") {
      edges {
        node {
        	title
          path
          id
          name
          polname
          role
          mail
          phone
          description
          descriptionPl
          photo {
            id
            title
            file {
              url
            }
          }
        }
      }
    }

    allContentfulText {
      edges {
        node {
          title
          id
    aboutTextPl
    aboutTextEn
    getTextPl
    getTextEn


        }
      }
    }


  }

</page-query>


<script>
import { TimelineLite, TweenMax, gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin );


export default {
  metaInfo: {
    title: 'kinhouse'
  },
  mounted() {
    const tl = new TimelineLite();
    const userLang = navigator.language || navigator.userLanguage;
    userLang == 'pl' ? this.languare = 'polski' : this.languare = 'angielski';
    userLang == 'pl' ? this.lang2 = true : this.lang2 = false;


    gsap.from(app, 2, { opacity: 0, delay: 0});
    // tl.from('.intro_text', 3, { opacity: 0, delay: 2});

    // const RUCHY = document.querySelectorAll('.ruch');
    //   RUCHY.forEach((ruch) => {
    //           let wbok = Math.floor((Math.random() * 10) + 1) + 'vw'
    //           gsap.to(ruch, 1, { x: wbok });
    // });


  },
  methods: {
    scrollToOsoby() {
      gsap.to(window, {duration: 1, scrollTo:"#osoby"});
    },
    changeLang2() {
       this.lang2 == true ? this.lang2 = false : this.lang2 = true;
    },
    scrollToFilmy() {
      gsap.to(window, {duration: 1, scrollTo: "#filmy"});
    },
    scrollToTop() {
      gsap.to(window, {duration: 1, scrollTo: "#header"});
    }

  },
  data() {
    return {
      klikacz: 'niekliknięty',
      lang2: true
    }
  }
}
</script>
<style>
h2 {
  font-size: 14vh;
  border-bottom: 1px solid #000;

}
h2 span {
  background-color: #fff;
  position: relative;
  top: 5vh;
}

.opis_filmu p {
  font-size: 2vh;
  text-align: center;
  position: relative;
  bottom: 6vh;
}

.foto_filmu a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.osoba {
  display: flex;
  flex-wrap: wrap;
  align-items:  flex-start;
  margin: 200px 0;
  min-height: 500px;



}
.osoba_foto {
flex: 1 1 25%;
}
.osoba_pisane {
  flex: 2 0 60%;
  display: flex;
flex-wrap: wrap;

}
.osoba_opis {
  padding: 0;
  margin: 0;
  margin-top: 0;
  font-size: 1.2em;
  flex: 1 0 45%;

}
.osoba_dane {
  font-size: 1.2em;
  padding: 0 20px;
  flex: 1 0 25%;
}

.osoba h3 {
  font-size: 5vh;
  margin: 0;
  padding: 0;
}

@media  (orientation: landscape) {
  .selfie {
    max-width: 80vw;
  }
  .jeden_film {
    display: flex;
    flex-wrap: wrap;
    margin: 200px 0;
  }
  .opis_filmu {
    flex: 1 1 40%;
    height:  40vh;

    margin: 0;
    padding: 0;

  }
  .opis_filmu h3 {
    font-size: 6vh;
    text-align: left;
    padding: 0 0 0 10px;
    margin: -10px 0 6vh 0;

  }
  .opis_filmu p {
    text-align: left;
    padding: 0 0 0 10px ;
  }
  .opis_filmu a {
    margin-top: 0;
    padding-top: 0;

  }
  .foto_filmu {
    flex: 1 1 50%;
    height:  40vh;
  }
  .jeden_film:nth-child(even) {
    flex-direction: row-reverse;
    border-left: 1px solid black;
    margin-left: 0vh;
    margin-right: 10vw;
  }
  .jeden_film:nth-child(odd) {
    flex-direction: row;
    border-right: 1px solid black;
    margin-right: 0vh;
    margin-left: 10vw;
  }
  .intro_text, .about_text {
      font-family: "Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
      font-size: 5vh;
      height: auto;
      width: 80vw;
      padding: 0;
      margin: 100px 5vw -12vh 5vw;
      text-align: center;
  }
  .intro_text {    margin: 100px 5vw -12vh 5vw; }
  .about_text {    margin: 200px 5vw 200px 5vw; }
}
@media  (orientation: portrait) {
  .selfie {
    width: 90vw;
  }
  .jeden_film {
    display: flex;
    flex-direction: column;
    margin: 20vh 0;
  }
  .foto_filmu {
    height: 50vh;
    width: 100vw;
    margin: 0 0 0 -5vw;
  }
  .opis_filmu {

    height:  20vh;
  }
  .opis_filmu h3 {
    font-size: 3.4vh;
    text-align: center;
    margin-bottom: 5vh;
  }
  .intro_text, .about_text {
      font-family: "Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
      font-size: 3.4vh;

      height: auto;
      width: 80vw;
      padding: 0 5vw 10vh 5vw;
      text-align: center;
  }
}

@media  (orientation: landscape) {


.nav {
  position: fixed;
    display: flex;

    justify-content: space-around;
    align-items: center;
  top: 0;
  border-bottom: 1px solid black;
  padding-bottom: 2vh;
  padding-top: 2vh;
  background-color: #fff;
  width: 90vw!important;
  z-index: 100;
}
.nav li {
  flex-direction: row-reverse;
  font-size: 2vh;
}
.nav h3 {
  font-size: 2.7vh;
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
    border-bottom: 1px solid black;
    padding-bottom: 2vh;
    padding-top: 2vh;
    background-color: #fff;
    width: 90vw!important;
    z-index: 100;
    display: flex;
  }
}



</style>
