import { Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {
  const categories = ["Chicken", "Beef", "Vegetarian"];

 const goToList = (category) => {
    router.push({
      pathname: "/meal-list",
      params: { category: category },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meal Explorer</Text>

      <Text style={styles.subtitle}>
        Pick a category
      </Text>

      {categories.map((category) => (
        <Pressable
          key={category}
          style={styles.button}
          onPress={() => goToList(category)}
        >
          <Text style={styles.buttonText}>
            {category}
          </Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginBottom: 12,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});