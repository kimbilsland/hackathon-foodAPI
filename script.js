
let hero_url = 'https://www.themealdb.com/api/json/v1/1/random.php'

let list_url = 'https://www.themealdb.com/api/json/v1/1/categories.php'



const hero_rotd = document.querySelector('.hero__rotd')
const hero_rotdI = document.querySelector('.hero_rotdI')
async function getMeals(){

    try{
        const response = await axios.get(list_url)
        console.log(response.data)
    
  
    }
    catch(e){
        console.log('error')
        console.log(e)
    }
   

}

getMeals()


//Function for the search item 

// const search = document.querySelector('.nav__input')

// search.addEventListener('input', () => {
//    const value = search.value
// //    console.log(value)

//    searchMeals(value)

// })

// async function searchMeals(value) {
//     console.log(value)
//     const response = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${value}`)

//     console.log(response.data)
    
// }

