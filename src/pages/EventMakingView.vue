<template>
<div id="event-making-view">
    <header-board></header-board>
    <event-making-board id="event-making-board"></event-making-board>
</div>
</template>

<script>
import EventMakingBoard from '../components/EventMakingBoard';
import HeaderBoard from '../components/HeaderBoard';
export default {
    components: {
        EventMakingBoard, HeaderBoard,
    }
}
</script>

<style>
#event-making-view{
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
}

</style>
