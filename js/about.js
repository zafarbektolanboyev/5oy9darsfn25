const countries = document.getElementById('countries');
const loading = document.getElementById('loading');
const card = document.querySelectorAll('.card');
const showBtn = document.querySelectorAll('#showBtn');
const container = document.querySelector('.container')

function creatCard(counter){
    return `
       <div class="block">
            <img src="" alt="" width="500" height="500" style="border: 1px solid white;">
            <div class="content">
                <h2>Name:${counter.country}</h2>
                <h3>Code:${counter.code}</h3>
                <h3>Id:${counter.id}</h3>
            </div>
        </div>
    `
}
document.addEventListener('DOMContentLoaded', function(){
    fetch("https://cars-pagination.onrender.com/countries")
        .then(function(res){
            if(res.status < 300){
                return res.json()
            }
        })
        .then(function(data){
            // countries.style.display = 'block';
            data.length > 0 && data.forEach(counter => {
                const card = creatCard(counter);
                container.innerHTML += card;
            })
        })
        .catch(err => {
            container.style.display = 'block';
            console.log(err)
        })
        .finally(function(){
            loading.style.display = 'none'
        })
})
