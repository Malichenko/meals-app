import { MealModel } from "@entities/meal";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { FC } from "react";
import theme from "@shared/config/theme";
import {
  MealInfo,
  RecipeSectionTitle,
  RecipeListItem,
  List,
  RecipeSection,
} from "./components";
import { getKey } from "@shared/utils/key-extractor";

interface Props {
  meal: MealModel;
}

export const Meal: FC<Props> = ({ meal }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />

      <View style={styles.caption}>
        <MealInfo
          title={meal.title}
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />

        <View style={styles.recipe}>
          <RecipeSection>
            <RecipeSectionTitle>Ingredients:</RecipeSectionTitle>

            <List
              style={styles.recipeList}
              items={meal.ingredients}
              renderItem={({ item }) => <RecipeListItem text={`\u2013 ${item}`} />}
              keyExtractor={getKey}
            />
          </RecipeSection>

          <RecipeSection>
            <RecipeSectionTitle>Steps:</RecipeSectionTitle>

            <List
              style={styles.recipeList}
              items={meal.steps}
              renderItem={({ item, index }) => (
                <RecipeListItem text={`${index + 1}. ${item}`} />
              )}
              keyExtractor={getKey}
            />
          </RecipeSection>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: theme.spacing.x4,
  },
  image: {
    width: "100%",
    height: 250,
  },
  caption: {
    padding: theme.spacing.x1,
    backgroundColor: theme.palette.neutral[10],
  },
  recipe: {
    paddingHorizontal: theme.spacing.x2,
    paddingVertical: theme.spacing.x3,
    gap: theme.spacing.x2,
  },
  recipeList: {
    gap: theme.spacing.x1,
  },
});
