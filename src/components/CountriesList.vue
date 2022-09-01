<template>
    <div class="container">
        <h1>Countries List</h1>
        <div class="country" v-for="country in countriesList" :key="country">
            <!--<p>Capital: {{ country.capital[0] }}</p>
            <p>Area: {{ country.area }} km2</p>
            <p>Borders: </p>
            <ul>
                <li v-for="border in country.borders" :key="border">{{ border }}</li>
            </ul>-->
            <router-link :to="`/${country.alpha3Code}`">
                <div class="countries">
                    <p>{{ country.name.common }}</p>
                    <img :src="getFlagSrc(country)" />
                </div>
            </router-link>
            <br />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        countriesList: Array,
    },
    data() {
        return {};
    },
    methods: {
        getFlagSrc(country){
            return `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
        },
    },
};
</script>

<style>
    .countries {
        width: 400px;
        margin: 0px 0px 0px 230px;
        padding: 20px;
        border: 2px solid lightgray;
        border-radius: 10px;
        text-align: center;
    }
</style>