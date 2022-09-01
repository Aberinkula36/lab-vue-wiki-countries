<template>
    <div class="container" v-if="selectedCountry">
        <h1>{{  $route.params.id  }}</h1>
        <p>{{  selectedCountry.name.common  }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [],
            selectedCountry: null
        }
    },
    async created() {
        fetch('./public/countries.json')
            .then(res => res.json())
            .then(data => this.countries = data)
    },
    watch: {
        '$route.params.id'() {
            this.selectedCountry = this.countries.find(country => country.alpha3Code === this.$route.params.id)
        },
    },
};
</script>

<style>
</style>