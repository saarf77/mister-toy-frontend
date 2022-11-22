import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import { httpService } from './http-service.js'

const KEY = 'toys_db'
const TOY_URL='toy'
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query(filterBy) {
  // return storageService.query(KEY)
  console.log(filterBy)
  return httpService.get(TOY_URL, filterBy )
}

function getById(toyId) {
  console.log(toyId)
  return httpService.get(TOY_URL + '/' + toyId)
}
// function getById(toyId) {
// return  storageService.get(KEY, toyId)
//   .then(toy => {
//     toy.reviews = ['Its a great toy']
//    return storageService.put(KEY, toy)
//   })
// }

function remove(toyId) {
  return httpService.delete(TOY_URL + '/' + toyId)
}

function save(toy) {
  if (toy._id) return httpService.put(TOY_URL + `/${toy._id}`, toy)
  return httpService.post(TOY_URL, toy)
}

function getEmptyToy() {
  return {
    name: '',
    price: 0,
    createdAt: Date.now(),
    inStock: true,
    labels: ['Doll'],
    reviews:[]
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      { _id: utilService.makeId(), name: 'Talking Doll', price: 30, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true, },
      { _id: utilService.makeId(), name: 'Animal Doll', price: 30, labels: ["Art", "Battery Powered", "Outdoor"], createdAt: 1631031801011, inStock: true, },
      { _id: utilService.makeId(), name: 'Popy Doll', price: 30, labels: ["Baby", "Box game", "Baby"], createdAt: 1631031801011, inStock: true, },

    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}



