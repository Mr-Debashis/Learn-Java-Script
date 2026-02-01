
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//Here we add loop to same task
//event.target means the exact element that was clicked.
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.id == 'red'){
            body.style.backgroundColor = event.target.id
        }if(event.target.id == 'white'){
            body.style.backgroundColor = event.target.id
        }if(event.target.id == 'green'){
            body.style.backgroundColor = event.target.id
        }if(event.target.id == 'pink'){
            body.style.backgroundColor = event.target.id
        }
    })
});