<script>
import {links} from "../config"
export default{

data(){
    return {
        links:links
    }
}

    // props: [links]
}
</script>

<template>
  
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <router-link class="navbar-logo" to="/">Template</router-link >
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link">
                        <router-link class="navbar-link" :to="link.url">{{link.title}}</router-link>
                    </li>
                    
                </ul> 
            </div>
          
        </div>
    </header>
</template>

<style lang="scss">


</style>