# eCommerce Platform

A modern eCommerce platform built with React, TypeScript, and Ant Design. This application provides a seamless shopping experience with features like product browsing, searching, filtering, cart management, and more.

## 🌟 Features

### Product Management

- Browse products with pagination
- Search products by name
- Filter products by category
- View detailed product information
- Add/Edit products
- Responsive product grid layout

### Shopping Cart

- Add products to cart from product cards or detail view
- Adjust product quantities
- Remove items from cart
- Clear entire cart
- Persistent cart state across sessions
- Real-time cart total calculation

### User Interface

- Clean and modern design
- Responsive layout for all screen sizes
- Loading states and skeletons
- Error handling
- Smooth animations and transitions

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Type System**: TypeScript
- **Routing**: TanStack Router v1
- **State Management**:
  - TanStack Query (React Query) for server state
  - Zustand for client state (cart management)
- **UI Components**: Ant Design v5
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-platform.git
```

2. Install dependencies:

```bash
cd ecommerce-platform
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🔧 Configuration

The application uses environment variables for configuration. Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_base_url
```

## 📁 Project Structure

```
src/
├── api/                  # API integration layer
├── components/          # Reusable components
│   ├── cart/           # Cart related components
│   ├── products/       # Product related components
│   └── skeletons/      # Loading skeleton components
├── hooks/              # Custom React hooks
├── queries/            # TanStack Query configurations
├── routes/             # Application routes
├── store/              # Zustand store configurations
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🚀 Key Components

### Products

- `Products`: Main product grid component
- `ProductCard`: Individual product display card
- `ProductDetailsModal`: Detailed product view
- `AddProductButton`: Product creation interface

### Cart

- `CartDrawer`: Shopping cart sidebar
- `CartItem`: Individual cart item display
- `CartSummary`: Cart totals and checkout

### Common

- `Header`: Application header with cart status
- `Search`: Product search interface
- `Categories`: Product category filter

## 🔄 State Management

### Server State (TanStack Query)

- Product data
- Category data
- Search results
- Pagination state

### Client State (Zustand)

- Shopping cart
- UI state
- Filter preferences

## 🎨 Styling

The application uses a combination of:

- Tailwind CSS for utility-first styling
- Ant Design components for UI elements
- Custom CSS variables for theming
- Responsive design principles

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🔒 Security

- Input sanitization
- Type checking with TypeScript
- Secure API communication

## 🚧 Future Improvements

- [ ] User authentication
- [ ] Order processing
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Product reviews
- [ ] Wishlist functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🤝 Support

For support, email support@example.com or create an issue in the repository.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [TanStack](https://tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
