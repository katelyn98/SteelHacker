<template>
<div class="eventspage">
    <header-board></header-board>
    <navbar :events="events"></navbar>
</div>
</template>
<script>
import HeaderBoard from '../components/HeaderBoard'
import Navbar from '../components/Navbar';
export default {
    data(){
        return {
            events: [
            {title:"hiking together",type:"outdoor",peoplefrom:["canada","united-states-of-america","china"],tag:"hiking",skill:"sightly-skilled"},
            {title:"Art museums",type:"art",peoplefrom:["china","united-states-of-america"],tag:"museum",skill:"sightly-skilled"},
            {title:"Baseball Watching",type:"sports",peoplefrom:["china","japen",'united-states-of-america'],tag:"bascketball",skill:"hightly-skilled"},
            {title:"Fishing together",type:"outdoor", peoplefrom:["china","korea",'united-states-of-america'],tag:"fishing",skill:"hightly-skilled"},
            {title:"Kayaki together",type:"outdoor",peoplefrom:["korea",'united-states-of-america'], tag:"kayak",skill:"sightly-skilled"}],
        };
    },
    components: {
        Navbar, HeaderBoard
    }
}
</script>
<style>
.eventspage {
    /* background-image: url("https://wallpapertag.com/wallpaper/full/c/0/8/142445-new-blue-ombre-background-2560x1440.jpg"); */
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
