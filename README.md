SkillNest Frontend

SkillNest is a modern EdTech learning platform that allows instructors to create and publish courses while students can explore, purchase, and learn from those courses through an interactive dashboard.

This repository contains the frontend application of SkillNest built using modern web technologies to deliver a responsive and interactive learning experience.

The application communicates with the SkillNest backend APIs to handle authentication, course management, enrollment, and user dashboards.

Live Demo

Frontend Deployment:

https://skill-nest-frontend-eight.vercel.app

Deployed using

Vercel

Project Overview

SkillNest aims to replicate the core functionality of popular online learning platforms by providing two primary user roles:

Student

Students can browse available courses, enroll in them, and track their learning progress through a personalized dashboard.

Instructor

Instructors can create, edit, and publish courses while monitoring student enrollments and course statistics.

The frontend is responsible for delivering the user interface, handling state management, and interacting with backend APIs.

Key Features
Authentication System

SkillNest includes a secure authentication system.

Users can:

Register with email verification

Login securely

Reset forgotten passwords

Logout safely

Authentication is handled using JWT tokens stored securely in the application state.

Course Catalog

Students can browse all available courses in the platform.

Features include:

Category-based course listing

Course cards displaying price, rating, and instructor

Course detail page with description and curriculum

Student Dashboard

The student dashboard provides a personalized learning space.

Students can:

View enrolled courses

Access course content

Track learning progress

Watch course videos

Manage profile information

Instructor Dashboard

The instructor dashboard provides powerful tools to manage teaching content.

Instructors can:

Create new courses

Add course sections and subsections

Upload lecture videos

Publish or unpublish courses

Track student enrollments

Monitor course statistics

Course Builder

The Course Builder allows instructors to structure courses into:

Sections

Subsections

Video lectures

Each course contains:

Course information

Course content

Publish settings

Instructor Analytics

The instructor dashboard provides insights such as:

Total courses created

Total enrolled students

Course-wise student distribution

Analytics are visualized using charts for better understanding.

Responsive Design

SkillNest is fully responsive and works across:

Desktop

Tablet

Mobile devices

This ensures a consistent learning experience on all screen sizes.

Tech Stack

The frontend application is built using modern JavaScript technologies.

Core Technologies

React – Component-based UI library

Redux – Global state management

React Router – Client-side routing

Tailwind CSS – Utility-first CSS framework

Additional Libraries

React Hook Form – Form handling and validation

React Hot Toast – Notifications and alerts

Chart.js – Dashboard data visualization

Axios – API communication with backend
