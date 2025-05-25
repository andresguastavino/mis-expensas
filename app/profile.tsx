import { StyleSheet } from 'react-native';

import ColumnData from '@/components/ColumnData';
import RowData from '@/components/RowData';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

export default function ProfileScreen() {

    const userData = [
        {
            label: 'Nombre completo',
            value: 'Andres Guastavino',
        },
        {
            label: 'Edad',
            value: '27 años',
        },
        {
            label: 'Fecha de nacimiento',
            value: '05/02/1998',
        },
        {
            label: 'Estado civil',
            value: 'Casado',
        },
    ];

    return (
        <ThemedView style={styles.container}>
            {
                userData.map((rowData, i) => 
                    <RowData key={i}>
                        <ColumnData>
                            <ThemedText type="defaultSemiBold">
                                { rowData.label }
                            </ThemedText>
                        </ColumnData>
                        <ColumnData>
                            <ThemedText>
                                { rowData.value }
                            </ThemedText>
                        </ColumnData>
                    </RowData>
                )
            }
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
