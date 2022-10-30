<script>

import Card from "../components/UI/Card.vue"

import Wizard from "../assets/img/wizard.png"
import Archer from "../assets/img/archer.png"
import Goblin from "../assets/img/goblin.png"

export default {
components:{
    Card
},

data(){
    return {
        items: [
            {
                id: 1,
                title: 'Archer',
                descr: 'archer archer archer archer',
                img: Archer,
                lvl: 4
            },
            {
                id: 2,
                title: 'Wizard',
                descr: 'Wizard Wizard Wizard Wizard',
                img: Wizard,
                lvl: 5
            },
            {
                id: 3,
                title: 'Goblin',
                descr: 'archer archer archer archer',
                img: Goblin,
                lvl: 4
            }
        ],
        image: Wizard
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