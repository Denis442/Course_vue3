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
            <slot></slot>
        </span>
    </div>
    
</template>
    
<style lang="scss">
</style>