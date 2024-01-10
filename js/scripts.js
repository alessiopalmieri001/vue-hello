const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello World!',
            photo: 'https://unsplash.it/550/450?image=',        
        }
    },
    
}).mount('#app');