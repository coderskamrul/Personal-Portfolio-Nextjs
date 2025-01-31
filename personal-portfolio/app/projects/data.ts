export const projects = [
  {
    id: "1",
    title: "Coffee Shop Website",
    description: "A fully functional coffee shop website with a modern design and e-commerce capabilities.",
    longDescription: `
      Welcome to the Coffee Shop Website! This project is a beautifully designed, fully functional coffee shop website built using modern web development tools and best practices. The platform includes features such as:
      
      - Hero section with an inviting coffee image and welcoming text
      - Products section displaying coffee items with images, descriptions, prices, and add-to-cart functionality
      - Fully functional shopping cart with quantity adjustment, item removal, and dynamic total calculation
      - Checkout button for seamless user experience
      - Informative footer containing business hours, contact information, and location details
    `,
    image: "https://i.ibb.co.com/xKVRRmCD/coffee-project-img.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    features: [
      "Hero section with welcoming visuals",
      "Product catalog with high-quality images and descriptions",
      "Add to cart and shopping cart functionalities",
      "Quantity adjustment and item removal",
      "Dynamic total calculation and checkout",
      "Responsive design for all devices"
    ],
    liveUrl: "https://coffee-shop-cyan-five.vercel.app/",
    githubUrl: "https://github.com/coderskamrul/Coffee-Shop-With-Nextjs?tab=readme-ov-file",
    category: "Front-End Development",
    completionDate: "January 2025",
    screenshots: [
      "https://i.ibb.co.com/xKVRRmCD/coffee-project-img.png",
      "https://i.ibb.co.com/xKVRRmCD/coffee-project-img.png",
      "https://i.ibb.co.com/xKVRRmCD/coffee-project-img.png"
    ]
  },  
  {
    id: "2",
    title: "Travel Website",
    description: "A visually captivating, fully responsive travel website designed to inspire and simplify travel planning.",
    longDescription: `
      A fully responsive and visually captivating travel website built using Next.js and Tailwind CSS, designed to inspire and simplify travel planning. The platform includes a wide range of features for a seamless user experience:
      
      - Responsive Navigation Bar with links to all major sections, a sticky navigation feature, and a collapsible menu for mobile devices
      - Hero Section with an eye-catching background image, welcome message, and call-to-action button
      - Booking system that allows users to select travel dates, destinations, and the number of travelers, with a summary for confirmation
      - Interactive Contact Us page with form validation and user-friendly success/error messages
      - Authentication features with login and signup pages, including form validation
      - Dark mode support for a customizable theme
      - Fully responsive layout optimized for all devices
      - Performance optimization with API routes powered by Next.js
    `,
    image: "https://i.ibb.co.com/Vpkq8bPG/travel-project-img.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    features: [
      "Responsive Navigation Bar with sticky scrolling",
      "Hero Section with call-to-action button",
      "Booking system with travel date and destination selection",
      "Interactive Contact Us form with validation",
      "User authentication (Login & Signup)",
      "Dark mode support",
      "Responsive design for all screen sizes",
      "Performance and optimization features"
    ],
    liveUrl: "https://travel-app-rho-blush.vercel.app/",
    githubUrl: "https://github.com/coderskamrul/Travel-Website-Nextjs",
    category: "Front-End Development",
    completionDate: "January 2025",
    screenshots: [
      "https://i.ibb.co.com/Vpkq8bPG/travel-project-img.png",
      "https://i.ibb.co.com/Vpkq8bPG/travel-project-img.png",
      "https://i.ibb.co.com/Vpkq8bPG/travel-project-img.png"
    ]
  },  
  {
    id: "3",
    title: "InnoMarkt Consultancy & Service Provider",
    description: "A comprehensive & Consultancy & Service Providere-commerce platform that supports user registration, product management, order placement, secure payments, and an admin dashboard for managing products, users, and payments.",
    longDescription: `
      This e-commerce system provides a robust platform for online shopping, enabling both users and admins to manage their respective operations efficiently. The platform includes the following features:
      
      - User Registration: Users can create accounts with a unique username and password, providing personal information such as name, email, and contact details.
      - User Login: Registered users can securely log in to access their accounts.
      - Product Listing: A detailed list of available products, including name, description, price, and high-quality images.
      - Placing Orders: Users can place orders, specify delivery information, and receive order confirmation emails.
      - Payment Processing: Integration of a secure payment gateway for transactions using bank accounts.
      - Contact Admin: Users can send messages to the admin through a contact form with a subject and description.
      - Admin Features:
        - Product Management: Admins can add, edit, or delete products with name, description, and optional images.
        - User Management: Admins can view, update, deactivate, or delete user accounts.
        - Message Management: Admins can view and respond to user messages.
        - User Role Management: Admins can assign roles like regular user, moderator, or admin, with different levels of access and permissions.
        - Payment Management: Admins can view payment details, transaction history, and process refunds or cancellations.
      - Security: User data, including personal information and payment details, is securely stored and compliant with data protection regulations.
      - User Roles: Users can register, browse products, place orders, make payments, and contact admins, while admins have full access to platform management.
    `,
    image: "https://i.ibb.co.com/qFgbVVVH/service-provider-project-img.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    features: [
      "User registration and login",
      "Product listing with details and images",
      "Order placement with delivery details",
      "Secure payment gateway integration",
      "Admin dashboard for product and user management",
      "User role management and permissions",
      "Messaging system for user-admin communication",
      "Transaction history and payment management"
    ],
    liveUrl: "https://coding-projects-20c57.web.app/",
    githubUrl: "https://github.com/coderskamrul/InnoMarkt-Consultancy-and-Service-Provider",
    category: "Full Stack Development",
    completionDate: "February 2023",
    screenshots: [
      "https://i.ibb.co.com/qFgbVVVH/service-provider-project-img.png",
      "https://i.ibb.co.com/qFgbVVVH/service-provider-project-img.png",
      "https://i.ibb.co.com/qFgbVVVH/service-provider-project-img.png"
    ]
  }
  
]

export const getProject = (id: string) => {
  return projects.find((project) => project.id === id)
}