<template>
    <div id="app">

        <CalendarWeek />
        <CalendarEntry />


    </div>
</template>

<script>

import CalendarWeek from './components/CalendarWeek' 
import CalendarEntry from './components/CalendarEntry' 

export default {
    name : 'App' , 
    components:{
        CalendarWeek,
        CalendarEntry
    }
}
</script>

<style>

    html,body{
        height: 100%;
    }
 
</style>

<style scoped>
    #app{
        /* css for app  */
        height: inherit;
        background: #68b37a;
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content: center;
    }
</style>

