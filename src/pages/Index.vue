<template>
  <Layout>
    <div class="intro margin-top">
        <div class="intro_wrapper">
            <div class="intro_tex">
                <p>We are an independent and collaborative film production company
                    set up by two siblings, producer Marta Szarzyńska and animator
                    &amp; designer Paweł Szarzyński. We focus mainly on short and
                    feature films, creative documentaries and 3D/2D animations!</p>

            </div>
        </div>
    </div>
    <div id="filmy" class="margin-top">

    </div>
    <h2><span>films</span></h2>
    <div v-for="edge in $page.allContentfulKinhouseFilmy.edges" :key="edge.node.id">
      <h3 style="padding: 10vh 0 0 0;">{{edge.node.filmTitle}}</h3>
      <p class="directed">{{edge.node.filmDirector}}</p>

      <g-link :to="edge.node.path"><g-image :src="edge.node.filmPhoto.file.url" style="width: 100%;  object-fit: fill;" :alt=" edge.node.filmPhoto.title"/></g-link>
<hr>
    </div>

<div id="osoby" class="margin-top">

</div>
    <h2><span>get in touch</span></h2>
<div class="more_info">
        <div class="more_info_wrapper">
            <div class="more_info_tex" style="margin: 0 0 10vw 0;">
                <p>We have gained experience in a variety of different companies
                    and projects in the advertising, broadcast, film and entertainment
                    industries. In 2017 we decided to join forces and start the
                    kinhouse studio. We adjust our team according to the needs of
                    particular projects, and we engage people from outside of our team.
                </p>

            </div>
        </div>

    </div>

    <div v-for="edge in $page.allContentfulKinhouseOsoby.edges" :key="edge.node.id" style="" class="osoba">

      <g-link :to="edge.node.path"><g-image :src="edge.node.photo.file.url" class="selfie"  :alt=" edge.node.photo.title"/></g-link>
      <div class="opis">
      <h3 style="" >{{edge.node.polname}}</h3>
      <p style="">{{edge.node.role}}</p>
      <p style="">{{edge.node.mail}}</p>
      <p style="">{{edge.node.phone}}</p>
      </div>

      <p class="description" style="">{{edge.node.description}}</p>

    </div>


  </Layout>
</template>

<page-query>
  {
    allContentfulKinhouseFilmy (sortBy:  "updatedAt") {
      edges {
        node {
          filmTitle
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

    allContentfulKinhouseOsoby {
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


  }

</page-query>


<script>
export default {
  metaInfo: {
    title: 'kinhouse'
  }
}
</script>
<style>

</style>
