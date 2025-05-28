import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet } from 'react-native';

import ThemedView from './ThemedView';

const darkLogo = require('../assets/images/logo_dark.png');
const lightLogo = require('../assets/images/logo_light.png');

export default function ImageLogo() {
    const colorScheme = useColorScheme();

    return (
        <ThemedView stylesOverride={styles.container}>
            <Image
                source={ colorScheme === 'dark' ? darkLogo : lightLogo }
                style={ styles.logo }
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});