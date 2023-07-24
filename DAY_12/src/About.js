import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './sidebar';
const About = () => {
  return (
    <div  className="container">
    <Navbar/>
    <Navbar1 />
      <h1>About Us </h1>
      <p>
      Welcome to our restaurant! We are thrilled to have you here and would like to share a bit about our story and what makes us unique.

At [Restaurant Name], we believe that dining is not just about satisfying hunger; it's an experience that engages all your senses. From the moment you step through our doors, we aim to create a warm and inviting atmosphere where you can relax and enjoy exceptional food and outstanding service.

Our journey began [X number of years] ago when [Founder's Name] had a vision of creating a place where people could gather to savor delicious cuisine and create lasting memories. With a passion for culinary excellence and a deep appreciation for quality ingredients, we set out to build a restaurant that would exceed expectations.

One of the cornerstones of our philosophy is our commitment to using only the freshest, locally sourced ingredients. We believe in supporting local farmers and artisans, not only to showcase the incredible flavors our region has to offer but also to contribute to sustainable and ethical practices.

Our talented team of chefs takes great pride in crafting each dish with meticulous attention to detail. Whether it's a hearty comfort food classic or a contemporary fusion creation, our menu is designed to cater to a wide range of tastes and dietary preferences. We offer vegetarian, vegan, and gluten-free options, ensuring that everyone can find something delightful to enjoy.

To complement our exceptional cuisine, we have curated an extensive wine list featuring both local and international selections. Our knowledgeable sommeliers are always available to guide you through the wine pairing process, ensuring that your meal is elevated to the next level.

We firmly believe that dining is a social experience, which is why our attentive and friendly staff is dedicated to making your visit memorable. Whether you're celebrating a special occasion, having an intimate dinner for two, or hosting a larger gathering, we strive to provide impeccable service that exceeds your expectations.

Beyond our commitment to culinary excellence, we are also deeply rooted in the community. We actively participate in local charity events, collaborate with neighboring businesses, and host special events that showcase local talent. We believe in giving back and creating a positive impact on the community that has supported us throughout the years.

Thank you for choosing [Restaurant Name]. We look forward to providing you with an unforgettable dining experience that combines delectable flavors, warm hospitality, and a touch of culinary magic.
      </p>
    </div>
  );
};

export default About;

