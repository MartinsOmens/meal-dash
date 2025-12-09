//Banner
import Banner_1 from "../assets/banner.jpg";
import Banner_2 from "../assets/banner-2.jpg";
import Banner_3 from "../assets/banner-3.jpg";

//Food
import Food_1 from "../assets/food-1.jpg";
import Food_2 from "../assets/food-2.jpg";
import Food_3 from "../assets/food-3.jpg";
import Food_4 from "../assets/food-4.jpg";

//Cat
import Cat_1 from "../assets/cat_img_1.jpg";
import Cat_2 from "../assets/cat_img_2.jpg";
import Cat_3 from "../assets/cat_img_3.jpg";
import Cat_4 from "../assets/cat_img_4.jpg";
import Cat_5 from "../assets/cat_img_5.jpg";

//Cusine
import Cus_Asian from "../assets/cus_asian.jpg";
import Cus_American from "../assets/cus_american.jpg";
import Cus_Chinese from "../assets/cus_chinese.jpg";
import Cus_Eastern from "../assets/cus_eastern.jpg";
import Cus_French from "../assets/cus_french.jpg";
import Cus_Italian from "../assets/cus_italian.jpg";
import Cus_Japanese from "../assets/cus_japanese.jpg";
import Cus_Mexican from "../assets/cus_mexican.jpg";

//Dish
import Dish_1 from "../assets/dish_img_1.jpg";
import Dish_2 from "../assets/dish_img_2.jpg";
import Dish_3 from "../assets/dish_img_3.jpg";
import Dish_4 from "../assets/dish_img_4.jpg";
import Dish_5 from "../assets/dish_img_5.jpg";
import Dish_6 from "../assets/dish_img_6.jpg";
import Dish_7 from "../assets/dish_img_7.jpg";
import Dish_8 from "../assets/dish_img_8.jpg";
import Dish_9 from "../assets/dish_img_9.jpg";

import Logo from "../assets/logo.png";

import User from "../assets/User.png";

import Play_Store from "../assets/playStore.png";
import Apple_Store from "../assets/appStore.png";

export const assets = {
  Banner_1,
  Banner_2,
  Banner_3,

  //Food
  Food_1,
  Food_2,
  Food_3,
  Food_4,
  Logo,
  User,

  //Cusine
  Cus_American,
  Cus_Asian,
  Cus_Chinese,
  Cus_Eastern,
  Cus_French,
  Cus_Italian,
  Cus_Japanese,
  Cus_Mexican,

  //Dish
  Dish_1,
  Dish_2,
  Dish_3,
  Dish_4,
  Dish_5,
  Dish_6,
  Dish_7,
  Dish_8,
  Dish_9,

  Play_Store,
  Apple_Store,
};

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: Cat_1,
  },
  {
    menu_name: "Rolls",
    menu_image: Cat_2,
  },
  {
    menu_name: "Ice Cream",
    menu_image: Cat_3,
  },
  {
    menu_name: "Sandwich",
    menu_image: Cat_4,
  },

  {
    menu_name: "Cake",
    menu_image: Cat_5,
  },
  {
    menu_name: "Pure Veg",
    menu_image: Dish_1,
  },
  {
    menu_name: "Pasta",
    menu_image: Dish_2,
  },
  {
    menu_name: "Noddles",
    menu_image: Dish_3,
  },
];

export const food_list = [
  //Salad
  {
    id: "1",
    name: "Greek salad",
    image: Dish_1,
    price: 12,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "2",
    name: "Veg salad",
    image: Dish_2,
    price: 10,
    rating: 3.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "3",
    name: "Clover Salad",
    image: Dish_3,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },

  {
    id: "4",
    name: "Chicken Salad",
    image: Dish_4,
    price: 10,
    rating: 3.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },

  //Rolls
  {
    id: "6",
    name: "Lassanga Rolls",
    image: Cat_1,
    price: 10,
    rating: 5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "7",
    name: "Peri peri Rolls",
    image: Cat_2,
    price: 10,
    rating: 1.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },

  {
    id: "8",
    name: "Chicken Rolls",
    image: Cat_3,
    price: 10,
    rating: 2.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "9",
    name: "Veg Rolls",
    image: Cat_4,
    price: 10,
    rating: 2.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },

  //Ice Cream
  {
    id: "9a",
    name: "Ripple Ice Cream",
    image: Dish_5,
    price: 12,
    rating: 3.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Ice Cream",
  },
  {
    id: "10",
    name: "Fruit Ice Cream",
    image: Dish_6,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Ice Cream",
  },
  {
    id: "11",
    name: "Jar Ice Cream",
    image: Dish_7,
    price: 10,
    rating: 5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Ice Cream",
  },

  {
    id: "12",
    name: "Vanilla Ice Cream",
    image: Dish_8,
    price: 10,
    rating: 3.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Ice Cream",
  },

  //Sandwhich
  {
    id: "13",
    name: "Chicken Sandwich",
    image: Cus_American,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "14",
    name: "Vegan Sandwich",
    image: Cus_Asian,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "15",
    name: "Grilled Sandwich",
    image: Cus_Chinese,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "16",
    name: "Bread Sandwich",
    image: Cus_Eastern,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },

  //Cake
  {
    id: "17",
    name: "Pure Cake",
    image: Cus_French,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "18",
    name: "Vegan Cake",
    image: Cus_Italian,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "19",
    name: "Butterscotch Cake",
    image: Cus_Japanese,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "20",
    name: "Sliced Cake",
    image: Cus_Mexican,
    price: 10,
    rating: 4.5,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
];
