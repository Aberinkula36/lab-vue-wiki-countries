<template>
    <div class="container" v-if="selectedCountry">
        <!-- <h1>{{  $route.params.id  }}</h1> -->
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`" alt="">
        <h1>{{  selectedCountry.name.common  }}</h1>
        <table>
            <tr>
                <th>Capital: </th>
                <td>{{  selectedCountry.capital[0]  }}</td>
            </tr>
            <tr>
                <th>Area: </th>
                <td>{{  selectedCountry.area  }} km<sup>2</sup></td>
            </tr>
            <tr>
                <th>Borders: </th>
                <p v-for="border in selectedCountry.borders" :key="border"> <a v-bind:href="selectedCountry.name">{{  border  }}</a></p>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [],
            selectedCountry: null,
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
    table {
      border-collapse: collapse;
      width: 100%;
      border-bottom: 1px solid #dddddd;
    }
    
    td, th {
      border-bottom: 1px solid #dddddd;
      text-align: left;
      padding: 20px;
    }

    table > tr > p {
      text-align: left;
      margin-left: 20px;
    }
    </style>