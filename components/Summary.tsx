import { StyleSheet, Text, View } from 'react-native';

export default function Summary() {
    return (
        <View style={ styles.container }>
            <View style={ styles.subContainer } >
                <View>
                    <Text style={ styles.title } >
                        Gastos de este mes
                    </Text>
                </View>
                <View style={ styles.summaryContainer } >
                    <Text style={ styles.summary } >
                        $ 1,250
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    subContainer: {
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#E4F7E8',
    },
    title: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: '500',
    },
    summaryContainer: {
        paddingTop: 15,
    },
    summary: {
        fontSize: 60,
        lineHeight: 60,
        fontWeight: 'bold',
    },
});