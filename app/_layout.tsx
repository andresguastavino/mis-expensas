import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

import Header from '@/components/Header';
import ThemedView from '@/components/ThemedView';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider value={ colorScheme === 'dark' ? DarkTheme : DefaultTheme } >
                <ThemedView stylesOverride={ styles.container } >
                    <Stack screenOptions={{ header: () => <Header />, }} >
                        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
                    </Stack>
                    <StatusBar style="auto" />
                </ThemedView>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});