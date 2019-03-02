<template>
<form id="signup">
    <div class="question">
        <label for="">First Name</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">Last Name</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">Age</label>
        <input class="form-control" type="number">
    </div>

    <div class="question">
        <label for="">Nationality</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">language</label>
        <input class="form-control" type="text">
    </div>

    <div class="question">
        <label for="">Password</label>
        <input class="form-control" type="password">
    </div>
    
    <div class="question">
        <label for="">Password</label>
        <input class="form-control" type="password">
    </div>
</form>
</template>

<script>
export default {

}
</script>

<style>

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

</style>
