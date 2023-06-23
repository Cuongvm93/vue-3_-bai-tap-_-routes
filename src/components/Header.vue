<template>
    <h1>{{ title }}</h1>
    <slot></slot>
    <div class="headBox" :class= "color"></div>
    <router-link to="/home" >Home</router-link> |
    <router-link to="/about"  >About</router-link> |
    <router-link to="/contact"  >Contact</router-link> |
    <router-link to="/user" >User</router-link>
</template>
<script>
export default{
    name: "Header",
    props:{
        color: String,
        title: String
    },
}
</script>
<style scoped>
.headBox{
    width: 100%;
    height: 10vh;

}
h1{
    text-align: center
}
.green{
    background-color: green
}
.red{
    background-color: red;
}
.gray{
    background-color: gray;
}
.yellow{
    background-color: yellow
}
a{
    color: black;
    text-decoration: underline
}
a:hover{
    background-color: white
}
a.router-link-exact-active{
    color: green
}

</style>