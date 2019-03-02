<template>
    <div id="sign-up-view">
        <sign-up></sign-up>
    </div>
</template>
<script>
import SignUp from '../components/SignUp';
export default {
    components: {
        SignUp
    }
}
</script>
<style>
#sign-up-view {
    display: flex;
    margin-top: 10em;
    justify-content: center;
    align-items: center;
}
</style>