import { StyleSheet } from 'react-native';

import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

export default function AppNameLogo() {
    return (
        <ThemedView
            stylesOverride={ styles.container }
        >
            <ThemedText
                type="title"
                stylesOverride={ styles.title }
            >
                PlaniFi
            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: '500',
        lineHeight: 55,
    },
});