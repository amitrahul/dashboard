# Responsive Dashboard (React.js)

A modern, responsive dashboard built with React.js and TailwindCSS, featuring a collapsible sidebar, dark mode, search filter, smooth animations, and API data fetching.

## 📝 Approach

### 1️⃣ Project Structure & Design

- Used React.js for a component-based structure ensuring scalability.
- Implemented TailwindCSS for utility-first styling and rapid development.
- Designed a minimalist UI with consistent spacing, fonts, and colors.
- Ensured a responsive layout using CSS flex/grid to adapt to different screen sizes.

### 2️⃣ Functional Implementation

#### 📌 Sidebar (Collapsible)

- Used React state (useState) to toggle sidebar visibility.
- Sidebar collapses on small screens and expands on desktop for better usability.
- Added smooth animations using Tailwind transition classes.

#### 📌 Dark Mode

- Implemented using Context API for global state management.
- Used Tailwind's dark: classes for seamless theme switching.

#### 📌 User Data Fetching

- Used axios inside useEffect to fetch user data from jsonplaceholder API.
- Handled loading states to improve UX while data is being retrieved.
- Implemented error handling for failed API requests.

#### 📌 Search Filter

- Used useState to track search input.
- Filtered user list in real-time using case-insensitive matching.

#### 📌 Footer (Fixed at Bottom)

- Used Flexbox (h-screen, flex-col, flex-1) to keep the footer always at the bottom.

#### 📌 Smooth Animations

- User Cards: Used CSS animations (@keyframes) to apply fade-in effects.
- Sidebar & Dark Mode: Used Tailwind transitions (transition-all ease-in-out) for a smooth feel.

## 🚀 Features

- ✅ Responsive Design – Adapts to mobile and desktop views
- ✅ Collapsible Sidebar – Expands/collapses for better navigation
- ✅ Dark Mode – Toggle between light and dark themes
- ✅ Search Filter – Easily find users in the list
- ✅ Smooth Animations – Elegant transitions for UI elements
- ✅ API Data Fetching – Loads user data from jsonplaceholder

## 🎨 Design Choices

### 1. React.js & TailwindCSS

- React.js: Component-based architecture for scalability.
- TailwindCSS: Utility-first CSS for rapid styling.

### 2. Collapsible Sidebar

- State-based control (useState) to toggle sidebar width.
- Minimalist icons (react-icons) for better UX.

### 3. Dark Mode Implementation

- Context API for global state management.

### 4. User Data Fetching

- Axios for API calls (jsonplaceholder).
- useEffect Hook to fetch data on component mount.

### 5. Search Filter

- Controlled input (useState) for filtering.
- Case-insensitive filtering for better usability.

### 6. Smooth Animations

- Tailwind utilities (transition-all duration-300 ease-in-out).
- Sidebar expands/collapses smoothly.

## ⚡ Challenges & Solutions

- 1. Challenge : Sidebar should be collapsible on mobile
- 1. Solutions : Used useState to control width and FaBars icon for toggling

- 2. Challenge : API data should load efficiently.
- 2. Solutions : Used axios inside useEffect to fetch data asynchronously.

- 3. Challenge : Filtering should be case-insensitive.
- 3. Solutions : Used .toLowerCase() to normalize input and user names.
