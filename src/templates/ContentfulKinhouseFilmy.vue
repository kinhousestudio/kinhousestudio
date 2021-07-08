<template id="">
  <Layout2>
    <div class="kinhouse">
      <g-link exact @click="" class="nav__link"  to="/">kinhouse</g-link>
    </div>


    <g-image :src="$page.contentfulKinhouseFilmy.filmPhoto.file.url"
    style="width: 100%; margin:0 ; padding: 0; max-height:100vh; min-height: 60vh; object-fit: cover;" :alt=" $page.contentfulKinhouseFilmy.filmPhoto.title"/>
  <article>
    <div class="titleBig" >


    <h2 class="title "v-show="!lang" >{{$page.contentfulKinhouseFilmy.filmTitle}}</h2>
    <h2 class="title "v-show="lang" >{{$page.contentfulKinhouseFilmy.filmTytul}}</h2>
    <h3 class="title "v-show="!lang" ><span>directed by: </span><br>{{$page.contentfulKinhouseFilmy.filmDirectedBy}}</h3>
    <h3 class="title "v-show="lang" ><span>reżyseria: </span><br>{{$page.contentfulKinhouseFilmy.filmDirectedBy}}</h3>
  </div>



    <div class="details_production">
    <div class="details">
      <div v-show="!lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.projectDetailsEn)"></div>
      <div v-show="lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.projectDetailsPl)"></div>
    </div>

    <div class="production">

      <h3 v-show="!lang" >Production</h3>
      <h3 v-show="lang" >Produkcja</h3>
    <g-image :src="$page.contentfulKinhouseFilmy.filmProductionPhoto.file.url"
    style="width: 200px; height: 200px; padding: 0;  object-fit: contain; " :alt=" $page.contentfulKinhouseFilmy.filmProductionPhoto.title"/>


      <h3 v-show="!lang" >Coproduction</h3>
      <h3 v-show="lang" >Koprodukcja</h3>
      <div class="coproduction">

    <div v-for="prod in $page.contentfulKinhouseFilmy.filmCoproductionAll" :key="prod.id">
      <g-link :to="prod.description" >
      <g-image :src="prod.file.url"
      style="width: 200px; height: 200px; padding: 0;  object-fit: contain;  " :alt=" prod.title"/>
    </g-link>
    </div>
    </div>
    </div>
    </div>



    <h3 v-show="!lang" style=" text-align: center; margin-top: 200px;" >{{$page.contentfulKinhouseFilmy.filmFestivalAllHeader}}</h3>
    <h3 v-show="lang"  style="  text-align: center; margin-top: 200px;" >{{$page.contentfulKinhouseFilmy.filmFestivalAllHeaderPl}}</h3>



    <div class="nagrody">
        <div v-for="fest in $page.contentfulKinhouseFilmy.filmFestivalAll" :key="fest.id">
          <g-image :src="fest.file.url"
          style="width: 11vw; padding: 1%;  object-fit: cover; " :alt=" fest.title"/>
        </div>
    </div>

    <div class="player">

    <iframe :src="$page.contentfulKinhouseFilmy.filmVideoLink"

    width="1024" height="760" frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

  </div>





    <div class="filmSynopisStatement">
      <div v-show="!lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmSynopisStatementEn)"></div>
      <div v-show="lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmSynopisStatementPl)"></div>
    </div>




    <div v-for="foto in $page.contentfulKinhouseFilmy.filmGalleryAll" :key="foto.id" class="foto">
      <g-image :src="foto.file.url"
      :alt=" foto.title"/>
    </div>




    <div v-show="!lang" v-for="crew in $page.contentfulKinhouseFilmy.filmCrewAll" :key="crew.id" class="persona">
      <g-image :src="crew.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" crew.title"/>
      <div class="persona_opis">
      <h3>{{crew.title}}</h3>
      <p>{{crew.description}}</p>
    </div>
    </div>





    <div  v-show="lang" v-for="crew in $page.contentfulKinhouseFilmy.filmCrewAllPl" :key="crew.id" class="persona">
      <g-image :src="crew.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" crew.title"/>
      <div class="persona_opis">
      <h3>{{crew.title}}</h3>
      <p>{{crew.description}}</p>
    </div>
    </div>

    <div  v-show="!lang" v-for="cast in $page.contentfulKinhouseFilmy.filmCastAll" :key="cast.id" class="persona">
      <g-image :src="cast.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" cast.title"/>
      <div class="persona_opis">
      <h3>{{cast.title}}</h3>
      <p>{{cast.description}}</p>
    </div>
    </div>
    <div  v-show="lang" v-for="cast in $page.contentfulKinhouseFilmy.filmCastAllPl" :key="cast.id" class="persona">
      <g-image :src="cast.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" cast.title"/>
      <div class="persona_opis">
      <h3>{{cast.title}}</h3>
      <p>{{cast.description}}</p>
    </div>
    </div>

    <hr>
    <div class="castandcrew">
    <div  class="cast" v-show="!lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmCastListEn)"></div>
    <div  class="cast" v-show="lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmCastListPl)"></div>

    <div  class="crew" v-show="!lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmPeopleEn)"></div>
    <div  class="crew" v-show="lang" v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmPeoplePl)"></div>
    </div>    <!-- castandcrew -->










    <hr>
    <p v-show="!lang" >{{$page.contentfulKinhouseFilmy.filmThanks}}</p>
    <p v-show="lang" >{{$page.contentfulKinhouseFilmy.filmThanksPl}}</p>






  </article>
