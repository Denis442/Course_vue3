<script>
import Card from "../components/UI/Card.vue"
import items from '../seeders/items.js'

export default {
components:{
    Card
},

data(){
    return {
        items: items
    }
}  
}
</script>

<template>

    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img" >
            {{item.descr}}
        </Card>
    </div>
    
</template>


<style lang="scss">

</style>