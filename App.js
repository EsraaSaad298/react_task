import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, Image, FlatList } from 'react-native';


export default function App() {
  const [selectedValue, setSelectedValue] = useState("all");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headline}> Choose Cusine: </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 650, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Fast Food" value="fastFood" />
        <Picker.Item label="Grilled" value="grilled" />
        <Picker.Item label="Pasta" value="pasta" />
      </Picker>
      {selectedValue == 'pasta'?<Image source={require('./Pasta.png')} style={styles.img}/>: null }
      {selectedValue == 'grilled'?<Image source={require('./Grilled.jpg')} style={styles.img} />: null }
      {selectedValue == 'fastFood'?<Image source={require('./Mcdonalds.png')} style={styles.img} />: null }
      {selectedValue == 'all'? <Image source={require('./all.png')} style={styles.imgb} /> : null }

      {/* <Image source={require('./Mcdonalds.png')} style={styles.imgl} />
      <Image source={require('./Pasta.png')} style={styles.imgr} />
      <Image source={require('./Grilled.jpg')} style={styles.imgb} /> */}

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
    marginTop: 0,
    width: 200,
  },
  img: {
    width: 200,
    position: 'absolute',
    height: 200,
  },
  imgb: {
    width: 300,
    position: 'absolute',
    height: 300,
  },
});
