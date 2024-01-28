'use trict';

const restaurant = {
    name: 'Classio Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Ttaly',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Paste', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24
        },
    },

    order: function (startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function (obj) {
        console.log(obj)
    }
};

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

// co the dat ten bien khac ten trong object
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags)

// neu khong co = [] thi menu se la undefined
const { menu = [], startMenu: started = [] } = restaurant
console.log(menu, started)

let a = 111
let b = 999
console.log(a, b)

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj)
console.log(a, b)

const { fri: { open, close } } = openingHours
console.log(open, close)

restaurant.orderDelivery(openingHours.fri)