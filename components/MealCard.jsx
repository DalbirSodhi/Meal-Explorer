import { Image, Pressable, StyleSheet, Text } from "react-native";

export default function MealCard({ meal, onPress }) {
  const mealName = meal.strMeal;
  const mealImage = meal.strMealThumb;

  return (
  <Pressable style={styles.card} onPress={onPress}>
    <Image
      source={{ uri: mealImage }}
      style={styles.image}
    />

    <Text style={styles.mealName}>
      {mealName}
    </Text>

    <Text style={styles.arrow}>›</Text>
  </Pressable>
);
}


const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    minHeight: 110,
    shadowColor: "#000000",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 16,
  },
  mealName: {
    flex: 1,
    fontSize: 19,
    fontWeight: "600",
    color: "#333333",
  },

  arrow: {
    fontSize: 10,
    color: "#E67E22",
    marginLeft: 8,
  },
});