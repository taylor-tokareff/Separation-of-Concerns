const { Router } = require('express');
const Order = require('../models/Order');

// export default Router.......
module.exports = Router() // app.post(....)
  .post('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.insert(req.params.quantityOfItems);
      res.send(order);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .put('api/v1/orders', async (req, res) => {
    try {
      const order = await Order.update(req.params.quantityOfItems, req.params.id);
      res.send(order);
    } catch (err) {
      res.status(500).get(err);
    }
  })

  .get('api/v1/orders', async (req, res) => {
    try {
      const order = await Order.grab();
      res.send(order);
    } catch (err) {
      res.status(500).get(err);
    }
  })

  .get('api/v1/orders/:id', async (req, res) => {
    try {
      const order = await Order.grab(req.params.id);
      res.send(order);
    } catch (err) {
      res.status(500).get(err);
    }
  })

  .delete('api/v1/orders/:id', async (req, res) => {
    try {
      const order = await Order.obliterate(req.params.id);
      res.send(order);
    } catch (err) {
      res.status(500).get(err);
    }
  });




// class Dog {
//   name;
//   age;
//   weight;

//   constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }

//   static legs() {
//     return 4;
//   }

//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// // const spot = {
// //   name: 'spot',
// //   age: 5,
// //   weight: '20 lbs',
// // };
// const spot = new Dog('spot', 5, '20 lbs');
// spot.sayName();

// Dog.legs();
