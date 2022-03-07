# kBeautyBuddy

- Click [HERE](https://frontend.turing.edu/projects/module-3/showcase.html) to view the project spec
- Click [HERE](https://kbeautybuddy.vercel.app/) to view the deployed site

## Table of Contents

- [Abstract](#abstract)
- [Tech Used](#tech-used)
- [Installation and Set-Up](#installation-and-set-up)
- [Features](#features)
- [See the Site in Action](#see-the-site-in-action)
- [Future Goals](#future-goals)
- [Stretch Goals](#stretch-goals)
- [Created By](#created-by)
- [Credit](#credit)

## Abstract

Whether you're a skincare noob or retinol lover, this application is here to provide you with your next Korean skincare routine! Why Korean skincare (or k-beauty), specifically? K-beauty focuses on prevention and healing, and skincare routines are individualized to a persons' skin type and skin concerns. Having such personalized routines ensures effective care to the skin. This application will guide a user through a quiz to determine their skin type and top skin concern, and will create a personalized routine of 2-, 3-, or 5- products for them at the end. If they're not happy with the routine provided, they can take the quiz again, or head to the catalog page and learn more about all of the available products. If they find something they prefer, they can swap that product into their routine instead. 

## Tech Used

- React
- React Router
- React Modal
- kbeautyAPI (built by me using Express, JavaScript, hosted on Heroku)
  - [See the code](https://github.com/rjur11/kbeautyAPI)
  - [See the deployed API](https://kbeauty-api.herokuapp.com/api/v1/skincare)
- Figma [Wireframe](https://www.figma.com/file/dcjF8rPND3Nm1W8FdwoPlj/Kbeauty-Solo-Project?node-id=0%3A1)
- [GitHub Project Board](https://github.com/rjur11/kbeautybuddy/projects/1)
- Canva for [User Personas](https://www.canva.com/design/DAE5rHxQcCQ/c-9SWtOYnefbwD4TskCyVg/view?utm_content=DAE5rHxQcCQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## Installation and Set-Up

To install this project, please see below:

```bash
1. Clone down this Repository using `git clone`
2. Next, `cd` into the cloned repository and `npm install` to install library dependancies
3. Finally, run `npm start` and open up localhost at the port indicated to view the webpage
```

Alternatively, you can access the deployed site [HERE](https://kbeautybuddy.vercel.app/)

## Features

- 100% Lighthouse Audit Accessibility score on all pages
- Extensive End-to-End testing with Cypress on all pages
- Dynamic quiz that builds a personalized skincare routine based off user's choices
- The ability to replace products in the suggested routine on the catalog page
- Unique URLs and easy forward/back page navigation thanks to React Router (and error handling when a wrong URL is submitted)
- A personalized API that provides product data for 50 skincare products


## See the Site in Action!

Welcome to kBeautyBuddy! A user is greeting with a simple landing page and the option of three buttons: "Take Skincare Quiz", "See Skin Profile" or "Check Your Skincare Shelf". 


<img width="500" alt="landingPage" src="https://user-images.githubusercontent.com/69861203/156960782-63a41048-aed1-4f94-a3fc-f2c4c41118fa.png">



Let's take the skin quiz and see what routine it builds for us:

![Skin quiz Demo](https://media.giphy.com/media/eQHZzxscojjoKN61e3/giphy.gif)

The profile page will begin with an empty shelf and empty Skin type and Skin concern section. After a user takes their first skin quiz, these fields will be automagically populated with their results from the quiz, and a personalized routine will be built for them in their shelf. 


The Skincare Shelf page features your shelf again, but with a nifty catalog of all 50 products below. The catalog has filtering capabilities, either by product type (ex. cleansers only, please!), brand name, or a combo of the two. If no products can be found for any combo of filters, the user will get a polite error message asking them to search again. If a user wants to learn more about a specific product, or they'd like to replace a product of the same type in their routine, they can click on a product in the catalog to open up a modal displaying more details. There, they can either select to add this product to their current routine, or they can click outside of the modal/ESC key to return to the catalog.

![Catalog page Demo](https://media.giphy.com/media/tO6MhbOQIwgtOUB3gz/giphy.gif)

A closeup of the detailed product view: 

<img width="500" alt="Detailed product view" src="https://user-images.githubusercontent.com/69861203/156960663-53b62444-5945-4cd7-a4cc-ed421bbb9de2.png">

The application is set up with unique URLs thanks to React Router:

![kbeautybuddyrouter](https://user-images.githubusercontent.com/69861203/156961833-b6ee9787-7c47-4822-99f6-a0a7a2c53c24.png)


## Future Goals

- Log in capabilities
- Ability to purchase the routine (or individual products)
- Ability to add products to your routine that aren't already in there (ex. change a 2 step routine to a 3 step routine) on the catalog page

## Stretch Goals

This project allowed me to pick many of my own learning goals. See below for ways I stretched myself even further on this project:

- Extensive End to End testing with Cypress ✅
- PropTypes ✅
- React Modal ✅
- Building out my own API using Express ✅
- Hosting my API and App ✅

## Created By:

- [Rana Jurjus](https://github.com/rjur11)

## Credit

- [Skincare placeholder images](https://pngtree.com/freepng/cartoon-beauty-skincare-cosmetics-icon_5776522.html)
- [Logo Image](https://pngtree.com/freepng/water-cream-skin-care-products-care-products-skin-care-kit_3896800.html)
