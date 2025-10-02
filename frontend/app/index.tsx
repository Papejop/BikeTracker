import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to easdasddit this screen!!!.</Text>
      <Link href={"/map"} style={styles.button}>open map</Link>
      <Link href={"/login"} style={styles.button}>login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    //color: "#fff",
  },
});
