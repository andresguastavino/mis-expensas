import { StyleSheet } from 'react-native';

import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import UpcomingPaymentsWithPayments from './UpcomingPaymentsWithPayments';
import UpcomingPaymentsWithoutPayments from './UpcomingPaymentsWithoutPayments';

import { PaymentType } from '../types/Payment';

export default function UpcomingPayments() {

    const payments : PaymentType[] = [
        {
            name: 'Préstamo personal',
            dueDate: '15 de abril',
            amount: 500,
        },
        {
            name: 'Tarjeta de crédito',
            dueDate: '22 de abril',
            amount: 300,
        },
        {
            name: 'Tarjeta de pago',
            dueDate: '25 de abril',
            amount: 20,
        },
        {
            name: 'Prestamo',
            dueDate: '31 de abril',
            amount: 1000,
        },
        {
            name: 'Pamplinas',
            dueDate: '5 de Mayo',
            amount: 500,
        },
    ];

    return (
        <ThemedView style={ styles.container } >
            <ThemedText type="subtitle" >
                Próximos pagos
            </ThemedText>
            {
                payments?.length 
                    ? <UpcomingPaymentsWithPayments payments={ payments } />
                    : <UpcomingPaymentsWithoutPayments />
            }
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30
    },
});