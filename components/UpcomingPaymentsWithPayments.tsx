import { StyleSheet } from 'react-native';

import ThemedText from './ThemedText';
import UpcomingPayment from './UpcomingPayment';
import ThemedView from './ThemedView';

import { PaymentType } from '../types/Payment';

export type UpcomingPaymentsWithoutPayments = {
    payments: PaymentType[];
}

export default function UpcomingPaymentsWithPayments({
    payments = []
}: UpcomingPaymentsWithoutPayments) {
    return (
        <>
            {
                payments?.slice(0, 3)?.map(({ name, dueDate, amount }, i) => 
                    <UpcomingPayment
                        key={ i }
                        name={ name }
                        dueDate={ dueDate }
                        amount={ amount }
                    />
                )
            }
            {
                payments?.length > 3 && (
                    <ThemedText type="link" stylesOverride={{ textAlign: 'right', fontWeight: 'bold', color: '#4A9066', marginTop: 5, }}>
                        > Ir al Calendario para ver todos los pagos
                    </ThemedText>
                )
            }
        </>

    );
}