import { Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Summary from '@/components/Summary';
import ThemedView from '@/components/ThemedView';
import UpcomingPayments from '@/components/UpcomingPayments';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <ThemedView stylesOverride={[ styles.container, { paddingTop: Platform.OS === 'web' ? 22 : insets.top + 64 } ]} >
            <Summary />
            <UpcomingPayments />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
});
