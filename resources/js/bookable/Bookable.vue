<template>
    <div>{{ this.bookable.id }}</div>
</template>
<script>
export default{
    data() {
      return{
          bookable: null
      }
    },
    created() {
        const request = axios
            .get(`/api/bookable/${this.$route.params.id}`)
            .then(response => {
                this.bookable = response.data;
            });
    }
}
</script>
