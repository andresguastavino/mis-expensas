import { StyleSheet } from 'react-native';


import AppNameLogo from './AppNameLogo';
import ImageLogo from './ImageLogo';
import ThemedView from './ThemedView';

export default function Header() {

    return (
        <ThemedView
            style={ styles.header }
        >
            <ImageLogo />
            <AppNameLogo />
            {/* <ThemeSwitch /> */}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
});
