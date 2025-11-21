# E-Commerce Website

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxtjs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Pinia](https://img.shields.io/badge/Pinia-DB1C81?style=for-the-badge&logo=pinia&logoColor=white)](https://pinia.vuejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## Live Demo
[View Live Application](https://ecommerce-with-nuxt-js.vercel.app/)

---

## Project Overview
This project is a **mobile-first e-commerce website** built with **Nuxt.js**. It includes:

- Responsive design  
- API integration  
- State management with **Pinia**  
- Multi-page routing  

The website fetches **featured products** from the [DummyJSON API](https://dummyjson.com/) and displays them dynamically.

---

## Built With
- **Nuxt.js** – The front-end framework used  
- **Vue.js** – Component-based JavaScript framework  
- **Pinia** – State management library  
- **HTML / CSS / JS** – Core web technologies  
- **DummyJSON API** – Used to fetch featured products  
- **Vercel** – Deployment platform  

---

## Features
- Mobile-first, responsive design  
- Dynamic product display from API  
- Component-based architecture  
- State management with **Pinia**  
- Multi-page routing  

---

## Pages
### 1. Home Page
- Displays featured products dynamically from API  
- Mobile-first, responsive layout  
- Product cards with:  
  - **Quick View modal**: Clicking opens a popup with product details  
  - **Add-to-Cart functionality**: Clicking the button changes its state to **Added** to confirm the product has been added to the cart

### 2. Checkout Page
- Lists products added to the cart  
- Shows product details, quantity, and total price  
- Mobile-first layout for smooth checkout experience  

---

## Installation & Running
```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run the development server
npm run dev
