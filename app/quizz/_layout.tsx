import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: 'transparent'} }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="user" options={{ headerShown: false }} />
       <Stack.Screen name="success" options={{ headerShown: false }} />
    </Stack>
  );
}
