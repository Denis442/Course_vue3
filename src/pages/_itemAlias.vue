<script>
import items from '../seeders/items.js'
export default {

    data (){
        return{
            item: null
        }
    },
    created(){

        const alias = this.$route.params.aliasItem
        const item = items.find(el => el.alias === alias)

        this.item = item 
        console.log(item)
    }
}
</script>

<template>
<div class="wrapper-person">
    <div v-if="item">
        <img :src="item.img" :alt="item.descr">
        <h1 style="color:#fff;" class="title">{{item.title}}</h1>
        <p>{{item.descr}}</p>

        <div class="card-stats">
            <div v-for="(stat,index) in item.info" :key="index" class="one-third">
                <div class="stat-value">{{stat.value}}</div>
                <div class="stat">{{stat.title}}</div>
            </div>
        </div>
        <br/>
        <div>
            <router-link to="/" class="btn btnPrimary">back to home</router-link>
        </div>
    </div>
</div>
    
</template>
    
<style lang="scss">

.wrapper-person{
    width: 600px;
    text-align: center;
    margin: 0 auto;
    
    .card-stats{

        margin: 30px 0;
        border-radius: 14px;
    }
}


</style>