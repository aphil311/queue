import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Aleo-Bold': require('./assets/fonts/Aleo-Bold.ttf'),
  });

  if(!fontsLoaded)
    return null;

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Queue.</Text>
      <TouchableOpacity
        onPress={() => alert('Will open join screen')}
        style={styles.button}>
        <Text style={styles.bText}>Join</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Will open host screen')}
        style={styles.button}>
        <Text style={styles.bText}>Host</Text>
      </TouchableOpacity>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head1: {
    fontFamily: 'Aleo-Bold',
    fontSize: 40,
    marginBottom: 100,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'purple',
    borderWidth: 2,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  bText: {
    fontSize: 20, 
    color: 'purple'
  },
});
