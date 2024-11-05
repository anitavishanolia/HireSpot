CareerBloom-Hub
A Comprehensive Job Portal System


CareerBloom-Hub is an open-source job portal developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack, aiming to bridge the gap between students seeking jobs and recruiters offering opportunities.

Features
User Registration and Authentication:
Students and Recruiters can register on the portal.
Secure authentication mechanisms to protect user accounts.

Student View:
Register and create a profile by uploading personal information, resume, and other details.
Search for available jobs based on specific criteria (location, skills, company, etc.).
Apply for jobs and track application status.
Receive notifications about job application results (accepted/rejected).

Recruiter View:
Register and create new job postings.
View student applications, including detailed profiles and resumes.
Accept or reject applications, with real-time status updates to students.

Database (MongoDB):
Store user data (students, recruiters, admins).
Store job listings and applications.
Store application statuses and notifications.

Authorization and Role-Based Access Control (RBAC):
Differentiate access levels and permissions for students, recruiters, and admins.

Frontend (React.js):
User interfaces for students, recruiters, and admins.
Search functionality for students to find jobs.
Job application forms for students.
Job creation and management forms for recruiters.

Backend (Node.js and Express.js):
APIs for user registration, authentication, and authorization.
Manage job creation, student applications, and recruiter approvals.
Handle real-time updates and notifications.
Real-Time Updates:
Implement real-time activity updates using a notification system for job applications and recruiter decisions.

Security:
Secure authentication and authorization.
Sanitize and validate user inputs to prevent security vulnerabilities.
Deployment:

The application is deployed on a cloud platform (versel and render).

Tech Stack
This project uses the following open-source projects to function properly:

[ReactJS] - For Frontend
[NodeJS] - For Backend
[MongoDB] - For the Database
[Cloudinary] - For storing resumes and profile pictures
[Materialize] - UI framework for modern web apps
[Express] - Fast node.js network app framework
Installation
This application requires Node.js v10+ to run.

Install the dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm run dev
For production environments:

bash
Copy code
npm install --production
NODE_ENV=production node app
Development
Want to contribute? Great! If you have any doubts or questions, feel free to ask and start contributing.






