🚀 SkillNest – Frontend
<p align="center">

</p>
📚 About SkillNest

SkillNest is a modern EdTech learning platform where instructors can create and publish courses while students can explore, enroll, and learn from those courses through a clean and interactive dashboard.

This repository contains the frontend application responsible for the entire user interface and user experience of the platform.

The frontend communicates with backend APIs to manage:

authentication

course browsing

course creation

enrollments

dashboards

🌐 Live Demo
🚀 Frontend Deployment

🔗 https://skill-nest-frontend-eight.vercel.app

Deployed using Vercel

📑 Table of Contents
1️⃣ Project Overview
2️⃣ Features
3️⃣ User Roles
4️⃣ Tech Stack
5️⃣ Application Architecture
6️⃣ Folder Structure
7️⃣ State Management
8️⃣ Routing System
9️⃣ Course Creation Workflow
🔟 API Integration
1️⃣1️⃣ Installation Guide
1️⃣2️⃣ Environment Variables
1️⃣3️⃣ Screenshots
1️⃣4️⃣ Future Improvements
1️⃣5️⃣ Author
🧠 Project Overview

SkillNest simulates the functionality of modern online learning platforms where:

👨‍🎓 Students

Students can:

browse courses

enroll in courses

watch lectures

track learning progress

manage their profile

👨‍🏫 Instructors

Instructors can:

create new courses

upload video lectures

organize course content

track student enrollments

monitor course statistics

✨ Features
🔐 Authentication System

SkillNest includes a secure authentication system.

Users can:

register with email verification

login securely

reset forgotten passwords

logout safely

Authentication is handled using JWT tokens.

📚 Course Catalog

Students can explore courses available on the platform.

Features include:

category based browsing

detailed course information

instructor information

course pricing

🎓 Student Dashboard

The student dashboard provides a personal learning environment.

Students can:

view enrolled courses

access lecture videos

track learning progress

manage their profile

👨‍🏫 Instructor Dashboard

The instructor dashboard provides tools to manage courses.

Instructors can:

create courses

edit course details

add sections and lectures

publish or unpublish courses

track student enrollments

view analytics

📊 Instructor Analytics

The dashboard provides important insights such as:

total courses created

total students enrolled

course-wise student distribution

Analytics are visualized using charts.

🏗 Application Architecture

SkillNest frontend follows a component-based architecture.

Application Flow:

User
   ↓
React Frontend
   ↓
REST API Calls
   ↓
Backend Server
   ↓
Database

This architecture ensures scalability and maintainability.

⚙️ Tech Stack
🖥 Frontend

⚛ React

🧠 Redux

🔀 React Router

🎨 Tailwind CSS

📦 Additional Libraries

React Hook Form → form validation

Axios → API communication

React Hot Toast → notifications

Chart.js → analytics visualization

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
🧠 State Management

SkillNest uses Redux for centralized state management.

authSlice

Handles:

user authentication

login/logout

JWT token storage

profileSlice

Handles:

user profile data

profile updates

courseSlice

Handles:

course creation

course editing

course publishing

🔀 Routing System

Routing is handled using React Router.

Important routes include:

/                → Home Page
/login           → Login
/signup          → Registration
/catalog         → Course Catalog
/course/:id      → Course Details
/dashboard       → Dashboard
/dashboard/add-course
/dashboard/my-courses

Protected routes ensure that only authenticated users can access dashboard features.

🎯 Course Creation Workflow

Course creation is divided into three steps.

1️⃣ Course Information

Instructor adds:

course title

description

category

price

thumbnail

2️⃣ Course Builder

Instructor structures the course:

sections

subsections

lecture videos

3️⃣ Publish Course

Instructor can:

save course as draft

publish course

🔌 API Integration

Frontend communicates with backend using REST APIs.

API operations include:

authentication

fetching courses

creating courses

uploading media

retrieving dashboards

Requests are handled using Axios.

💻 Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/skillnest-frontend.git
2️⃣ Navigate to Project
cd skillnest-frontend
3️⃣ Install Dependencies
npm install
4️⃣ Start Development Server
npm start

Application runs on:

http://localhost:3000
🔑 Environment Variables

Create .env file:

REACT_APP_BASE_URL=http://localhost:4000/api/v1
📸 Screenshots
🏠 Home Page

(Add Screenshot)

👨‍🏫 Instructor Dashboard

(Add Screenshot)

🛠 Course Builder

(Add Screenshot)

🚀 Future Improvements

Planned improvements include:

payment integration using Razorpay

certificate generation

course recommendation system

advanced analytics

student progress tracking

👩‍💻 Author

Saniya

SkillNest demonstrates strong full-stack development capabilities including:

frontend architecture

dashboard design

API integration

scalable system design
