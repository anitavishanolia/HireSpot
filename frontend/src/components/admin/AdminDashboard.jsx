// src/components/RecruiterDashboard.jsx

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';  // Import the socket.io-client library

const socket = io('http://localhost:3000');  // Connect to the backend server with Socket.io

const adminDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for the 'job-applied' event from the server
    socket.on('job-applied', (data) => {
      console.log('New job application received:', data);

      // Update notifications state with the new job application data
      setNotifications((prev) => [...prev, data]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off('job-applied');  // Remove the listener for the event
      socket.disconnect();  // Disconnect the socket when the component unmounts
    };
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div>
        <h2>Job Applications Notifications:</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification.studentName} applied for job ID: {notification.jobId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default adminDashboard;
