<script>
export default {
    props:{
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String
        },
        link: {
            type:String
        }
    } 
}
</script>

<template>
    <div class="card">
        <div v-if="imgUrl" class="card-img__wrapper">
            <img class="card-img" :src="imgUrl" :alt="title">
        </div>
        <span class="card-name">{{name}} </span>
        <span class="card-title">{{title}} </span>
        <span class="card-body">
            <slot name="body"></slot>
            <router-link 
                :to="link" 
                class="link" 
                style=" position: absolute; top:70%; left:32%; display:block; margin-top: 16px; padding: 10px;"
            >See more</router-link>
            <slot name="footer"></slot>
        </span>
    </div>
</template>
    
<style lang="scss">

</style>