'use trict';

const restaurant = {
    name: 'Classio Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Ttaly',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Paste', 'Risotto'],

    order: function (startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]]
    }
};

const arr = [2, 3, 4]
console.log(arr)

const a = arr[0]
const b = arr[1]
const c = arr[2]
console.log(a, b, c)

const [x, y, z] = arr
console.log(x, y, z)

// muon lay phan tu nao o dang sau thi chi can , , 
const [t1, t2] = restaurant.categories
const [t3, , t4] = restaurant.categories
console.log(t1, t2)
console.log(t3, t4)

let [main, secondary] = restaurant.categories
console.log(main, secondary)

if (typeof main !== 'undefined' && typeof secondary !== 'undefined') {
    [main, secondary] = [secondary, main]
}
console.log(main, secondary)

// console.log(restaurant.order(2, 0))

const [startOder, mainOder] = restaurant.order(2, 0)
console.log(startOder, mainOder)

const nested = [2, 4, [5, 6]]
const [i, , [j, k]] = nested
console.log(i, j, k)

// khong gan = 1 thi cai gi khong co phan tu duoc gan vao, se la undefined, con neu duoc gan no se la gia tri duoc gan
const [q = 1, r = 1, t = 1] = [8, 9]
console.log(q, r, t) // 8, 9, 1