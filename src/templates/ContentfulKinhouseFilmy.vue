<template id="">
  <Layout>

    
    <g-image :src="$page.contentfulKinhouseFilmy.filmPhoto.file.url" style="width: 100%;  object-fit: cover;" :alt=" $page.contentfulKinhouseFilmy.filmPhoto.title"/>
    <h2>{{$page.contentfulKinhouseFilmy.filmTitle}}</h2>

    <p>{{$page.contentfulKinhouseFilmy.filmDirector}}</p>
    <p>{{$page.contentfulKinhouseFilmy.projectDetails}}</p>
    <p>{{$page.contentfulKinhouseFilmy.filmSynopis}}</p>
    <p>{{$page.contentfulKinhouseFilmy.filmCrew}}</p>

  </Layout>
</template>


<page-query>
  query ($id: ID!){
  contentfulKinhouseFilmy  (id: $id) {
  			id
        filmTitle
        filmSynopis
        filmCrew
        filmDirector
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
