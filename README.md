# WearCraft - Your Style Destination

WearCraft is a modern, responsive e-commerce application built with React, Vite, and Tailwind CSS. It offers a seamless shopping experience with features like product filtering, cart management, and a clean, minimalist UI powered by Shadcn UI.

## Features

- **Product Browsing**: Browse a wide range of products with advanced filtering (Category, Price, Search) and sorting options.
- **Product Details**: View detailed product information, select sizes, and add items to the cart.
- **Cart Management**: Add, remove, and update quantities of items in the shopping cart.
- **Checkout Process**: A streamlined checkout flow (simulated).
- **User Profile**: View order history and manage account details (simulated).
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
- **Modern UI**: Built with Shadcn UI components for a consistent and accessible user interface.
- **Developer Page**: A dedicated page showcasing the developer's profile and skills.

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React Context API
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios
- **API**: [FakeStoreAPI](https://fakestoreapi.com/)

## Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/wearcraft.git
    cd wearcraft
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:

    ```env
    VITE_API_URL=https://fakestoreapi.com
    ```

4.  **Run the development server**:

    ```bash
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components
│   ├── ui/         # Shadcn UI components
├── context/        # React Context providers (CartContext)
├── hooks/          # Custom React hooks (useFetchProducts)
├── lib/            # Utility functions (cn, utils)
├── pages/          # Page components (Home, Products, Cart, etc.)
├── App.jsx         # Main application component with routes
├── index.css       # Global styles and Tailwind directives
└── main.jsx        # Application entry point
```

## Developer

**Rajiv Sharma** - ReactJS Developer

- [GitHub](https://github.com/rajivsharma25)
- [LinkedIn](https://linkedin.com/in/rajivsharma25)
- [Portfolio](https://rajivsharma.vercel.app)

---

&copy; 2025 WearCraft. All rights reserved.
