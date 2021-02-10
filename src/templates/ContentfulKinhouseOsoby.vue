<template id="">
  <Layout>

    <div class="odstep"></div>
    <h2>{{$page.contentfulKinhouseOsoby.polname}}</h2>
    <p>{{$page.contentfulKinhouseOsoby.role}}</p>
    <p>{{$page.contentfulKinhouseOsoby.mail}}</p>
    <p>{{$page.contentfulKinhouseOsoby.phone}}</p>
    <p>{{$page.contentfulKinhouseOsoby.description}}</p>
    <g-image :src="$page.contentfulKinhouseOsoby.photo.file.url" style="width: 100%;  object-fit: cover;" :alt=" $page.contentfulKinhouseOsoby.photo.title"/>

  </Layout>
</template>


<page-query>
query ($id: ID!){
contentfulKinhouseOsoby  (id: $id) {
      name
      polname
      id
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

</page-query>
<style>
.odstep {
  margin-top: 16vh;
}
</style>