</Layout2>
</template>
<script>
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import { TimelineLite, TweenMax, gsap } from 'gsap';


export default {
  methods: {
    rithtextToHtml (content) {
      return documentToHtmlString(content)
    }
  },
  data() {
    return {
      lang:  false
    }
  },
  mounted() {
    const tl = new TimelineLite();
    const userLang = navigator.language || navigator.userLanguage;

    userLang == 'pl' ? this.lang = true : this.lang = false;


    gsap.from('#app', 2, { opacity: 0, delay: 0});
  }
}
</script>

<page-query>
  query ($id: ID!){
  contentfulKinhouseFilmy  (id: $id) {
  			id
        title
        path
    filmPhoto {
      title
      id
      file {
        url
      }
    }
    filmTitle
    filmTytul
    filmDirectedBy
    projectDetailsEn
    projectDetailsPl
    filmSynopisStatementEn
    filmSynopisStatementPl

    filmPeopleEn
    filmPeoplePl
    filmThanks
    filmThanksPl

    filmVideoLink
    filmFestivalAllHeader
    filmFestivalAllHeaderPl

    filmFestivalAll {
      id
      title
      file {
        url
      }
    }
    filmGalleryAll {
      id
      title
      file {
        url
      }
    }

    filmProductionPhoto {
      title
      id
      description
      file {
        url
      }
    }
    filmCoproductionAll {
      title
      id
      description
      file {
        url
      }
    }
    filmCrewAll {
      title
      id
      description
      file {
        url
      }
    }
    filmCrewAllPl {
      title
      id
      description
      file {
        url
      }
    }
    filmCastAll {
      title
      id
      description
      file {
        url
      }
    }
    filmCastAllPl {
      title
      id
      description
      file {
        url
      }
    }
    filmCastListEn
    filmCastListPl




      }
  }
</page-query>
<style>
.player {
  text-align: center;
  margin: 200px auto;
}
h2.title {
  border-bottom: 0;
}
ul li {
  list-style: none;
}
.title {
  font-size: 8vh;
  text-align: center;

}


.persona {
  display: flex;
  flex-wrap: wrap;
  padding: 10vh 0;
}
.persona:nth-child(even) {
  flex-direction: row-reverse;
}
.persona:nth-child(odd) {
  flex-direction: row;

}
.kinhouse a {
  color: #fff;
  position:fixed;
  text-shadow: 2px 2px #ff0000;
  z-index: 100;
  top:0; left: 0;
  width: auto;
  height: 3vh;

  padding: 3vh 3vw;
}





@media  (orientation: landscape) {
  article {
    padding: 0 15vw;
    position: relative;
    bottom: 70vh;
  }
  .castandcrew {
    display: flex;
  }
  .cast, .crew {
    flex: 1 1 45%;
  }
.nagrody {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 200px 0;
  justify-content: center;
}

  .details_production {
    display: flex;

  }
  .details, .production {
    flex: 1 1 50%;


  }
  .filmSynopisStatement {
    padding: 0 5vw ;
    line-height: 2em;
    margin-bottom: 200px;
  }
  .persona img {
    flex: 1 1 30%;
    height: 45vh;
    width: 45vw;
    object-fit: cover;
  }
  .persona_opis {
    flex: 1 1 50%;
    padding: 0 10vh;
    line-height: 1.5em;
  }
  .titleBig {
    width: 90vw;
    height: 60vh;
    margin-left: -10vw;

  }
  .titleBig h2 {
    font-size: 8vw;
    color: #fff;
  }
  .titleBig h3 {
    font-size: 2.5vw;
    color: #fff;
  }
  .coproduction {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .production  {
    border-left: 1px solid black;
    margin-left:  20px;
    padding-left: 20px;
  }
  h3 {
    font-size: 1.8em;
  }
  .foto img {
    width: 100%;

    height: 100%;
    padding: 0;
    object-fit: cover;
  }

  .foto {
    width: 144%!important;
    margin: 0 0 0 -22%;
    padding: 0;
  }




}

@media  (orientation: portrait) {
  article {
    padding: 0 3vw;;

  }
  .details_production {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0 0 0 -3vw;;
    width: 94vw;

  }
  .details, .production {
    flex: 1 1 100%;
    margin: 0;
    padding: 0;


  }
  .filmSynopisStatement {
    padding: 1vh 1vw;
  }
  .persona img {
    flex: 1 1 30%;
    height: 55vh;
    width: 75vw;
    object-fit: cover;
  }
  .persona_opis {
    flex: 1 1 100%;
    padding: 1vh;
  }
  .titleBig {
    width: 90vw;
    height: 30vh;


  }
  .titleBig h2 {
    font-size: 3.4vh;
    color: #000;
  }
  .titleBig h3 {
    font-size: 2.5vh;
    color: #000;
  }
  .coproduction {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .kinhouse a {

    font-size: 2em;

  }
  .foto img {
    width: 144%;
    margin: 0 0 0 -22%;
    height: 100%;
    padding: 0;
    object-fit: cover;
  }






}





</style>
