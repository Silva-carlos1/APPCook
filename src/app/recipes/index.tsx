import { View, Text } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";


export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text >Ingredientes</Text>

      </View>
    </View>
  );
}
