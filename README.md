# MERN Web Content Management System

## Overview

Welcome to my own WCMS (Web Content Management System) project! A WCMS is a software system used to manage and control a website's content, allowing users to create, edit, and publish content without requiring technical knowledge of web programming.

## Technology Stack

My WCMS is built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This full-stack application is entirely written in JavaScript, providing a robust and efficient platform for content management.

## Features

This application enables users to create and manage content easily through an interactive dashboard. Key features include:

- **Content Creation**: Users can create blog posts and manage all content effortlessly.
- **User Authentication**: Users can create accounts or log in with Google to comment on posts and like comments from other users.
- **User Roles**: The system allows users to be assigned as administrators, granting them the ability to create posts and manage content.

## Purpose

My WCMS project aims to simplify the process of managing website content, providing a user-friendly interface for content creators and administrators. With intuitive features and seamless integration with the MERN stack, this application empowers users to create and manage engaging content effectively.

## Pages Overview

### Home
On the home page, users are greeted with a brief overview of the project, followed by a call to action showcasing any products or services related to the company or individual using the WCMS. Additionally, users can find a grid displaying the latest posts added to the website.

### Common User Pages

#### Sign In & Log In
Users can authenticate their account or create a new one on the sign-in and log-in pages. They can also register with a Google account for easy login in the future.

#### About & Projects
The About and Projects pages contain presentations of user objectives, information about administrators, and details about other products related to the company or individual managing the website.

#### Post Page
On each post page, users can view the post title, category, image, and text in a visually appealing design. They can also find a promotional call to action and a comment section that allows users to like comments. Additionally, cards provide more post suggestions.

#### Profile Page
On the profile page, users can update their information. A profile picture upload bar shows when the image was uploaded, and users can also delete their account.

### Admin Pages

#### Dashboard Page
Administrators have access to additional pages by clicking on their profile, allowing them to create posts, manage comments, administer posts, and track website information on a modern dashboard displaying various website metrics simultaneously.

#### Posts Page
On the posts page, administrators can view a table with all posts added and edit or delete a post if desired. Posts are displayed by creation date, and nine posts are loaded at a time.

#### Users Page
The users page displays a list of all users, indicating whether they are admins or not. Administrators can delete a user if needed.

#### Comments Page
The comments page lists all comments, organized by creation order, and loads nine at a time. Administrators can delete unwanted comments if necessary.

All pages feature an **interactive header** and **footer** that adapt to mobile screens and display real-time user information if logged in.

## Repository Structure

The codebase is divided into two main repositories: `client` for the frontend and `api` for the backend.

### Client Repository
- **Frontend**: Developed using Vite + React 18.2.48, providing a modern and efficient user interface.
- **Styling**: Tailwind CSS 3.4.1 is used for styling, offering a utility-first CSS framework that helps in creating elegant, responsive designs with minimal effort.
- **Icons**: Icons are sourced from the React Icons package (Font Awesome), adding visual elements to the user interface and improving usability.
- **State Management**: Redux Toolkit and Redux Persistor are employed for saving user and theme information, facilitating state management across multiple pages and components. Redux Toolkit simplifies the usage of Redux in complex React applications, while Redux Persistor ensures persistent storage of state data, crucial for maintaining user preferences and data consistency.
- **Flowbite/React**: A highly dynamic and interactive navbar is created using Flowbite-React, adapting seamlessly to various screen sizes. It also allows users to switch between light and dark themes according to their preferences, enhancing user experience and accessibility. It was also used to create the tables, inputs incredibly easily and incredibly stylish buttons.
- **react-circular-progressbar:** The profile picture and post image upload feature utilizes the react circular progressbar package, offering advantages such as visually appealing circular progress bars with customizable appearance and behavior. This enhances the user experience by providing clear feedback on upload progress, improving overall satisfaction and usability
- **Component-based approach:** The dashboad pages (profile, website data, users, posts and comments page) are dynamically loaded using simple components. In React, a component-based approach offers several advantages. It enhances reusability, promotes modularity, and facilitates scalability. Components organize code effectively, promote separation of concerns, and ultimately lead to a more maintainable and collaborative development process.

