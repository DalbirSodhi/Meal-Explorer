import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";

export default function MealList() {
    const { category } = useLocalSearchParams();

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMeals = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );

            const data = await response.json();

            setMeals(data.meals);
        } catch (error) {
            console.error("Error fetching meals:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMeals();
    }, [category]);

    const openMealDetails = (mealId) => {
        router.push({
            pathname: "/meal-detail",
            params: { mealId: mealId },
        });
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E67E22" />
                <Text>Loading meals...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{category} Meals</Text>

            <FlatList
                data={meals}
                keyExtractor={(item) => item.idMeal}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <MealCard
                        meal={item}
                        onPress={() => openMealDetails(item.idMeal)}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D35400",
    marginBottom: 18,
  },

  listContent: {
    paddingBottom: 20,
  },
});