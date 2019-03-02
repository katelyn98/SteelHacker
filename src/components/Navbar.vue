<template>
    <div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-outdoor" role="tab" aria-controls="v-pills-outdoor" aria-selected="false">Outdoors</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-sports" role="tab" aria-controls="v-pills-sports" aria-selected="false">Sports/Fitness</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-art" role="tab" aria-controls="v-pills-art" aria-selected="false">Arts/Crafts</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-game" role="tab" aria-controls="v-pills-game" aria-selected="false">Game</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-tourism" role="tab" aria-controls="v-pills-tourism" aria-selected="false">Tourism</a>
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">

      <div class="tab-pane fade" id="v-pills-home" role="tabpanel" >home</div>
      <div class="tab-pane fade" id="v-pills-outdoor" role="tabpanel" >
        <item-board v-for="event in events" v-show="event.type==='outdoor'" :key="event.title" :event="event"></item-board>
      </div>
      <div class="tab-pane fade" id="v-pills-sports" role="tabpanel" >sports
        <item-board v-for="event in events" v-show="event.type==='sports'" :key="event.title" :event="event"></item-board>
      </div>
      <div class="tab-pane fade" id="v-pills-art" role="tabpanel" >art
        <item-board v-for="event in events" v-show="event.type==='art'" :key="event.title" :event="event"></item-board>
      </div>
      <div class="tab-pane fade" id="v-pills-game" role="tabpanel" >game
        <item-board v-for="event in events" v-show="event.type==='game'" :key="event.title" :event="event"></item-board>
      </div>
      <div class="tab-pane fade" id="v-pills-tourism" role="tabpanel" >tourism
        <item-board v-for="event in events" v-show="event.type==='tourism'" :key="event.title" :event="event"></item-board>
      </div>

      
    </div>
  </div>
</div>
</template>

<script>
import ItemBoard from '../components/ItemBoard';
export default {
components: {
      ItemBoard,
    },
    props: {
      events: Array,
    }
}
</script>

<style>

</style>
