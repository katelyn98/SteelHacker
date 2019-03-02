<template>
<div id="profile-page">
    <header-board></header-board>
    <div id="profile-board">
        <profile-board :profile="profile"></profile-board>
    </div>
    <div id="wrapper">
        <div id="friend-list-board">
            <friend-list-board :friend="friend"></friend-list-board>
        </div>
        <div id="activity-board">
            <activity-board :activities="activity"></activity-board>
        </div>
    </div>

</div>

</template>

<script scoped>
import ProfileBoard from '../components/ProfileBoard';
import ActivityBoard from '../components/ActivityBoard';
import FriendListBoard from '../components/FriendListBoard';
import HeaderBoard from '../components/HeaderBoard';

export default {
    data() {
        return {profile: {name: "Katie Morrison", language: "English. Spanish, Bengali (Very Little)", nationality: 'United States', age: 20, university: 'University of Pittsburgh', description: "I am a computer science student passionate about sustainability and diversity. My favorite place that I visted is Costa Rica. I really enjoy going on adventurous hikes and being outdoors. I enjoy playing card games and ping pong in my free time."}}
    },
    components: {
        ProfileBoard, ActivityBoard, FriendListBoard, HeaderBoard,
    }

}
</script>

<style>

template {
    height: 100%;
    margin: 0;
}
.profile- {
    /* background-image: url("https://wallpapertag.com/wallpaper/full/c/0/8/142445-new-blue-ombre-background-2560x1440.jpg"); */
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
#profile-board {
    margin-top: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#wrapper {
    display: flex;
    margin-top:30px;
    flex-direction: row;
    justify-content: flex-start;
}

#activity-board {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    border-color: aliceblue;
    border-width: 8px;
    height: 100%;
}

#friend-list-board {
    flex: 0 0 20%;
    height: 100%;
    background-color: aliceblue;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: 15px;
}

#header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
}


</style>
