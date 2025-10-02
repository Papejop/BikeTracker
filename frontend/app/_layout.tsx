import { Stack } from "expo-router";

export default function RocdotLayout() {
  return ( 
  
  <Stack>
    <Stack.Screen name="index" />
    <Stack.Screen name="map" />
    <Stack.Screen name="login" />
  </Stack>

  );
}
