import { StyleSheet } from 'react-native';

import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

export default function AppNameLogo() {
    return (
        <ThemedView
            style={ styles.titleContainer }
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
    titleContainer: {
        paddingLeft: 10,
        height: 64,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        lineHeight: 64,
    },
});