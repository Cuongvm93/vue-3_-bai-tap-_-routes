<template>
    <Header title="AppLayoutAbout" color="red"  >
    </Header>
   <h1>This is about page</h1>
    </template>
    <script>
    import Header from '../components/Header.vue';
    export default {
        components:{
            Header
        },
        computed:{
            router(){
                return this.$route
            }
        },

    }
    </script>
    <style scope>
    </style>