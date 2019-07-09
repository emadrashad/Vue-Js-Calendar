<template>
    <div id="calendar-entry">
            <!-- markup calendar entry  -->
        <div class="calendar-entry-note">
            <input type="text" placeholder="New Event" v-model="inputEntry"/>
           
            <p class="calendar-entry-day">
                Day of event: <span class="bold daytitle">{{ titleOfActiveDay }}</span>
            </p>
            <a class="button is-primary is-small is-outlined" 
                    @click="submitEvent(inputEntry)">
                    Submit
            </a>
        </div>
         <p style="color: red; font-size: 13px" v-if="error">
                You must type something first!
        </p>
    </div>
</template>

<script>

import {store} from '../store.js' ; 

export default {
    name: 'CalendarEntry', 
    computed:{
        titleOfActiveDay(){
                return store.getActiveDay().fullTitle
        }
    },
    data(){
        return {
            inputEntry:'',
            error:false
        }
    },
    methods:{
        submitEvent(eventDetails){
            if(eventDetails == '') return this.error = true ; 


            store.submitEvent(eventDetails);
            this.inputEntry = '';
            this.error = false ; 
        }
    }  
   
}
</script>

<style scoped>

    #calendar-entry{
        /* css for calendar entry  */
        background-color: whitesmoke ; 
        padding: 20px; 
        margin-bottom: 200px;  
    }
    .daytitle{
        color: blue ; 
        font-size: 15px; 
    }

</style>

