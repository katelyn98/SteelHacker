<template>
<div id="login-page">
    <login-board></login-board>
</div>
</template>

<script>
import LoginBoard from '../components/LoginBoard';
export default {
    components: {
        LoginBoard
    }

}
</script>

<style>
#login-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
