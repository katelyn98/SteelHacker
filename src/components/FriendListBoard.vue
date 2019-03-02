<template>
    <div class="FriendsList">
        <div id="FriendTitle">My Friends</div>
        <div class="friend">
            <div id="wrapperpicture">
                <img id="friendavatar" alt="avatar" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52590328_2271189316266092_8307607845965135872_o.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=82df112fd869a4869bf5a1e792f16029&oe=5D140D0B">
                <img id="nationalityavatar" alt="nationality" src='../assets/bangladesh.png'>
                <div id="friendname">Zarrar Nashman</div>
                <button type="button" class="btn2 btn-outline-info">Profile</button>
            </div>
        </div>
        <div class="friend">
            <div id="wrapperpicture">
                <img id="friendavatar" alt="avatar" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46770497_2517192858290978_3757987205931335680_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=b999c27847aa174a2362d32a4e975fbd&oe=5D11E4DB">
                <img id="nationalityavatar" alt="nationality" src='../assets/czech-republic.png'>
                <div id="friendname">Nikol Tillova</div>
                <button type="button" class="btn3 btn-outline-info">Profile</button>
            </div>
        </div>
        <div class="friend">
            <div id="wrapperpicture">
                <img id="friendavatar" alt="avatar" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46765995_1893416530777413_7248781103354347520_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=df9c69b7a5855b3065eb634b29be0ff3&oe=5CE4F9C3">
                <img id="nationalityavatar" alt="nationality" src='../assets/egypt.png'>
                <div id="friendname">Jakleen Hana</div>
                <button type="button" class="btn4 btn-outline-info">Profile</button>
            </div>
        </div>
        <div id="myevents">Hosted Events</div>
        <div id="NoEvents">Katelyn is not currently hosting any upcoming events</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.btn2 {
    width: 80px;
    height: 35px;
    margin-left: 25px;
    margin-top: 25px;
    text-align: center;
    background-color: white;
    border-radius: 5%;
    border: none;
}

.btn3 {
    width: 80px;
    height: 35px;
    margin-left: 51px;
    margin-top: 25px;
    text-align: center;
    background-color:white;
    border-radius: 5%;
    border: none;
}

.btn4 {
    width: 80px;
    height: 35px;
    margin-left: 43px;
    margin-top: 25px;
    text-align: center;
    background-color:white;
    border-radius: 5%;
    border: none;
}


.FriendsList {
    flex-direction: column;
    margin-top: 10px;
    margin-left: 5px;
    width: 175px;
    height: 650px;
    text-align: center;
}

#wrapperpicture {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

#FriendTitle {
    font-family: 'Raleway';
    font-size: 18px;
    font-style: italic;
    width: 100px;
    margin-left: 85px;
}

#friendavatar {
    padding-top: 10px;
    margin-top: 5px;
    width: 75px;
    height: 75px;
    background-color: rgba(223, 248, 252, .5);;
    border-radius: 50%;
}

#nationalityavatar {
    padding-top: 10px;
    margin-left: -35px;
    align-self: top;
    width: 35px;
    height: 35px;
    background-color: transparent;
}

#friendname {
    padding-top: 10px;
    margin-left: 25px;
    margin-top: 20px;
}

#myevents {
    margin-top: 15px;
    font-family: 'Raleway';
    font-size: 18px;
    font-style: italic;
    width: 100px;
    margin-left: 85px;
}

#NoEvents {
    margin-top: 15px;
    font-family: 'Raleway';
    font-size: 15px;
    width: 250px;
    margin-left: 20px;
    text-align:center;
}

</style>
