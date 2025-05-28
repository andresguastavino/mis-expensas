import { StyleSheet, Text, View } from 'react-native';


export default function ImageLogo() {
    return (
        <View style={ styles.container } >
            <Text style={ styles.logoText }>
                P
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: '#4A9066',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#DFF6E4',
        fontSize: 50,
        lineHeight: 55,
        fontWeight: 'bold',
    },
});