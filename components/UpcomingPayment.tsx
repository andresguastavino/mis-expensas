import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { PaymentType } from '../types/Payment';

export default function UpcomingPayment({
    name,
    dueDate,
    amount
}: PaymentType) {
    return (
        <ThemedView style={ styles.container } >
            <ThemedView stylesOverride={ styles.amountContainer }>
                <ThemedText type="subtitle" stylesOverride={ styles.amountText }>
                    $ { amount }
                </ThemedText>
            </ThemedView>
            <ThemedView stylesOverride={ styles.detailsContainer }>
                <ThemedView stylesOverride={ styles.nameContainer }>
                    <ThemedText type="defaultSemiBold" stylesOverride={ styles.nameText }>
                        { name }
                    </ThemedText>
                </ThemedView>
                <ThemedView stylesOverride={ styles.dueDateContainer }>
                    <FontAwesome name="calendar" size={24} color="#4A9066" />
                    <ThemedText type="default" stylesOverride={ styles.dueDateText }>
                        { dueDate }
                    </ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    amountContainer: {
        width: '45%',
        backgroundColor: '#4A9066',
        borderRightColor: '#000',
        borderRightWidth: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    amountText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 35,
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#000',
    },
    detailsContainer: {
        flex: 1,
        width: '55%',
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderColor: '#000',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    nameContainer: {
        width: '100%',
        height: 30,
    },
    nameText: {
        fontSize: 18,
    },
    dueDateContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
    },
    dueDateText: {
        fontSize: 18,
        paddingLeft: 10,
    },
});