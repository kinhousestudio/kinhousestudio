<template id="">
  <Layout>


    <g-image :src="$page.contentfulKinhouseFilmy.filmPhoto.file.url"
    style="width: 100%;  object-fit: cover;" :alt=" $page.contentfulKinhouseFilmy.filmPhoto.title"/>
    <h2>{{$page.contentfulKinhouseFilmy.filmTitle}}</h2>

    <div v-html="rithtextToHtml($page.contentfulKinhouseFilmy.filmRitch)"></div>

    <div>{{$page.contentfulKinhouseFilmy.galeria}}</div>
    <!-- <div v-for="gal in $page.allContentfulKinhouseFilmy.galeria" :key="gal.id" style="" class="osoba">
        <g-image :src="gal.file.url" style="width:100px;" alt="gal" />

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
        filmTitle
        filmSynopis
        filmCrew
        filmDirector
        filmRitch
        galeria {
            id
            title
            file {
              url
            }
          }
        projectDetails
        filmPhoto {
          id
          title
          file {
            url
          }
        }
      }

  }

</page-query>
