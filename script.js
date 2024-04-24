
let hero_url = 'https://www.themealdb.com/api/json/v1/1/random.php'

let list_url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const getAnotherMeal = document.querySelector('.hero__button')

getAnotherMeal.addEventListener('click', () => {
    location.reload()
})

// const hero_rotd = document.querySelector('.hero__rotd')
// const hero_rotdI = document.querySelector('.hero_rotdI')

// async function getMeals(){
//     try{
//         const response = await axios.get(list_url)
//         console.log(response.data)
    
  
//     }
//     catch(e){
//         console.log('error')
//         console.log(e)
//     }
   

// }

// getMeals()


// Function for the search item 

const search = document.querySelector('.nav__input')
const searchButton = document.querySelector('.nav__button')

search.addEventListener('input', () => {
   const value = search.value
//    console.log(value)
   searchMeals(value)

})
searchButton.addEventListener('click', () => {
    const value = search.value
    searchMeals(value)
})

async function searchMeals(value) {
    const search_div = document.querySelector('.search-display')
    try {
        console.log(value);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        console.log(response.data)
    
        search_div.innerHTML = ''
    
        let meals = response.data.meals
    
        if (meals) {
            meals.forEach((meal, index) => {
                console.log(meal);
                const mainDiv = createElementWithClass('div', 'main-div')
    
                const mealImage = createElementWithClass('img', 'meal-image')
                mealImage.setAttribute('src', meal.strMealThumb)
                mainDiv.appendChild(mealImage)

                const mealName = createElementWithClass('h2', 'meal-name')
                mealName.innerHTML = meal.strMeal;
                mainDiv.appendChild(mealName);

                // const mealIn
    

                search_div.appendChild(mainDiv)
            });
        } else {
            search_div.innerHTML = '<p>No meals found.</p>'
        }
    } catch(error) {
        console.error('Error fetching meals:', error)
        search_div.innerHTML = '<p>An error occurred while fetching meals.</p>';
    }
 }
 

function createElementWithClass(elementName, className) {
    const element = document.createElement(elementName)
    element.classList.add(className)

    return element
}

// getting the div to display 





// kim

const hero_rotd = document.querySelector('.hero__rotd');
const hero_rotdI = document.querySelector('.hero__rotdI');

async function getMeals(){
    try{
        const response = await axios.get(hero_url)
        const meal = response.data.meals[0];
        const mealImage = meal.strMealThumb;
        randomMealImage(mealImage);
    }
    catch(e){
        console.log('error')
        console.log(e)
    }
   
}

function randomMealImage(imageURL) {
    hero_rotd.style.backgroundImage = `url('${imageURL}')`;
}

getMeals()

//


const recipe_ingredients = document.querySelector('.hero__rotd');
const hero_rotdI = document.querySelector('.hero__rotdI');

async function getMeals(){
    try{
        const response = await axios.get(hero_url)
        const meal = response.data.meals[0];
        const mealImage = meal.strMealThumb;
        randomMealImage(mealImage);
    }
    catch(e){
        console.log('error')
        console.log(e)
    }
   
}

function randomMealImage(imageURL) {
    hero_rotd.style.backgroundImage = `url('${imageURL}')`;
}

getMeals()



