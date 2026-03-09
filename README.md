🚀 SkillNest Frontend

SkillNest is a modern EdTech learning platform that allows instructors to create and publish courses while enabling students to explore, enroll, and learn through an interactive dashboard.

This repository contains the frontend application of SkillNest built with modern web technologies to deliver a fast, responsive, and scalable learning experience.

The frontend communicates with the backend APIs to handle authentication, course browsing, course creation, dashboards, and user interactions.

🌐 Live Demo

🔗 Frontend Deployment

https://skill-nest-frontend-eight.vercel.app

🚀 Deployed using Vercel

📌 Table of Contents

Project Overview

Features

User Roles

Tech Stack

Application Architecture

Folder Structure

State Management

Routing System

Course Creation Workflow

API Integration

Installation Guide

Environment Variables

Screenshots

Future Improvements

Author

📖 Project Overview

SkillNest is designed to replicate the functionality of modern online learning platforms where:

Instructors can create and manage courses

Students can browse, purchase, and learn from courses

The frontend focuses on:

Creating an intuitive user interface

Managing application state efficiently

Communicating with backend APIs

Handling user authentication and authorization

Rendering dynamic course data

✨ Features
🔐 Authentication System

The platform provides a secure authentication system.

Users can:

Register with email verification

Login securely

Reset forgotten passwords

Logout safely

Authentication is handled using JWT tokens.

📚 Course Catalog

Students can explore all available courses.

Features include:

Category-based course listing

Course cards with instructor and pricing

Detailed course pages

Easy navigation across categories

🎓 Student Dashboard

The student dashboard provides a personalized learning environment.

Students can:

View enrolled courses

Access lecture videos

Track course progress

Manage profile information

👨‍🏫 Instructor Dashboard

The instructor dashboard allows instructors to manage their teaching content.

Features include:

Create new courses

Add sections and lectures

Upload video content

Publish or unpublish courses

Monitor student enrollments

View analytics and statistics

🛠 Course Builder

The Course Builder allows instructors to structure courses in a hierarchical format.

Course Structure:

Course
→ Sections
→ Subsections
→ Video Lectures

This structure helps maintain organized learning content.

📊 Instructor Analytics

Instructors can track course performance using visual analytics.

Dashboard insights include:

Total courses created

Total student enrollments

Course-wise student distribution

Graphical charts for analytics

📱 Responsive Design

SkillNest is fully responsive and works across:

Desktop

Tablets

Mobile devices

This ensures a consistent user experience across all devices.

🏗 Application Architecture

SkillNest frontend follows a component-based architecture.

Key principles include:

Reusable UI components

Centralized state management

Modular folder structure

Clear separation of concerns

Application Flow:

User → React Frontend → API Requests → Backend Server → Database
⚙️ Tech Stack
Frontend Technologies

⚛ React

🧠 Redux

🔀 React Router

🎨 Tailwind CSS

Additional Libraries

React Hook Form (form validation)

React Hot Toast (notifications)

Chart.js (data visualization)

Axios (API communication)

📁 Folder Structure
src
│
├── components
│   ├── common
│   ├── core
│   ├── dashboard
│
├── pages
│   ├── Home
│   ├── Login
│   ├── Signup
│   ├── Dashboard
│
├── services
│   ├── apiConnector
│   ├── operations
│
├── slices
│   ├── authSlice
│   ├── courseSlice
│   ├── profileSlice
│
├── utils
│
├── App.js
└── index.js

This structure ensures the project remains scalable and maintainable.

🧠 State Management

SkillNest uses Redux to manage global application state.

authSlice

Handles authentication including:

user login

logout

authentication tokens

profileSlice

Handles:

user profile data

profile updates

courseSlice

Handles:

course creation

editing

publishing workflow

🔀 Routing System

Routing is implemented using React Router.

Important routes include:

/                → Home Page
/login           → Login Page
/signup          → Registration Page
/catalog         → Course Catalog
/course/:id      → Course Details
/dashboard       → User Dashboard
/dashboard/add-course
/dashboard/my-courses

Protected routes ensure only authenticated users can access dashboard pages.

🎯 Course Creation Workflow

Course creation is divided into 3 main steps.

Step 1 — Course Information

Instructor adds:

Course title

Description

Category

Price

Thumbnail image

Step 2 — Course Builder

Instructor creates:

Sections

Subsections

Video lectures

Step 3 — Publish Course

Instructor can:

Save course as draft

Publish course for students

🔌 API Integration

The frontend communicates with backend services through REST APIs.

Operations include:

User authentication

Course creation

Course editing

Fetching course details

Uploading course content

API requests are handled using Axios.

💻 Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/skillnest-frontend.git
2️⃣ Navigate into Project
cd skillnest-frontend
3️⃣ Install Dependencies
npm install
4️⃣ Start Development Server
npm start

Application runs at:

http://localhost:5000
🔑 Environment Variables

Create a .env file in the root directory.

REACT_APP_BASE_URL=http://localhost:5000/api/v1
📸 Screenshots

<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/47e01e6b-ff05-4a8f-8d3f-e418fff6952d" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/058d19c7-3d94-439c-bd3f-782e8c8ce7de" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/9eeeb847-898c-426a-b19a-ebb04f03d278" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/53d465e1-b9dc-4798-97b2-1d1880fc5755" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/65c9b083-deff-4ca7-8ae0-c2f0d227146e" />




🚀 Future Improvements

Planned enhancements include:

Payment integration using Razorpay

Course completion certificates

Student progress tracking

Advanced analytics

Course recommendation system

👩‍💻 Author

Saniya Mane

SkillNest demonstrates full-stack development skills including:

Frontend architecture

Dashboard development

API integration

Scalable application design
