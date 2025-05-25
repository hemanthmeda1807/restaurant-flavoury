// src/components/Menu.js
import React from 'react';
import salmonImage from '../assets/salmon.jpeg'; 
import paneerTikkaImage from '../assets/tikka.jpeg';
import WingsImage from '../assets/wings.jpeg';
import lavaImage from '../assets/lava.jpeg';
import pizzaImage from '../assets/pimarg.jpeg';
import pastaImage from '../assets/pasta.jpeg';
import tandooriImage from '../assets/tandoori.jpeg';
import biriyaniImage from '../assets/biriyani.jpeg';
import fichiImage from '../assets/f&c.jpeg';
import burgerImage from '../assets/burger.jpeg';
import fruitImage from '../assets/fruit.jpeg';
import tacoImage from '../assets/tacos.jpeg';
import capreseImage from '../assets/caprese.jpeg';
import mousseImage from '../assets/mousse.jpeg';
import ribsImage from '../assets/ribs.jpeg';
const specials = [
  {
    name: 'Grilled Salmon',
    price: '₹499',
    description: 'Perfectly grilled salmon served with a side of arugula and lemon.',
    image: salmonImage,
  },
  {
    name: 'Spicy Chicken Wings',
    price: '₹299',
    description: 'Crispy wings tossed in our signature hot sauce.',
    image: WingsImage,
  },
  {
    name: 'Paneer Tikka',
    price: '₹349',
    description: 'Marinated paneer cubes grilled to perfection with Indian spices.',
    image: paneerTikkaImage,
  },
  {
    name: 'Chocolate Lava Cake',
    price: '₹199',
    description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',
    image: lavaImage,
  },
  {
    name: 'Margarita Pizza',
    price: '₹399',
    description: 'Classic pizza topped with fresh mozzarella and basil.',
    image: pizzaImage,
  },
  {
    name: 'Pasta Primavera',
    price: '₹349',
    description: 'Pasta tossed with seasonal vegetables and olive oil.',
    image: pastaImage,
  },
  {
    name: 'Tandoori Chicken',
    price: '₹499',
    description: 'Chicken marinated in yogurt and spices, grilled to perfection.',
    image: tandooriImage,
  },
  {
    name: 'Fish and Chips',
    price: '₹399',
    description: 'Crispy battered fish served with fries and tartar sauce.',
    image: fichiImage,
  },
  {
    name: 'Vegetable Biryani',
    price: '₹299',
    description: 'Aromatic basmati rice cooked with mixed vegetables and spices.',
    image: biriyaniImage,

  },
  {
    name: 'Cheeseburger',
    price: '₹399',
    description: 'Juicy beef patty topped with cheese, lettuce, and tomato.',
    image: burgerImage,
  },
  {
    name: 'Fruit Tart',
    price: '₹199',
    description: 'A buttery tart filled with pastry cream and topped with fresh fruits.',
    image: fruitImage,
  },
  {
    name: 'Shrimp Tacos',
    price: '₹399',
    description: 'Soft tortillas filled with spicy shrimp and fresh salsa.',
    image: tacoImage,
  },
  {
    name: 'Caprese Salad',
    price: '₹249',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
    image: capreseImage,
  },
  {
    name: 'Chocolate Mousse',
    price: '₹199',
    description: 'Rich and creamy chocolate mousse topped with whipped cream.',
    image: mousseImage,
  },
  {
    name: 'BBQ Ribs',
    price: '₹599',
    description: 'Tender ribs glazed with BBQ sauce, served with coleslaw.',
    image: ribsImage,
  },
];

const Menu = () => {
  return (
    <section className="menu-section" id='menu'>
      <div data-aos="fade-up">
        <h2>Special Menu</h2>
      </div>
      <div className="menu-grid">
        {specials.map((item, index) => (
          <div data-aos="zoom-in" data-aos-delay="200" key={index} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <div className="menu-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
