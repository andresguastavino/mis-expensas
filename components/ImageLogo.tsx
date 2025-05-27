import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet } from 'react-native';

const darkLogo = require('../assets/images/logo_dark.png');
const lightLogo = require('../assets/images/logo_light.png');

export default function ImageLogo() {
    const colorScheme = useColorScheme();

    return (
        <Image
            source={ colorScheme === 'dark' ? darkLogo : lightLogo }
            style={ styles.logo }
        />
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 64,
        height: 64,
    },
});