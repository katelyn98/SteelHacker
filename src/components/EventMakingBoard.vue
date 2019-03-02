<template>
<form id="event-baord">
    <event-mask :imgUrl="categories[category].imgUrl"></event-mask>
    <div class="question">
        <label for="">Title</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">Date</label>
        <input class="form-control" type="date">
    </div>

    <div class="question">
        <label for="">Age</label>
        <input class="form-control" type="number">
    </div>

    <div class="question">
        <label for="">Category</label>
        <select class="form-control" @click="handleCategory">
            <option v-for="category in Object.keys(categories)" :key="category" :value="category">{{category}}</option>
        </select>
    </div>

    <div class="question">
        <label for="">RSVP Limit</label>
        <input class="form-control" type="number">
    </div>

    <div class="question">
        <label for="">location</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">Phone</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">level</label>
        <select for="" class="custom-control form-control">
            <option value="1">Novice</option>
            <option value="2">Medium</option>
            <option value="3">Expert</option>
        </select>
    </div>

</form>
</template>

<script>
import EventMask from './EventMask';
export default {
    data() {
        return {
            categories: {
                surfing: {imgUrl: "https://image.flaticon.com/icons/svg/1587/1587111.svg"},
                dancing: {imgUrl: "https://image.flaticon.com/icons/svg/1533/1533834.svg"},
                bowling: {imgUrl: "https://image.flaticon.com/icons/svg/1587/1587078.svg"},
                fishing: {imgUrl: "https://image.flaticon.com/icons/svg/1028/1028357.svg"},
                soccer: {imgUrl: "https://image.flaticon.com/icons/svg/1028/1028353.svg"},
                yoga: {imgUrl: "https://image.flaticon.com/icons/svg/1028/1028338.svg"},
                musical_theatra: {imgUrl: "https://image.flaticon.com/icons/svg/1587/1587114.svg"},
                roller_blading: {imgUrl: "https://image.flaticon.com/icons/svg/1028/1028371.svg"},
                camping: {imgUrl: "https://image.flaticon.com/icons/svg/1587/1587077.svg"},
                hiking: {imgUrl: "https://image.flaticon.com/icons/svg/1043/1043927.svg"},
                puzzle: {imgUrl: "https://image.flaticon.com/icons/svg/1028/1028343.svg"}
            },
            category: "hiking",
        }
    },
    methods: {
        handleCategory(e) {
            this.category=e.target.value;
        }
    },
    components: {
        EventMask,
    }
}
</script>

<style>
#event-baord {
    width: 70%;
    box-shadow: 0 0 5px grey;
    border-radius: 10px;
    padding-bottom: 20px;
    box-shadow: 0 0 10px grey;
}

.question {
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px 50px;
}

.question label {
    flex: 0 0 40%;
}

.question input{
    flex: 0 0 50%;
}

.question select {
    flex: 0 0 50%;
}
</style>
