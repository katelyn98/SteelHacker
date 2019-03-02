<template>
<div id="Profile">
    <div id="user-avatar">
        <img id="avatar" alt="avatar" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37646384_1044018319094149_3763837462489595904_o.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=526ba3c4f1a983a97b3ee103439087c8&oe=5D1C8B8E">
        <div id="name">{{profile.name}}</div>
        <button type="button" class="btn btn-outline-info">Message</button>

    </div>

    <div id="user-information">
        <div id="age">Age: {{profile.age}}</div>
        <div id="university">University: {{profile.university}}</div>
        <div id="languages">Languages: {{profile.language}}</div>
        <div id="nationality">Nationality: {{profile.nationality}}</div>
    </div>

    <div id="user-information2">
        <div id="description">
            Description: {{profile.description}}
            <!-- <input type="text" placeholder="Describe yourself.."> -->
        </div>
    </div>

</div>
</template>

<script>
export default {
    props: {
        profile: Object,

    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway');

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
#user-avatar {
    flex: 0 0 20%;
    background-color: rgba(223, 248, 252, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 275px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#avatar {
    margin-top: 15px;
    width: 175px;
    height: 185px;
    background-color: aliceblue;
    border-radius: 50%;
    /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
   
}

#user-information {
    flex: 0 0 25%;
    flex-direction: row;
    justify-content: flex-start;
    background-color:rgba(223, 248, 252, .5);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    
}

#user-information2 {
    flex: 0 0 50%;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(223, 248, 252, .5);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#university {
    padding-top: 35px;
    width: 275px;;
    height: 30px;
    padding-left: 25px;
}

#languages {
    padding-top: 70px;
    width: 275px;;
    height: 30px;
    padding-left: 25px;
        
    
}

#nationality {
    padding-top: 55px;
    width: 275px;;
    height: 30px;
    padding-left: 25px;
    
}

#age {
    padding-top: 25px;
    width: 275px;;
    height: 30px;
    padding-left: 25px;
}

 #Profile {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%; 
    font-family: 'Raleway';
    font-size: 14pt;
    margin-top: 45px;

 }

 #description {
    padding: 25px;
 }

 @media screen and (max-width: 600px) {
 #Profile {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
#user-information{
    width: 100%;
    display:flex;
    flex-direction: column;
}
#user-information2 {
    width: 100%;
    display: flex;
    flex-direction: column;
}
#languages {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
#age {
     width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
#university {
     width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
#nationality {
     width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
#description {
     width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
 }
</style>
