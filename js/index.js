// let isExistBook = true;
// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         if(isExistBook){
//             resolve("Kitob mavjud ekan")
//         }else{
//             reject("Kitob dokoni yopiq ekan")
//         }
//     },2000)
// })
// promise
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log(err)
//     })
//     .finally(function(){
//         console.log("Missiya bajarildi!")
//     })  

// async function fetchData(){
//     return 'Data fetched';
// }
// fetchData().then(data => console.log(data));

// let a = 5;
// try{
//     console.log( a)
// }catch (error){  
//     console.log(5, error)
// }



// fetch("https://cars-pagination.onrender.com/all-countries", {
//     method:"Get"
// })
//     .then(function(response){
//         if(response.status == 200){
//             return response.json()
//         }
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })


const countries = document.getElementById('countries');
const loading = document.getElementById('loading');
const card = document.querySelectorAll('.card');
const showBtn = document.querySelectorAll('#showBtn')

function creatCard(counter){
    return `
       <div class="card">
                <img src="${counter.flag}" alt="">
                <div class="text">
                    <h3>Name: ${counter.country}</h3>
                    <h4>Code: ${counter.code}</h4>
                    <h4>ID: ${counter.id}</h4>
                </div>
                <a id='showBtn' class='show' href="./pages/about.html">Show</a>
        </div>
    `
}
document.addEventListener('DOMContentLoaded', function(){
    fetch("https://cars-pagination.onrender.com/all-countries")
        .then(function(res){
            if(res.status < 300){
                return res.json()
            }
        })
        .then(function(data){
            // countries.style.display = 'block';
            data.length > 0 && data.forEach(counter => {
                const card = creatCard(counter);
                countries.innerHTML += card;
            })
        })
        .catch(err => {
            countries.style.display = 'block';
            console.log(err)
        })
        .finally(function(){
            loading.style.display = 'none'
        })
})

// showBtn.addEventListener()
