# Literal-View

## Project Overview
Literal-View is a modern web application built using React, TailwindCSS, and Firebase. The app features a dynamic user interface that allows users to sign up, browse movies, and get personalized movie recommendations using GPT technology.

## Setup and Configuration

### Initial Setup
- **Create React App**: Initialized the project using Create React App.
- **Configured TailwindCSS**: Added TailwindCSS for styling.

### Core Components
- **Header**: Implemented a responsive header with navigation.
- **Login Form**: Created a login form with validation.

### Routing
- **Routing of App**: Configured routing to navigate between different pages.

### Firebase Integration
- **Firebase Setup**: Set up Firebase for authentication and data storage.
- **Deploying our app to production**: Deployed the app using Firebase Hosting.

## Features

### Authentication
- **Create SignUp User Account**: Implemented user registration.
- **Implement Sign In user API**: Added user login functionality.
- **Created Redux Store with userSlice**: Managed user state with Redux.
- **Implemented Sign out**: Provided functionality for user sign out.
- **Update Profile**: Allowed users to update their profiles.

### Movie Data Integration
- **Fetch Movie Card from TMDB**: Integrated with TMDB API to fetch movie data.
- **Unsubscribed to the onAuthStateChanged callback**: Managed user session properly.
- **Added hardcoded values to the constants file**: Centralized configuration values.

### TMDB API
- **Register TMDB API & create an app & get access token**: Set up TMDB API access.
- **Get Data from TMDB now playing movies list API**: Fetched data for now playing movies.
- **Custom Hook for Now Playing Movies**: Created a custom hook to manage now playing movies data.
- **Create movieSlice**: Added a slice in Redux store for movie data.
- **Update Store with movies Data**: Stored fetched movie data in Redux store.

### UI Components
- **Main Container & Secondary Container**: Planned and built primary layout components.
- **Fetch Data for Trailer Video**: Integrated trailer video fetch functionality.
- **Update Store with Trailer Video Data**: Managed trailer video data in store.
- **Embedded the YouTube video and make it autoplay and mute**: Integrated video playback.
- **Tailwind Classes to make Main Container look awesome**: Styled the main container using Tailwind CSS.
- **Built Secondary Component**: Created a secondary container for additional content.
- **Built Movie List**: Displayed list of movies.
- **Built Movie Card**: Displayed individual movie cards.

### User Experience
- **TMDB Image CDN URL**: Utilized TMDB CDN for movie posters.
- **Made the Browser page with Tailwind CSS**: Styled the browser page.
- **usePopularMovies Custom hook**: Created a custom hook for fetching popular movies.

### GPT Integration
- **GPT Search Page for movie recommendation system**: Built a search page using GPT.
- **GPT Search Bar**: Created a search bar for user input.
- **Multi-language Feature in our App**: Added support for multiple languages.
- **Get Open AI API Key**: Integrated OpenAI for movie recommendations.
- **Gpt Search API Call**: Implemented API call for GPT search.
- **Fetched gptMoviesSuggestions from TMDB**: Retrieved movie suggestions based on GPT output.
- **Created gptSlice and added data**: Managed GPT movie data in Redux store.
- **Reused Movie List component to make movie suggestion container**: Displayed GPT movie suggestions.

### Optimization
- **Memoization**: Optimized components with memoization.
- **Added .env file**: Managed environment variables.
- **Added .env file to .gitignore**: Ensured sensitive data is not exposed in version control.
- **Responsiveness to some extent**: Enhanced the app’s responsiveness.

## Features

### Authentication
- **Login/Sign Up**: 
  - Sign In / Sign Up Form
  - Redirect to Browse Page

### Browse (After Authentication)
- **Header**
- **Main Movie**
  - Trailer in Background
  - Title and Description
  - Movie Suggestions
    - Movie Lists 

### GPT Integration
- **Search Bar**
- **Movie Suggestions**
