# Read Journey

## Project Overview

**Read Journey** is an app designed to help you manage your book library, track
your reading progress, and discover recommended books. With both statistical and
diary-like views, it provides a seamless reading experience, supporting you
throughout your reading journey.

## Key Features

- **Home Page**: Upon login, registered users are directed to the "Home" page,
  where you can explore a collection of recommended books. The page includes a
  sorting form to filter books by title or author. You can also add recommended
  books to your personal library.
  ![Home page](https://github.com/Natalia-Kalashnikova/ReadJourney/blob/main/src/assets/Screenshot_home_page.jpg)

- **My Library**: The "My Library" page displays all the books you've added. You
  can easily manage your collection and add new titles. Each book in your
  library is clickable and leads to a detailed reading page.
  ![Home page](https://github.com/Natalia-Kalashnikova/ReadJourney/blob/main/src/assets/Screenshot_library_page.jpg)

- **Reading Page**: On the reading page, you'll find a page number input to
  track your progress, along with reading statistics to monitor how much you've
  read. The reading page gives you insights into your reading habits and helps
  you stay on track.
  ![Home page](https://github.com/Natalia-Kalashnikova/ReadJourney/blob/main/src/assets/Screenshot_reading_page.jpg)

- **Progress Tracking**: Read Journey offers a visual representation of your
  reading progress, allowing you to easily see how much you’ve read and how much
  is left. You can also mark milestones, making the reading process more
  engaging.
  ![Home page](https://github.com/Natalia-Kalashnikova/ReadJourney/blob/main/src/assets/Screenshot_treker_page.jpg)

## How to Use

1. **Login/Signup**: Create an account or log in to start your reading journey.
2. **Explore Recommendations**: Browse through a collection of books recommended
   based on your interests, and sort them by title or author.
3. **Build Your Library**: Add books you like to your personal library, and
   manage them with ease.
4. **Track Progress**: Use the page number input to keep track of your reading
   progress. View detailed statistics on the time spent reading and pages
   completed.

## Technologies Used

**Read Journey** features a fully responsive design with specific breakpoints
for various devices, ensuring an optimal user experience across different screen
sizes. Below are the key technologies used in the project:

- **React**: For building the user interface.
- **Vite**: As the project bundler and local server.
- **React Router**: For navigation between different pages.
- **React Redux**: For handling application state.
- **Redux Toolkit**: For state management.
- **Axios**: For making HTTP requests.
- **React Router**: For navigation between different pages.
- **React Toastify**: For displaying notifications.
- **React Loader Spinner**: For loading indicators.
- **Styled-components**: For UI styling.
- **Axios**: A promise-based HTTP client for making API requests, used for
  communication with the backend.
- **RC Progress**: For progress bar component for React, used to visually
  indicate reading progress.
- **React Responsive**: For building responsive designs.

## Getting Started

### Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js**
- **npm**

### Steps to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/Natalia-Kalashnikova/ReadJourney
   ```
2. **Install dependencies**
   ```bash
   cd readJourney
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Build the project for production**
   ```bash
   npm run build
   ```
5. **Preview the production build**
   ```bash
   npm run preview
   ```
6. **Run code linting**
   ```bash
   npm run lint
   ```

## Contributing

We welcome contributions to make **Read Journey** even better! If you'd like to
contribute, please fork the repository, create a new branch, and submit a pull
request.
