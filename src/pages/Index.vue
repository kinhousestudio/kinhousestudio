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
      <p>{{edge.node.filmDirector}}</p>

      <g-link :to="edge.node.path"><g-image :src="edge.node.filmPhoto.file.url" style="width: 60%;  object-fit: fill;" :alt=" edge.node.filmPhoto.title"/></g-link>
<hr>
    </div>

<div id="osoby" class="margin-top">

</div>
    <h2><span>get in touch</span></h2>
<div class="more_info">
        <div class="more_info_wrapper">
            <div class="more_info_tex">
                <p>We have gained experience in a variety of different companies
                    and projects in the advertising, broadcast, film and entertainment
                    industries. In 2017 we decided to join forces and start the
                    kinhouse studio. We adjust our team according to the needs of
                    particular projects, and we engage people from outside of our team.
                </p>

            </div>
        </div>

    </div>

    <div v-for="edge in $page.allContentfulKinhouseOsoby.edges" :key="edge.node.id" style="display: grid;
  grid-template-columns: repeat(4, 10vw);
  grid-template-rows: repeat(5,10vh);
  grid-gap: 10px;
  align-content: space-around;
  justify-content: space-between;
  margin: 0 0 100px 0;">

      <g-link :to="edge.node.path"><g-image :src="edge.node.photo.file.url" style="  object-fit: fill; grid-column: 1/5; grid-row: 1/6;" :alt=" edge.node.photo.title"/></g-link>
      <h3 style="grid-column: 2/5; grid-row: 1/6; " >{{edge.node.polname}}</h3>
      <p style="grid-column: 2/5; grid-row: 2/6;">{{edge.node.role}}</p>
      <p style="grid-column: 2/5; grid-row: 3/6;">{{edge.node.mail}}</p>
      <p style="grid-column: 2/5; grid-row: 4/6;">{{edge.node.phone}}</p>

      <p class="description" style="grid-column: 3/5; grid-row: 3/6;">{{edge.node.description}}</p>

    </div>


  </Layout>
</template>

<page-query>
  {
    allContentfulKinhouseFilmy {
      edges {
        node {
          filmTitle
          filmDirector
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
.margin-top {
  padding-top: 16vh;

}
h2 {

  width: 80vw;
  border-bottom: 3px solid black;
}
h2 span {
  background-color: #fff;
  font-size: 6em;
  padding-bottom:  30px;
}
h3 {
  font-size: 3em;
}
.more_info_tex p, .intro_tex p {
  font-size: 2.8em;
  text-align: center;
}
p {
  font-size: 1.4em;
}
</style>
