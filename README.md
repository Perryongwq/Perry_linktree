# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases a real-time clock widget, custom interactive buttons, and links to your portfolio, LinkedIn, and GitHub profiles. The site features a stylish overlay on a background image, complete with smooth transitions and a clean, modern design.

## Features

- **Responsive Design:** Fully responsive layout using Tailwind CSS.
- **Real-Time Clock Widget:** Displays the current time with an updated clock icon and a full white background for clear visibility.
- **Custom Button Components:** Reusable button component built with Radix UI's Slot and enhanced styling via class variance.
- **Interactive Links:** Smooth hover transitions on links to external profiles and portfolio.
- **Modern Tech Stack:** Built using React, TypeScript, and Tailwind CSS with additional utilities such as class-variance-authority and tailwind-merge.

## Demo

*(If applicable, include a link or a screenshot of your deployed application.)*

## Installation

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git\
cd portfolio
npm install
npm run dev

.
├── app.tsx                  # Main application component with layout and page content.
├── components
│   └── ui
│       └── button.tsx       # Custom Button component with variant and size configurations.
├── lib
│   └── utils.ts             # Utility functions (e.g., class name merging with tailwind-merge).
├── main.tsx                 # Entry point for the React application.
├── index.css                # Global styles and Tailwind CSS configuration.
└── README.md                # Project documentation.

Technologies Used

This project is built with the following technologies:

React - JavaScript library for building user interfaces.

TypeScript - Strongly typed programming language for JavaScript.

Tailwind CSS - Utility-first CSS framework for rapid UI development.

Radix UI - Accessible UI primitives for React applications.

Lucide React - A set of beautifully crafted open-source icons.

Class Variance Authority - Variant-based styling.

Tailwind Merge - Intelligent class merging for Tailwind CSS.

Customization

You can easily customize various aspects of the application:

Clock Widget: Modify the background color, padding, and icon size in the ClockWidget component.

Buttons: Adjust button styles and variants in components/ui/button.tsx to match your design requirements.

Overlay & Background: The background image and overlay can be customized in app.tsx and index.css.

License

This project is licensed under the MIT License.

Acknowledgements

Artwork: Background image credited to @vince19visuals.

Open Source Libraries: Thanks to the contributors of the open-source libraries and tools used in this project.