1. Overview
The website is an online shopping platform where users can browse products, view details, add items to the cart, and proceed to checkout. It is built with a modular structure to ensure scalability and maintainability.

2. Technologies Used
React.js – Used for building dynamic UI components.
React Router – Enables navigation between different pages.
Redux Toolkit – Manages global state, especially for the cart functionality.
Tailwind CSS – Provides responsive and modern styling.
FakeStore API – Fetches product data dynamically.


3. Application Structure
Main Components:
Navbar: Contains navigation links like Home, Shop, About, Contact, and Cart.
Home Page: Features a banner with a background image, a headline, a "Shop Now" button, and category sections for different product types.
Product List Page: Fetches products from an API and displays them in a grid format with filtering options.
Product Detail Page: Shows detailed information about a selected product, including its description, price, and an option to add it to the cart.
Cart Page: Displays added products, allows users to modify quantities, and provides an option to remove items.
404 Page: Displays a custom error message for unknown routes.

