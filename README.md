# 🚀 SkillNest Frontend

<p align="center">
  <b>Modern EdTech Platform UI</b><br/>
  Built with React, Redux & Tailwind CSS
</p>

<p align="center">
  <a href="https://skill-nest-frontend-eight.vercel.app">
    <img src="https://img.shields.io/badge/Live Demo-Click Here-blue?style=for-the-badge&logo=vercel"/>
  </a>
</p>

---

## 📌 Table of Contents

* [🧠 Overview](#-overview)
* [📚 About SkillNest](#-about-skillnest)
* [✨ Features](#-features)
* [👥 User Roles](#-user-roles)
* [⚙️ Tech Stack](#️-tech-stack)
* [🏗️ Architecture](#️-architecture)
* [📁 Folder Structure](#-folder-structure)
* [🧠 State Management](#-state-management)
* [🔀 Routing System](#-routing-system)
* [🎯 Course Creation Workflow](#-course-creation-workflow)
* [🔌 API Integration](#-api-integration)
* [⚡ Installation](#-installation)
* [🔐 Environment Variables](#-environment-variables)
* [🚀 Future Improvements](#-future-improvements)
* [👨‍💻 Author](#-author)

---

## 🧠 Overview

SkillNest Frontend is the **user interface layer** of the SkillNest EdTech platform.

It provides a smooth and interactive experience for:

* Students to learn and track progress
* Instructors to create and manage courses

---

## 📚 About SkillNest

SkillNest is a modern **EdTech learning platform** where:

* 👨‍🏫 Instructors can create and publish courses
* 👨‍🎓 Students can explore, enroll, and learn

The frontend communicates with backend APIs to manage:

* Authentication
* Course browsing
* Course creation
* Enrollments
* Dashboards

---

## ✨ Features

### 🔐 Authentication System

* Email-based registration with verification
* Secure login & logout
* Password reset functionality
* JWT-based authentication

### 📚 Course Catalog

* Category-based browsing
* Detailed course pages
* Instructor information
* Course pricing

### 🎓 Student Dashboard

* View enrolled courses
* Watch lecture videos
* Track progress
* Manage profile

### 👨‍🏫 Instructor Dashboard

* Create & edit courses
* Add sections & lectures
* Publish/unpublish courses
* Track enrollments

### 📊 Instructor Analytics

* Total courses created
* Student enrollments
* Course-wise analytics
* Charts & visual insights

---

## 👥 User Roles

### 👨‍🎓 Students

* Browse courses
* Enroll & learn
* Track progress
* Manage profile

### 👨‍🏫 Instructors

* Create courses
* Upload lectures
* Manage content
* Monitor performance

---

## ⚙️ Tech Stack

### 🖥 Frontend

* ⚛ React
* 🧠 Redux
* 🔀 React Router
* 🎨 Tailwind CSS

### 📦 Libraries

* React Hook Form → Form validation
* Axios → API communication
* React Hot Toast → Notifications
* Chart.js → Data visualization

---

## 🏗️ Architecture

```
User
   ↓
React Frontend
   ↓
REST API Calls
   ↓
Backend Server
   ↓
Database
```

---

## 📁 Folder Structure

```
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
```

---

## 🧠 State Management

SkillNest uses **Redux** for centralized state management.

### authSlice

* User authentication
* Login / Logout
* JWT token storage

### profileSlice

* User profile data
* Profile updates

### courseSlice

* Course creation
* Course editing
* Course publishing

---

## 🔀 Routing System

Routing is handled using **React Router**.

### Important Routes

```
/                → Home Page
/login           → Login
/signup          → Registration
/catalog         → Course Catalog
/course/:id      → Course Details
/dashboard       → Dashboard
/dashboard/add-course
/dashboard/my-courses
```

Protected routes ensure only authenticated users access dashboards.

---

## 🎯 Course Creation Workflow

### 1️⃣ Course Information

* Title
* Description
* Category
* Price
* Thumbnail

### 2️⃣ Course Builder

* Sections
* Subsections
* Lecture videos

### 3️⃣ Publish Course

* Save as draft
* Publish course

---

## 🔌 API Integration

Frontend communicates with backend using **REST APIs**.

### Operations:

* Authentication
* Fetching courses
* Creating courses
* Uploading media
* Dashboard data

Handled using **Axios**.

---

## ⚡ Installation

```bash
git clone https://github.com/your-username/skillnest-frontend.git
cd skillnest-frontend
npm install
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

---

## 🚀 Future Improvements

* 💳 Razorpay Payment Integration
* 🎓 Certificate Generation
* 🤖 Course Recommendation System
* 📊 Advanced Analytics
* 📈 Student Progress Tracking

---

## 👨‍💻 Author

**Saniya Mane**

* 🎓 CSE Student
* 💼 Aspiring Developer


