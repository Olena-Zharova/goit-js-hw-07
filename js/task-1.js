
const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

const categoriesItems = document.querySelectorAll('.item');


categoriesItems.forEach((item) => {

    
const titleElem = item.querySelector('h2');
const nameElem = item.querySelectorAll('ul li');

    

    console.log(`Category: ${titleElem.textContent}`);
    console.log(`Elements: ${nameElem.length}`);
});
 
