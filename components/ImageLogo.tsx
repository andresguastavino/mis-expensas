import { StyleSheet, Text, View } from 'react-native';

import ThemedView from './ThemedView';

export default function ImageLogo() {
    return (
        <ThemedView stylesOverride={styles.container}>
            <View style={ styles.logoBackground } >
                <Text style={ styles.logoText }>
                    P
                </Text>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
    },
    logoBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: '#4A9066',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#000',
    },
    logoText: {
        color: '#DFF6E4',
        fontSize: 50,
        lineHeight: 55,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});