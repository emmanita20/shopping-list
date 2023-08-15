const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke =() =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function (){
        if (this.readyState === 4){
            if(this.status === 200){
                jokeEl.innerHTML = JSON.parse(this.responseText).value;

            } else {
                // console.log(`Error ${xhr.status}`);
                jokeEl.innerHTML = 'Something Went Wrong (Not funny)';

            }
        }
    }

    xhr.send();
}




jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)