import { StyleSheet } from 'react-native';

import Summary from '@/components/Summary';
import ThemedView from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ThemedView stylesOverride={ styles.container } >
            <Summary />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 140,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
