import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppNameLogo from './AppNameLogo';
import ImageLogo from './ImageLogo';
import ThemedView from './ThemedView';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function Header() {
    const backgroundColor = useThemeColor({}, 'background');

    return (
        <SafeAreaView
            style={[
                styles.headerContainer,
                { backgroundColor },
            ]}
            edges={[
                'top',
                'bottom'
            ]}
        >
            <ThemedView
                style={ styles.viewContainer }
            >
                <ImageLogo />
                <AppNameLogo />
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 6,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    viewContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    border: {
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: 6,
    },
});
