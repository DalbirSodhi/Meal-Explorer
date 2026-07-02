import { ActivityIndicator, Image, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function MealDetail() {
    // object destructuring to get the mealId from the search params
  const { mealId } = useLocalSearchParams();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMealDetails = async () => {
    // set loading to true before fetching the meal details
    setLoading(true);

    try {
      const response = await fetch(
        // fetch the meal details from the API using the mealId
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
    // parse the response as JSON 
      const data = await response.json();
    //   set the meal state to the first meal in the response data
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);

    } finally {
     // set loading to false after fetching the meal details
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealDetails();
  }, [mealId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E67E22" />
        <Text>Loading meal details...</Text>
      </SafeAreaView>
    );
  }

  if (!meal) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Meal details not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: meal.strMealThumb }}
          style={styles.image}
        />

        <Text style={styles.title}>
          {meal.strMeal}
        </Text>

        <Text style={styles.info}>
          Category: {meal.strCategory}
        </Text>

        <Text style={styles.info}>
          Area: {meal.strArea}
        </Text>

        <Text style={styles.heading}>
          Instructions
        </Text>

        <Text style={styles.instructions}>
          {meal.strInstructions}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF8F0"
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },

  info: {
    fontSize: 16,
    marginBottom: 8,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 8,
  },

  instructions: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});