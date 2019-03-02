<template>
<div class="row">
    <div class="column">
        <div class="activitycard">
            <img id="activityimage" class="img-responsive" src="https://image.flaticon.com/icons/svg/1028/1028346.svg" alt="hikingactivity" style="width:100%">
            <div class="activity">
                <!-- <div id="activityname"> {{activities.activityname}}</div> -->
                <h2 id="Title"> Hiking </h2>
                <div class="progress">
                    <div class="progress-bar progress-bar-info active" role="progressbar"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
                    Slightly skilled
                    <!-- Insert conditinoals where if someone choose I am skilled, the bar will read I am skilled and act like it is 75% -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="column">
        <div class="activitycard">
            <img id="activityimage" class="img-responsive" src="https://image.flaticon.com/icons/svg/1043/1043927.svg" alt="campingactivity" style="width:100%">
            <div class="container">
                <h2 id="Title">Tent Camping</h2>
                <div class="progress">
                    <div class="progress-bar progress-bar-info active" role="progressbar"
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">
                    Highly skilled
                    <!-- Insert conditinoals where if someone choose I am skilled, the bar will read I am skilled and act like it is 75% -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="column">
        <div class="activitycard">
            <img id="activityimage" class="img-responsive" src="https://image.flaticon.com/icons/svg/1587/1587077.svg">
            <div class="container">
                <h2 id="Title">Board Games</h2>
                <div class="progress">
                    <div class="progress-bar progress-bar-info active" role="progressbar"
                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
                    Novice
                    <!-- Insert conditinoals where if someone choose I am skilled, the bar will read I am skilled and act like it is 75% -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        activities: Object,

    }
}
</script>

<style>

#userActivities {
        flex: 0 0 80%;
        display: flex;
  
        background-color: rgba(192, 234, 248,.5);
    }

    /* Three columns side by side */
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 25px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
    align-items: center;
  }

}

/* Add some shadows to create a card effect */
.activitycard {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 275px;
  height: 350px;
  transform: translateY(0);
  transition: all 0.5s ease;
}

#activityimage {
  padding-top: 25px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: px;
  width: 260px;
  height: 260px;;
}

.activitycard:hover {
  transform: translateY(-20px);
  box-shadow: 0 16px 16px 0 rgba(80, 166, 236, 0.623);
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

#Title {
  padding-left: 20px;
  text-align: center;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.definition {
  color: grey;
}

.progress {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;

}


</style>
