import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, Image, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("all");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headline}> Choose Cusine: </Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Sandwiches" value="sandwiches" />
        <Picker.Item label="Grilled" value="grilled" />
        <Picker.Item label="Pizza" value="pizza" />
      </Picker>

      {selectedValue == 'pizza'?<ScrollView>
    <Image source={require('./pizza.png')} />
  </ScrollView>: null }

      {selectedValue == 'sandwiches'?<ScrollView>
    <Image source={require('./sandwiches.png')} />
  </ScrollView>: null }

      {selectedValue == 'grilled'? <ScrollView>
    <Image source={require('./grilled.png')} />
  </ScrollView>: null }

      {selectedValue == 'all'? <ScrollView>
    <Image source={require('./thumbnail.png')} />
  </ScrollView>: null }
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
  headline: {
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    width: 200,
  },
  picker: {
    height: 200, 
    width: 150,
    marginTop: -70,
  },
});
