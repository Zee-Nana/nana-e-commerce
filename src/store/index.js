import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[
      {
         id: 1,
         title: 'Car Engine',
         imageLink: require("@/assets/engine.jpg"),
         discription: "this is our products",
         price: '1.6 Million'
       },
        {
         id: 2,
         title: 'Fancy Car Carpet',
         imageLink: require("@/assets/car-carpet.jpg"),
         discription: "Material: Grid, Cotton, Size: 53cm x 57cm/ 20.9'' x 22.4'', Color: Black, Beige, Wine red, Brown, Purple, Package Include 1pc x Front row Cushion x back row",
         price: '30,000',
         additional: "Enhance your car interior with a luxury look and extereme comfort with this quality carpet cover and ssupport. It ensures absorbtion of moistures & himidity etc. Nana's Empire offers the best prices and nationwide delivery."
       },
          {
         id: 3,
         title: 'Car Airfreshner',
         imageLink: require("@/assets/freshner.jpg"),
         discription: "Automatic Spray machine, Includes a 250ml Sparkling Citrus Fragrance Refill pack, Eliminates odors, Gives long lasting fragrance, Brings a welcoming appeal in an instant, Easy to install and use, Used in homes, offices, etc",
         price: '7,000',
         additional:"Release the freshness of nature into your home, office etc by using the Airwick Freshmatic Max Automatic Spray Engine. It comes with a 250ml Sparkling Citrus Fragrance spray air freshener refill pack. Air Wick Freshmatic refill, eliminate odors to give a long lasting fragrance  and bring a welcoming touch in an instant. Also acts as an insect repellent"
       },
          {
         id: 4,
         title: 'Auto Mobile Car Jump Starter',
         imageLink: require("@/assets/starter.jpg"),
         discription: "Compact and Portable, Easy to use, inflates ordinary car tyre in 5 minutes, powered by ciggerate lighter / DC 12v, Ideal for inflating tyres, rubber floater, hovercraft etc, pump Guage Up To 260KPa",
         price: '45,000',
         additional: '1 x Multi-Function 12V Emergency Car Jump Starter 16800mAh High-current battery pack - Black / Red, 1 x Jumper Cable with Clamps, 1 x Switch Cable A, 1 x 4in1 mobile phone adaptor, 1 x Notebook Connector, 1 x Home Adaptor, 1 x Car Charger, 1 x User Manual'
       },
        {
         id: 5,
         title: 'Tyre Bump Inflator',
         imageLink: require("@/assets/inflator.jpg"),
        //  images:[
        //   {
        //     image1:require("@/assets/engine.jpg"),
        //     image2:require("@/assets/engine.jpg"),
        //     image3:require("@/assets/engine.jpg"),
        //   }
        // ],
        discription: "Compact and Portable, Easy to use, inflates ordinary car tyre in 5 minutes, powered by ciggerate lighter / DC 12v, Ideal for inflating tyres, rubber floater, hovercraft etc, pump Guage Up To 260KPa",
        price: '37,000',
        additional: 'The AUTOMATIC MOBILE CAR TYRE PUMP is the choice device that can save you in a dire situation of tyre flatness.It can inflate your tyre back to required level/pressure within seconds.It is fast, convenient and easy to operate. This product saves time, money, time  - It is also important to thin SAFETY always by having this product with you. If you have a car and drive to many places that could be termed out of town; this product is a must own for you'
       },
        {
         id: 6,
         title: 'Car Cover',
         imageLink: require("@/assets/cover.jpg"),
         discription: "Car Windshield Frost Ice Anti Snow Sun Dust Cover Mirror Protector Shade Shield ",
         price: '120,000',
         additional: "Aluminized film material, There are one reflective strip on each of the two sides, There are 2 hooks in front and rear, Lightweight and compact, easy to store and easy to use, Four seasons universal"

       },
        {
         id: 7,
         title: 'Car Tyre-rims ',
         imageLink: require("@/assets/reem.jpg"),
         discription: "this is our products",
         price: '30,000'
       },
        {
         id: 8,
         title: 'Front-Bumper',
         imageLink: require("@/assets/bumper.jpg"),
         discription: "this is our products",
         price: '45,000'
       },
        {
         id: 9,
         title: 'Car Tyre',
         imageLink: require("@/assets/tyre.jpg"),
         discription: "this is our products",
         price: '50,000'
         
       }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
