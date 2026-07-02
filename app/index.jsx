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
        Discover delicious recipes for every craving
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
    backgroundColor: "#FFF8F0",
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D35400",
    marginBottom: 20,
    marginTop: 10,
    paddingTop: 10,
  },

  subtitle: {
    fontSize: 17,
    color: "#555555",
    marginBottom: 32,
    paddingTop: 40,
  },

  button: {
    width: "100%",
    backgroundColor: "#E67E22",
    paddingVertical: 26,
    borderRadius: 20,
    marginBottom: 44,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});