import { StyleSheet } from 'react-native';

import ThemedText from './ThemedText';
import ThemedView from "./ThemedView";
import UpcomingPayment from './UpcomingPayment';

export default function UpcomingPayments() {

    const payments = [
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
            <ThemedText>
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
            </ThemedText>
            {
                payments?.length > 3 && (
                    <ThemedText type="link" stylesOverride={{ textAlign: 'right', fontWeight: 'bold', color: '#4A9066', marginTop: 5, }}>
                        > Ir al Calendario para ver todos los pagos
                    </ThemedText>
                )
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