// db/models/User.ts
interface User {
    id: string;
    email: string;
    password: string; // Hashed password
    name: string;
    // Additional fields:
    profilePictureUrl?: string; // URL to the user's profile picture
    bio?: string; // User's bio or description
    friends: string[]; // Array of user IDs representing friends
    courses: string[]; // Array of course IDs the user is enrolled in
    // Add more fields as needed for your project's features
  }
  
  
  // db/models/Course.ts
  interface Course {
    id: string;
    name: string;
    // Add other course-related fields as needed.
  }
  
  // db/models/Timetable.ts
  interface Timetable {
    id: string;
    userId: string;
    courseId: string;
    // Add other timetable-related fields as needed.
  }
  