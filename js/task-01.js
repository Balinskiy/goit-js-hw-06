const categoriesList = document.querySelectorAll('.item');
const arr = [...categoriesList];
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
    const categoryTitle = item.querySelector('h2');
    const categoryElement = item.querySelectorAll('li');

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElement.length}`);
} )
