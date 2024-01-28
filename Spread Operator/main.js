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

const arr = [7, 8, 9]
console.log(arr)

// muon mo rong mang, vi du o day la mnag arr dung dau ...

const arrNew = [1, 2, ...arr]

// in ra khong co ... o arrNew thi se la mang
console.log(arrNew)

// in ra co ... no se khong la 1 mang
console.log(...arrNew)

const newMenu = ["Pho", ...restaurant.mainMenu]
console.log(newMenu)

const copyMenu = [...restaurant.mainMenu]
console.log(copyMenu)

const joinArr = [...restaurant.mainMenu, ...restaurant.startMenu]
console.log(joinArr)

const srt = "Doan"
const letter = [...srt, ' ', "D."]
console.log(letter)
console.log(...letter)

// khi dung ... de in ra doi tuong se loi
const newObject = { foundedIn: 2004, ...restaurant, founder: "VDoan" }
console.log(newObject)

// copy object
const copyRestaurant = { ...restaurant }
// thay doi gia tri trong doi tuong
console.log(copyRestaurant)
console.log(copyRestaurant.name)
copyRestaurant.name = "Vdoann"
console.log(copyRestaurant)
console.log(copyRestaurant.name)

