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
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 78,
        paddingBottom: 16,
        paddingHorizontal: 10,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
});
