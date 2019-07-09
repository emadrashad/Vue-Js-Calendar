import {seedData} from './seed.js' ; 

export const store = {
    state : {
        seedData 
    },
    getActiveDay(){
        return this.state.seedData.find((day) => day.active) ; 
    },
    setActiveDay(dayId){
        
        // using mapping from javascript 
        this.state.seedData.map((dayObject) => {
            dayObject.id == dayId ? dayObject.active = true : dayObject.active = false ; 
        });
    },
    submitEvent(eventDetails){
        const activeDay = this.getActiveDay(); 
        activeDay.events.push({'details' : eventDetails , 'edit' : false}) ; 
    },
    resetEditForAll(){
        this.state.seedData.map((dayObject) => {
            dayObject.events.map((event) => {
                event.edit = false ; 
            })
        });
    },
    editEvent(dayId,eventDetails){
        const dayObject = this.state.seedData.find((day) => day.id === dayId); 
        const eventObject = dayObject.events.find(
            (event) => eventDetails === event.details 
        );

        eventObject.edit = true ; 
    },
    updateEvent(dayId,eventDetails,newInputEntry){

        const dayObject = this.state.seedData.find((day) => day.id === dayId); 
        const eventObject = dayObject.events.find(
            (event) => eventDetails === event.details 
        );

        eventObject.details = newInputEntry ; 
        eventObject.edit = false; 
    },
    deleteEvent(dayId,eventDetails){
        const dayObject = this.state.seedData.find((day) => day.id === dayId); 
        const eventIndexToRemove = dayObject.events.findIndex(
            event => event.details === eventDetails
            );
            dayObject.events.splice(eventIndexToRemove, 1);     
    }
}

