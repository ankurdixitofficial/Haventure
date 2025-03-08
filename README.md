# Haventure Real Estate Platform

A modern, responsive real estate platform built with Next.js and Tailwind CSS.

## Overview

Haventure is a comprehensive real estate platform designed to provide a seamless experience for property buyers, sellers, and agents. The platform features property listings, advanced search functionality, user authentication, and interactive UI elements.

## Features

- **Property Listings**: Browse through a wide range of property listings with detailed information
- **Advanced Search**: Filter properties by location, price range, number of bedrooms, and more
- **User Authentication**: Secure registration and login system
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive UI**: Modern and intuitive user interface with smooth transitions

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: (To be implemented) Node.js, Express, MongoDB
- **Authentication**: (To be implemented) JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/haventure.git
   cd haventure
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
haventure/
├── src/
│   ├── app/
│   │   ├── properties/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── PropertyCard.tsx
│       └── FeaturedProperties.tsx
├── public/
│   └── (static assets)
├── package.json
└── README.md
```

## Future Enhancements

- Backend implementation with Node.js and Express
- User authentication and authorization
- Property favoriting and comparison
- Agent dashboard
- Real-time chat for inquiries
- Virtual property tours
- Interactive maps for property locations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
