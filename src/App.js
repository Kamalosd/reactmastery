import React, { Component } from 'react';
import "./Blog.css/blog.css"
class Carousel extends Component {
  constructor(props){
   super(props)
   this.state ={
    ShortTitle: {
      STitle1:"Food Item",
      STitle2:"Food Item ",
      STitle3:"The Beauty of Nature",
      
    },
    LongTitle: {
      LTitle1:"Creamy Garlic Roasted Red Pepper and Spanish Chicken",
      LTitle2:" Benefits of Fresh Fruit and Vegetables ",
      LTitle3:" A Wonderful Blog Post About Earth ",
      
    },
    Paragraph: {
      P1:" Creamy Garlic Roasted Red Pepper Dip: This food blog recipe"+
      "features a luscious and flavorful creamy garlic roasted red"+
      "pepper dip. Roasted red peppers are blended with creamy "+
      "ingredients like Greek yogurt and cream cheese, resulting in"+
      "a rich and indulgent dip perfect for parties or snacking. The"+
      "smoky roasted flavor combined with the subtle garlic kick creates"+
      "a harmonious balance of flavors that will leave your taste buds wanting more."+

     "Spanish Chicken: In this food blog post, you'll discover a one-pot"+
     "Spanish chicken recipe that's both convenient and bursting with "+
     "Spanish-inspired flavors. Chicken thighs are seared to perfection"+
     "and then simmered in a savory tomato sauce infused with paprika, "+
     "saffron, and a medley of aromatic spices. This dish captures the"+
     "essence of Spanish cuisine in a simple, one-pot preparation, making"+
     "it an ideal choice for a hearty and delicious weeknight dinner ",

      P2:" Fresh fruits and vegetables offer a myriad of health benefits:"+

     " Nutrient-Rich: They are packed with essential vitamins, minerals,"+
      "and antioxidants, promoting overall well-being."+
      "Fiber Content: Fruits and vegetables are excellent sources of dietary"+
     "fiber, aiding digestion and maintaining a healthy weight."+
      "Disease Prevention: Regular consumption lowers the risk of chronic"+ 
      "diseases like heart disease, diabetes, and certain cancers."+
      "Hydration: Many fruits and vegetables have high water content,"+ 
      "contributing to hydration and radiant skin."+
     "Weight Management: They are low in calories and can help control"+
      "appetite, making them integral to weight management."+
      "Improved Digestion: Fiber aids in regular bowel movements and prevents constipation."+
     "Skin Health: Nutrients like vitamin C and E promote healthy skin, reducing the signs of aging."+
      "Immune Boost: They provide essential vitamins and antioxidants that bolster the immune system."+
      "Cognitive Function: Antioxidants in fruits and vegetables may support "+
      "brain health and cognitive function."+
      "variety and Taste: Eating a wide range of colorful produce ensures a diverse"+ 
      "intake of nutrients and adds flavor to meals."+
      "Incorporating fresh fruits and vegetables into your diet can lead to a"+
      "healthier, more vibrant life",

      P3:" Title: The Marvels of Earth: A Spectacular Journey "+

      "In a captivating blog post, The Marvels of Earth, readers embark"+
      "on a breathtaking journey through the wonders of our planet. The "+
      "author's vivid descriptions paint a vivid picture of Earth's diverse"+
      "landscapes, from the majestic peaks of the Himalayas to the lush "+
      "rainforests of the Amazon. Through eloquent prose, the post delves "+
      "into the intricate web of life, highlighting the remarkable biodiversity"+
      "that thrives on Earth."+

      "The blog also explores the delicate balance of ecosystems and the urgent"+
      "need for conservation efforts to protect our natural heritage. It emphasizes"+
      "the profound impact of climate change and the collective responsibility to "+
      "address it. The post weaves in fascinating anecdotes about Earth's history, "+
      "evolution, and the human connection to the environment."+

      "Readers are left with a sense of awe and a renewed appreciation for the planet"+
      "we call home. The Marvels of Earth is a wonderful reminder of the beauty, "+
      "fragility, and resilience of our extraordinary world.",

      
  
    },
    Channel: {
    CName1: "By Arka Das",
    CName2: "By Amir Das",
    CName3: "By Akash Das",
  
    },
    Date: {
      Date1: "30 sep, 2023",
      Date2: "30 sep, 2023",
      Date3: "29 sep, 2023",
   
      },

   }
  }
  render() {
  return (

    <div>
     <div id="carouselExampleFade" class="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='row'>
            <div className='col-md-6'>
      <img src="image/food.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className='col-md-6'>
        <p className='ShortTitle'>{this.state.ShortTitle.STitle1}</p>

        <h3 className='LongTitle'> {this.state.LongTitle.LTitle1} </h3>

        <p className='ShortTitle'>  {this.state.Paragraph.P1}</p>

           <p className='Channelname'>{this.state.Channel.CName1} </p>

           <p className='ShortTITLE'>{this.state.Date.Date1} </p>

  </div>
  </div>
  </div>

  <div class="carousel-item ">
        <div className='row'>
            <div className='col-md-6'>
      <img src="image/food blog.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className='col-md-6'>
        <p className='ShortTitle'>{this.state.ShortTitle.STitle2}</p>

        <h3 className='LongTitle'>  {this.state.LongTitle.LTitle2}</h3>

        <p className='ShortTitle'>  {this.state.Paragraph.P2} </p>

           <p className='Channelname'>{this.state.Channel.CName2}</p>

           <p className='ShortTITLE'>{this.state.Date.Date2}</p>

  </div>
  </div>
  </div>
  <div class="carousel-item ">
        <div className='row'>
            <div className='col-md-6'>
      <img src="image/sea.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className='col-md-6'>
        <p className='ShortTitle'>{this.state.ShortTitle.STitle3}</p>

        <h3 className='LongTitle'> {this.state.LongTitle.LTitle3} </h3>

        <p className='ShortTitle'> {this.state.Paragraph.P3}</p>

           <p className='Channelname'>{this.state.Channel.CName3} </p>

           <p className='ShortTITLE'>{this.state.Date.Date3}</p>

  </div>
  </div>
  </div>

 

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
}
export default Carousel;