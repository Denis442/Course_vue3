<script>
import Card from "../components/UI/Card.vue"
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
                img: require.context('../assets/img/archer.png'),
                lvl: 4
            },
            {
                id: 2,
                title: 'Wizard',
                descr: 'Wizard Wizard Wizard Wizard',
                img: '../assets/img/wizard.png',
                lvl: 5
            },
            {
                id: 3,
                title: 'archer',
                descr: 'archer archer archer archer',
                img: '../assets/img/goblin.png',
                lvl: 4
            }
        ]
    }
}
    
}
</script>
<template>

    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
         
            {{item.descr}}
        </Card>
    </div>
    
</template>


<style lang="scss">

</style>