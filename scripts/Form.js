class Person{
    constructor(fullName,email){
        this.fullName = document.getElementById('fname').value;
        this.email = document.getElementById('email').value;
    }
}

//Selects each button for the forms, both donations button and subscriber button
let donateButton = document.getElementById('donButton');
let subscriberButton = document.getElementById('subButton');
let donMessage = document.getElementById('message-don');
let subMessage = document.getElementById('message-sub');



    // Event: Get full name and display a message
    function donate(){ 
        const personDonate = new Person();
        let fullName = document.getElementById('fname').value;
   

        for(let i = 0; i < fullName.length; i++){
            if(fullName.length !== i){
          
                donateButton.style.display = 'none';
                donMessage.innerHTML =  `Thank you ${fullName}, We'll be in touch.`;
        } 
        console.log(personDonate);
        console.log(placeHolderText);
        console.log(placeHolderText2);

        }
    };
 

    function subscribe(){ 
        const personSubscribe = new Person();
        let fullName = document.getElementById('fname').value;


        for(let i = 0; i < fullName.length; i++){
            if(fullName.length !== i){

                subscriberButton.style.display = 'none';
                subMessage.innerHTML =  `Thank you ${fullName}, We'll be in touch.`;
            }
        console.log(personSubscribe);
        }
    };

   
//Button Event
donateButton.addEventListener('click', donate);
subscriberButton.addEventListener('click', subscribe);


