
// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";
// import { createServer } from "http";  // To create the HTTP server
// import { Server } from "socket.io";  // Socket.io server

// dotenv.config({});

// const app = express();

// // Create an HTTP server for Socket.io
// const server = createServer(app);
// const io = new Server(server);  // Initialize Socket.io

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   'https://career-bloom-hub.vercel.app/',
//   credentials: true,
// };
// app.use(cors(corsOptions));

// // Store connected recruiters
// let connectedRecruiters = {};

// // Socket.io connection logic
// io.on('connection', (socket) => {
//   console.log('A recruiter connected:', socket.id);

//   // Add recruiter to the connected recruiters list
//   connectedRecruiters[socket.id] = socket;

//   // Handle recruiter disconnect
//   socket.on('disconnect', () => {
//     delete connectedRecruiters[socket.id];
//     console.log('Recruiter disconnected:', socket.id);
//   });
// });

// // API routes
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

// // Sample route for applying to a job (notifies all recruiters)
// app.post('/apply-job', (req, res) => {
//   const { jobId, studentName } = req.body;

//   // Emit a job-applied event to all connected recruiters
//   io.emit('job-applied', { jobId, studentName });

//   res.status(200).send('Application received and recruiter notified');
// });

// // Start the server with Socket.io
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   connectDB();
//   console.log(`Server running at port ${PORT}`);
// });


import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import { createServer } from "http";  // To create the HTTP server
import { Server } from "socket.io";  // Socket.io server

dotenv.config({});

const app = express();

// Create an HTTP server for Socket.io
const server = createServer(app);
const io = new Server(server);  // Initialize Socket.io

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',  // For local development
    'https://career-bloom-hub.vercel.app'  // Your deployed frontend URL
  ],
  credentials: true,  // To allow cookies
};
app.use(cors(corsOptions));

// Store connected recruiters
let connectedRecruiters = {};

// Socket.io connection logic
io.on('connection', (socket) => {
  console.log('A recruiter connected:', socket.id);

  // Add recruiter to the connected recruiters list
  connectedRecruiters[socket.id] = socket;

  // Handle recruiter disconnect
  socket.on('disconnect', () => {
    delete connectedRecruiters[socket.id];
    console.log('Recruiter disconnected:', socket.id);
  });
});

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Sample route for applying to a job (notifies all recruiters)
app.post('/apply-job', (req, res) => {
  const { jobId, studentName } = req.body;

  // Emit a job-applied event to all connected recruiters
  io.emit('job-applied', { jobId, studentName });

  res.status(200).send('Application received and recruiter notified');
});

// Start the server with Socket.io
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