### Backend (API) Repository
- **Backend**: Built using Express.js 4.18.2, facilitating the creation of RESTful APIs and handling HTTP requests efficiently.
- **Database**: MongoDB is utilized with Mongoose, simplifying data modeling and interaction with the database. Mongoose aids in defining schemas, performing queries, and handling validations.
- **Authentication**: Dependencies like bcryptjs, jsonwebtoken, and cookie-parser are employed for user authentication and account creation. bcryptjs secures passwords by hashing them, jsonwebtoken generates authentication tokens, and cookie-parser parses cookies from HTTP requests.
- **Efficiency**: The backend efficiently handles encrypted authentication and storage of complex files, including images and different datasets, with relatively few lines of code. This minimalist approach maximizes the power of Node.js and Express.js in creating complex APIs.

### Additional Notes
- **Theme Switching**: The theme switching feature is implemented by creating a `themeSlice` using Redux, allowing users to seamlessly transition between light and dark themes. This enhances the modernity and comfort of the application, providing a personalized experience for users.

- **Development Process**: The project follows the structure and concepts presented in the 11-hour YouTube tutorial from the "React & Next.js Projects with Sahand" channel. Additional features, such as optimizing the mobile view with the Flowbite package for crating a Header/Footer and implementing theme switching with Redux Toolkit, Redux Persistor, and Tailwind CSS, were added to enhance functionality and user experience.

- ### Cloning the Backend Repository

1. **Clone the Repository**: Open your terminal and navigate to the directory where you want to clone the repository. Then, execute the following command:
    ```
    git clone https://github.com/igor32648/mern-wcms/
    ```

### Installing Dependencies

2. **Install Dependencies for Frontend**: Navigate to the frontend directory and install the dependencies:

    ```bash
    cd client
    npm install
    ```

3. **Install Dependencies for Backend**: Similarly, on the project root directory, install the dependencies:
    
     ```bash
     npm install
     ```

### Setting Up Environment Variables

4. **Create `.env` Files**: Inside the root and in client directory, create a new file named `.env`.

5. **Save Database and JWT Secret Variables**: In the root `.env` file, save the variables for database access and JWT secret like this:
    ```
    MONGO=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```
6. **Save the Firebase API key secret**: Within the client repository, create another `.env` file with your secret key for the Firebase API.
    ```
    VITE_FIREBASE_API_KEY=<your-firebase-api-key>

### Setting Up Firebase Configuration

7. **Create `firebase.js` File**: Inside the client directory, create a new file named `firebase.js`.

8. **Save Firebase Configuration**: In the `firebase.js` file, save the Firebase configuration for authentication and image storage like this:
    ```javascript
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/storage';

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: "<your-auth-domain>",
      projectId: "<your-project-id>",
      storageBucket: "<your-storage-bucket>",
      messagingSenderId: "<your-messaging-sender-id>",
      appId: "<your-app-id>"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    export const auth = firebase.auth();
    export const storage = firebase.storage();
    ```

### Running the Code

9. **Run Frontend**: In the client directory, start the frontend server:

    ```bash
    npm start
    ```

    This will start the frontend server on a default port (usually port 5173).

10. **Run Backend**: In the root directory, start the backend server:

    ```bash
    npm start
    ```

    This will start the backend server on a different port, usually port 3000.

### Accessing the Application

11. **Access the Application**: With both frontend and backend servers running, you can access the application in your web browser. Typically, the frontend will be accessible at `http://localhost:5173`, and the backend API endpoints will be accessible at `http://localhost:3000`.

### Setting the Databases

## Creating a MongoDB Account and Getting Access Link

1. **Create a MongoDB Account**: Go to the MongoDB website and create an account if you don't have one already.

2. **Get Database Access Link**: After logging in, create a new cluster and database. Once created, navigate to the "Connect" tab and copy the connection string.

## Creating a Firebase Account and Setting Up a Project

3. **Create a Firebase Account**: Go to the Firebase website and sign in with your Google account or create a new one.

4. **Set Up a Project**: Once logged in, click on "Add project" and follow the prompts to create a new Firebase project.

5. **Enable Authentication and Storage**: In your Firebase project dashboard, navigate to the "Authentication" section and enable Google sign-in. Then, go to the "Storage" section and enable storage for your project.

6. **Get Firebase Configuration**: In the Firebase project settings, you'll find the configuration details needed for `firebase.js`.

--- 
