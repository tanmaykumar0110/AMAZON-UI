# Amazon UI Clone (React)

## 👤 Student Details
- **Name:** Kapil Sharma  
- **UID:** 23BCS10351  

---

## 📌 Project Overview
This project is a **frontend Amazon UI Clone** built using **React**.  
It demonstrates core React concepts such as **component-based architecture, routing, global state management, conditional rendering, and responsive UI design**.

The application allows users to browse products, view product details, add items to cart, manage cart quantity, and perform a mock checkout with user authentication.

---

## 🚀 Features Implemented

### ✅ Homepage
- Product listing with image, title, price, and rating  
- Responsive product grid layout  

### ✅ Product Detail Page
- Detailed product view  
- Large product image  
- Description, price  
- “Add to Cart” functionality  

### ✅ Cart Page
- View added products  
- Increase/decrease quantity  
- Remove items  
- Automatic total price calculation  

### ✅ Checkout Page
- Billing summary  
- Shipping address form (UI only)  

### ✅ User Authentication (Mock)
- Login using name  
- User session stored in `localStorage`  
- Conditional rendering of user name / login button  

### ✅ Routing
Implemented using **React Router DOM**
- `/` → Home  
- `/product/:id` → Product Detail  
- `/cart` → Cart  
- `/checkout` → Checkout  
- `/login` → Login  

### ✅ Global State Management
- Implemented using **Context API + useReducer**  
- Cart and User state managed globally  

### ✅ Responsive Design
- Mobile-friendly layout  
- CSS Grid & Flexbox used  

---

## 🛠️ Tech Stack
- React  
- Vite  
- React Router DOM  
- Context API + useReducer  
- HTML5, CSS3  
- LocalStorage  

---

## 📁 Folder Structure
amazon-clone/
│── package.json
│── vite.config.js
│── index.html
└── src/
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
├── pages/
│ ├── Home.jsx
│ ├── ProductDetail.jsx
│ ├── Cart.jsx
│ ├── Checkout.jsx
│ ├── Login.jsx
├── context/
│ ├── AppContext.jsx
│ ├── reducer.js
├── data/
│ └── products.js
├── App.jsx
├── main.jsx
└── index.css

## ⚙️ Installation & Setup Instructions

### Step 1: Extract the ZIP
Extract the project folder and open it in **VS Code**.

### Step 2: Install Dependencies
Open terminal (Command Prompt preferred on Windows) and run:
```bash
npm install

```
### Step 3: Run the Project
```bash
npm run dev

```
### Step 4: Open in Browser
Open the URL shown in terminal (usually):
```bash
http://localhost:5173
