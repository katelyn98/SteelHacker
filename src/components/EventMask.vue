<template>
    <div id="event-mask">
        <img id="event-img" :src="imgUrl" alt="">
        <span id="event-name">type</span>
        
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        imgUrl: String,
    },

}
</script>

<style>
#event-name {
    color: white;
    margin-left: -20px;
}

#event-img {
    width: 100%;
    height: 200px;
}

</style>
