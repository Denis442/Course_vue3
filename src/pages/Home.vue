<script>
import Card from "@/components/UI/Card.vue"
import items from '@/seeders/items.js'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
components:{
    Card,
    Carousel,
    Slide,
    Navigation
},

data(){
    return {
        items: items,
        settings: {
            itemsToShow: 2,
            wrapAround: true,
            snapAlign: 'center',
        },
        breakpoints: {
            300: {
                itemsToShow: 1,
            },
            900: {
                itemsToShow: 2,
            }
        }
    }
}  
}
</script>

<template>
        <carousel :settings="settings" :breakpoints="breakpoints" >
            <slide 
                class="wrapper" 
                v-for="item in items" 
                :key="item.id"
            >
                <Card 
                    :name="`${item.lvl} lvl`" 
                    :title="item.title" 
                    :imgUrl="item.img" 
                    :link="`/${item.alias}`" 
                >
                    <template v-slot:body>{{item.descr}}</template>
                    <template v-slot:footer>
                        <div class="card-stats isBottom">
                            <div 
                                v-for="(stat,index) in item.info" 
                                :key="index" 
                                class="one-third"
                            >
                                <div class="stat-value">{{stat.value}}</div>
                                <div class="stat">{{stat.title}}</div>
                            </div>
                        </div>
                    </template>
                </Card>
            </slide>
            <template #addons>
                <navigation class="nav" />
            </template>
      </carousel>
   
</template>

<style lang="scss">
.nav{
    margin: 0 -15px;
    background-color: rgba(195, 107, 41,0.4);
    border-radius: 50%;
}
</style>