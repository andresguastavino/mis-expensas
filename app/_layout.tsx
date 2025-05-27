import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';

import Header from '@/components/Header';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack
                      screenOptions={{
                        header: () => <Header />,
                      }}
                    >
                        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
                    </Stack>
                    <StatusBar style="auto" />
                </SafeAreaView>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
