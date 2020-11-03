<template>
  <Layout>
    <navBar />

    <section class="text-black">
      <div
        class="container mx-auto flex px-5 py-4 items-center justify-center flex-col"
      >

        <div class="prose" v-html="$page.post.content.replace('SOCIAL_EMAIL', $static.metadata.socialEmail)"></div>
        
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: staticPage(id: $id) {
        id
        title
        content
  }
}
</page-query>
<static-query>
query {
  metadata {
    socialEmail
  }
}
</static-query>
<script>
import NavBar from "~/components/Navbar.vue";
export default {
  components: {
    NavBar
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },

};
</script>
