const foodContainer = document.querySelector('#foodContainer');

const foods = [{
    'name': 'lasagna',
    'imageURL': 'https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg',
},

{
    'name': 'pizza',
    'imageURL': 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
},
];

foods.map((food) => {
    foodContainer.innerHTML += `<div class="foodItem" id="${food.name}">
    <a href="recipes/${food.name}.html"><img src="${food.imageURL}"></a>
    <p class="foodTitle">${food.name}</p></div>`;
});