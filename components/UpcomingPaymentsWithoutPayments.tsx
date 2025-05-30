import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

export default function UpcomingPaymentsWithoutPayments() {
    return (
        <ThemedView>
            <ThemedText type="defaultSemiBold" stylesOverride={{ marginTop: 8, }} >
                Sin pagos próximos en este momento...
            </ThemedText>
        </ThemedView>
    );
}