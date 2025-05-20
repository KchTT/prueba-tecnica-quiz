import { COLOR_BLANCO } from '@/constants/Colors';
import QuizzProvider from '@/context/QuizzContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, 
      },
    },
  })

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <QuizzProvider>
        <ThemeProvider value={colorScheme === 'dark' ? /*DarkTheme*/ DefaultTheme : DefaultTheme}>
          <Stack screenOptions={{ contentStyle: { backgroundColor: COLOR_BLANCO} }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="quizz" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </QuizzProvider>
    </QueryClientProvider>
  );
}
