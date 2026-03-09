SkillNest Frontend

SkillNest is a modern EdTech learning platform that enables instructors to create and publish courses while allowing students to explore, purchase, and learn from those courses through an intuitive dashboard interface.

This repository contains the frontend application of SkillNest built using modern web technologies to deliver a fast, responsive, and interactive learning experience.

The frontend communicates with the SkillNest backend APIs to manage authentication, course browsing, course creation, student enrollments, and user dashboards.

Live Demo

Frontend Deployment:

https://skill-nest-frontend-eight.vercel.app

Deployed using

Vercel

Table of Contents

Project Overview

Features

User Roles

Application Architecture

Tech Stack

Folder Structure

State Management

Routing System

Course Creation Workflow

API Communication

Installation & Setup

Environment Variables

Screenshots

Future Improvements

Author

Project Overview

SkillNest is designed to simulate the functionality of modern online learning platforms where instructors can publish educational content and students can enroll and learn at their own pace.

The frontend focuses on:

Providing an engaging user interface

Managing application state efficiently

Communicating with backend APIs

Handling user authentication and authorization

Rendering course data dynamically

The platform supports two primary user roles:

Students – who enroll and learn from courses

Instructors – who create and manage courses

Features

SkillNest includes a wide range of features that enhance both teaching and learning experiences.

Authentication System

The platform provides secure user authentication.

Features include:

User registration

Login with email and password

Email verification using OTP

Forgot password functionality

Secure logout

Authentication tokens are managed securely within the application state.

Course Catalog

Students can explore courses available on the platform.

Features include:

Category-based course listing

Course cards displaying course information

Search and navigation through course categories

Course detail pages showing full course descriptions

Student Dashboard

The student dashboard provides a personalized learning environment.

Students can:

View enrolled courses

Access lecture videos

Track learning progress

Manage profile details

Instructor Dashboard

The instructor dashboard enables instructors to manage and monitor their courses.

Features include:

Create new courses

Edit course content

Add sections and subsections

Upload lecture videos

Publish or unpublish courses

View student enrollment statistics

Monitor overall course performance

Course Builder

The Course Builder allows instructors to structure their courses in a hierarchical format.

Course Structure:

Course
→ Sections
→ Subsections
→ Video lectures

This structured approach makes content easier for students to follow.

Instructor Analytics

The dashboard provides analytical insights such as:

Total number of courses created

Total student enrollments

Course-wise student distribution

Performance visualization using charts

Analytics help instructors understand how their courses are performing.

Responsive Design

SkillNest is fully responsive and works across multiple devices including:

Desktop

Tablets

Mobile phones

The responsive design ensures a seamless learning experience across all screen sizes.

Application Architecture

The SkillNest frontend follows a component-based architecture.

Key architectural principles include:

Reusable UI components

Centralized state management

Modular folder structure

Clear separation of concerns

The frontend communicates with backend services through REST APIs.

Application Flow:

User → Frontend Interface → API Requests → Backend Services → Database

Tech Stack

SkillNest frontend is built using modern web development technologies.

Core Technologies

React – Component-based user interface library

Redux – Global state management

React Router – Client-side routing

Tailwind CSS – Utility-first CSS framework

Additional Libraries

React Hook Form – Efficient form handling and validation

React Hot Toast – Notification alerts

Chart.js – Data visualization for dashboards

Axios – API communication

Folder Structure

The project follows a modular folder structure for scalability and maintainability.

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

This structure ensures the codebase remains organized and easy to scale.

State Management

SkillNest uses Redux for managing global application state.

Redux helps maintain predictable state updates across the application.

Key Redux slices include:

authSlice

Handles authentication state including:

Logged-in user information

Authentication tokens

Login and logout state

profileSlice

Manages user profile details and profile updates.

courseSlice

Handles the course creation workflow including:

Course information

Course content

Publishing settings

Routing System

Client-side routing is implemented using React Router.

Important application routes include:

/                     Home Page
/login                User Login
/signup               User Registration
/catalog              Course Catalog
/course/:courseId     Course Details
/dashboard            User Dashboard
/dashboard/my-courses Instructor Courses
/dashboard/add-course Create Course

Protected routes ensure that only authenticated users can access dashboard features.

Course Creation Workflow

Course creation is divided into multiple steps to simplify the process.

Step 1 – Course Information

Instructor adds:

Course title

Course description

Category

Price

Thumbnail image

Step 2 – Course Builder

Instructor creates:

Course sections

Subsections

Lecture videos

Step 3 – Publish Settings

Instructor decides whether to:

Save course as draft

Publish course for students

API Communication

The frontend interacts with backend services through REST APIs.

API operations include:

User authentication

Course creation

Course editing

Fetching course data

Uploading media files

API communication is handled using Axios.

Installation & Setup

Follow these steps to run the frontend locally.

Clone the Repository
git clone https://github.com/your-username/skillnest-frontend.git

Navigate into the project directory.

cd skillnest-frontend
Install Dependencies
npm install
Start Development Server
npm start

The application will run on:

http://localhost:5000
Environment Variables

Create a .env file in the root directory and add:

REACT_APP_BASE_URL=http://localhost:4000/api/v1

This connects the frontend with the backend APIs.
