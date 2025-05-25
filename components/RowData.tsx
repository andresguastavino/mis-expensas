import { StyleSheet, View } from 'react-native';

export default function RowData(
    { ...props }
) {
    return (
        <View
            style={styles.container}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
});