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
    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },

  mealName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});