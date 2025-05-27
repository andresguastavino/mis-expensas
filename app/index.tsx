import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>
        ¡Bienvenido a Inicio!
      </ThemedText>
      <ThemedText type="link">
        <Link href="/profile">
          Ir a mi perfil
        </Link>
      </ThemedText>
      <ThemedText type="link">
        <Link href="/new-expense">
          Añadir nueva expensa
        </Link>
      </ThemedText>
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
