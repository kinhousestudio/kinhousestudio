<template>
  <Layout>
    <div class="intro_text">
                <p>We are an independent and collaborative film production company
                    set up by two siblings, producer Marta Szarzyńska and animator
                    &amp; designer Paweł Szarzyński. We focus mainly on short and
                    feature films, creative documentaries and 3D/2D animations!</p>

    </div>

    <div id="filmy" class="margin-top">
    </div>

    <h2><span>films</span></h2>
    <div class="spis_filmow">
    <div class="jeden_film"v-for="edge in $page.allContentfulKinhouseFilmy.edges" :key="edge.node.id">
      <div class="opis_filmu">
      <g-link :to="edge.node.path"><h3>{{edge.node.filmTitle}}</h3></g-link>
      <p class="directed">{{edge.node.filmDirectedBy}}</p>
    </div>
    <div class="foto_filmu">
      <g-link :to="edge.node.path"><g-image :src="edge.node.filmPhoto.file.url" :alt=" edge.node.filmPhoto.title"/></g-link>
    </div>

    </div>
    </div><!-- koniec spis filmow -->

<div id="osoby" class="margin-top">
</div>
    <h2><span>get in touch</span></h2>
<div class="about_text">

                <p>We have gained experience in a variety of different companies
                    and projects in the advertising, broadcast, film and entertainment
                    industries. In 2017 we decided to join forces and start the
                    kinhouse studio. We adjust our team according to the needs of
                    particular projects, and we engage people from outside of our team.
                </p>


    </div>

    <div v-for="edge in $page.allContentfulKinhouseOsoby.edges" :key="edge.node.id" style="" class="osoba">
      <div class="osoba_foto">
        <g-link :to="edge.node.path"><g-image :src="edge.node.photo.file.url" class="selfie"  :alt=" edge.node.photo.title"/></g-link>
      </div>
      <div class="kto_osoba">
        <div class="osoba_dane">

      <h3 style="" >{{edge.node.polname}}</h3>
      <p style="">{{edge.node.role}}</p>
      <p style="">{{edge.node.mail}}</p>
      <p style="">{{edge.node.phone}}</p>
    </div>

      <p class="opis_osoba" style="">{{edge.node.description}}</p>

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
h2 {
  font-size: 14vh;
  border-bottom: 2px solid #000;
}
h2 span {
  background-color: #fff;
  position: relative;
  top: 5vh;
}

.opis_filmu h3 {
  font-size: 6vh;
  text-align: center;
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

  margin: 20vh 0;

}
.osoba_foto {
flex: 1 1 20%;

}
.kto_osoba {
  padding: 5vh;
  flex: 1 1 30%;
}
.opis_osoba {
margin-top: 10vh;
}
.osoba h3 {
  font-size: 5vh;
}

@media  (orientation: landscape) {
  .selfie {
    max-width: 80vw;
  }
  .jeden_film {
    display: flex;
    flex-wrap: wrap;
    margin: 20vh 0;
  }
  .opis_filmu {
    flex: 1 1 40%;
    height:  45vh;
  }
  .foto_filmu {
    flex: 1 1 60%;
    height:  45vh;
  }
  .jeden_film:nth-child(even) {
    flex-direction: row-reverse;
    border-right: 2px solid #000;
    margin-left: 10vh;
  }
  .jeden_film:nth-child(odd) {
    flex-direction: row;
    border-left: 2px solid #000;
    margin-right: 10vh;
  }
  .intro_text, .about_text {
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
      font-size: 5vh;
      height: auto;
      width: 80vw;
      padding: 10vh 5vw;;
      text-align: center;
  }
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
    height: 30vh;
  }
  .opis_filmu {

    height:  20vh;
  }
  .intro_text, .about_text {
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Archia-Bold",Roboto,"Helvetica Neue",Arial,sans-serif;
      font-size: 4vh;
      height: auto;
      width: 80vw;
      padding: 10vh 5vw;;
      text-align: center;
  }
}



</style>
