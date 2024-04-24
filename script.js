
let hero_url = 'https://www.themealdb.com/api/json/v1/1/random.php'

let list_url = 'https://www.themealdb.com/api/json/v1/1/categories.php'


const hero_rotd = document.querySelector('.hero__rotd')

async function getMeals(){

    try{
        const response = await axios.get(hero_url)
        // console.log(response.data.meals)
    
        hero_rotd.style.backgroundimage = response.data.meals.strMealThumb
    }
    catch(e){
        console.log('error')
        console.log(e)
    }
   

}

getMeals()