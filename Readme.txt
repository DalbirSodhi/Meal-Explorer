MEAL EXPLORER

Project Description: 

Meal Explorer is a React Native application built using Expo Router. The application allows users to select a meal category, view meals from TheMealDB API, select a meal, and view detailed recipe information.

Setup Instructions

1. Download or clone the project repository.
2. Open the project folder in VS Code.
3. Open the terminal inside the project folder.
4. Install the required dependencies:

npm install

5. Start the Expo development server:

npx expo start -c

6. Open the application using Expo Go, an iOS simulator, or an Android emulator.

API Used

TheMealDB API

API Documentation:
https://www.themealdb.com/api.php

API Endpoints Used:

1. Filter meals by category:

https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken

The selected category is added dynamically to the API URL.

2. Get meal details using the selected meal ID:

https://www.themealdb.com/api/json/v1/1/lookup.php?i=MEAL_ID

The detail screen performs its own API request using the selected meal ID.

Features Implemented

- Home screen with Chicken, Beef, and Vegetarian categories
- Fetches meal information from a public API
- Displays meals using FlatList
- Allows users to select a meal
- Displays a separate meal detail screen
- Detail screen performs its own API request using the selected meal ID
- Passes parameters between screens using Expo Router
- Uses useState and useEffect
- Uses Pressable for user interaction
- Uses ActivityIndicator while API data is loading
- Displays meal images, names, categories, areas, and cooking instructions
- Includes a reusable MealCard component
- Uses StyleSheet for application styling
- Includes basic error handling
- Uses an organized file structure with separate screens and components

Stretch Goal Completed

Better UI Design

The application includes a consistent food-themed color palette, styled category buttons, rounded meal cards, larger meal images, shadows, improved spacing, and matching background colors across all screens.