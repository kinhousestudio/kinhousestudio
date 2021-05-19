<template id="">
  <Layout>


    <g-image :src="$page.contentfulKinhouseFilmy.filmPhoto.file.url"
    style="width: 100%;  object-fit: cover;" :alt=" $page.contentfulKinhouseFilmy.filmPhoto.title"/>
    <h2>{{$page.contentfulKinhouseFilmy.filmTitle}}</h2>
    <h2>{{$page.contentfulKinhouseFilmy.filmTytul}}</h2>
    <h2>directed by: {{$page.contentfulKinhouseFilmy.filmDirectedBy}}</h2>
    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.projectDetailsEn)"></div>
    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.projectDetailsPl)"></div>
    <hr>
    <g-image :src="$page.contentfulKinhouseFilmy.filmProductionPhoto.file.url"
    style="width: 200px; height: 200px; padding: 0;  object-fit: contain; " :alt=" $page.contentfulKinhouseFilmy.filmProductionPhoto.title"/>
    <hr>


    <div v-for="prod in $page.contentfulKinhouseFilmy.filmCoproductionAll" :key="prod.id">
      <g-link :to="prod.description" >
      <g-image :src="prod.file.url"
      style="width: 200px; height: 200px; padding: 0;  object-fit: contain;  " :alt=" prod.title"/>
    </g-link>
    </div>


    <hr>
    <p>{{$page.contentfulKinhouseFilmy.filmSynopisEn}}</p>
    <p>{{$page.contentfulKinhouseFilmy.filmSynopisPl}}</p>
    <hr>
    <p>{{$page.contentfulKinhouseFilmy.filmStatementEn}}</p>
    <p>{{$page.contentfulKinhouseFilmy.filmStatementPl}}</p>
    <hr>
    <div v-for="crew in $page.contentfulKinhouseFilmy.filmCrewAll" :key="crew.id">
      <g-image :src="crew.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" crew.title"/>
      <h3>{{crew.title}}</h3>
      <p>{{crew.description}}</p>
    </div>
    <div v-for="crew in $page.contentfulKinhouseFilmy.filmCrewAllPl" :key="crew.id">
      <g-image :src="crew.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" crew.title"/>
      <h3>{{crew.title}}</h3>
      <p>{{crew.description}}</p>
    </div>
    <hr>
    <div v-for="cast in $page.contentfulKinhouseFilmy.filmCastAll" :key="cast.id">
      <g-image :src="cast.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" cast.title"/>
      <h3>{{cast.title}}</h3>
      <p>{{cast.description}}</p>
    </div>
    <div v-for="cast in $page.contentfulKinhouseFilmy.filmCastAllPl" :key="cast.id">
      <g-image :src="cast.file.url"
      style="width: 20%; padding: 1%;  object-fit: cover;" :alt=" cast.title"/>
      <h3>{{cast.title}}</h3>
      <p>{{cast.description}}</p>
    </div>
    <hr>
    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmCastListEn)"></div>
    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmCastListPl)"></div>
    <hr>
    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmPeopleEn)"></div>
    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmPeoplePl)"></div>
    <hr>
    <p>{{$page.contentfulKinhouseFilmy.filmThanks}}</p>
    <p>{{$page.contentfulKinhouseFilmy.filmThanksPl}}</p>
    <hr>






    <hr>
    <div v-for="foto in $page.contentfulKinhouseFilmy.filmGalleryAll" :key="foto.id">
      <g-image :src="foto.file.url"
      style="width: 50%; padding: 1%;  object-fit: cover;" :alt=" foto.title"/>
    </div>
    <!-- <hr>
    <p>{{$page.contentfulKinhouseFilmy.filmPdf}}</p> -->
    <hr>
    <p>{{$page.contentfulKinhouseFilmy.filmVideoLink}}</p>






    <!-- <div v-for="fest in $page.contentfulKinhouseFilmy.filmFestivalAll" :key="fest.id">
      <g-image :src="fest.file.url"
      style="width: 50%; padding: 1%;  object-fit: cover;" :alt=" fest.title"/>
    </div> -->

  </Layout>
</template>
<script>
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'


export default {
  methods: {
    rithtextToHtml (content) {
      return documentToHtmlString(content)
    }
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
    filmSynopisEn
    filmSynopisPl
    filmStatementEn
    filmStatementPl
    filmPeopleEn
    filmPeoplePl
    filmThanks
    filmThanksPl

    filmVideoLink
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
ul li {
  list-style: none;
}
</style>
