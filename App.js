import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, Image, FlatList, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown-v2';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("All");

  let data = [
    {
      value: 'All'
    },
    {
    value: 'Sandwiches'
    },
    {
      value: 'Grilled'
    },
    {
      value: 'Pizza'
    }
  ];
  
  return (

    <ScrollView>
      <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.headline}>
      <Dropdown selectedValue={selectedValue} value = {'All'} label = 'Choose Cusine:' data = {data} dropdownPosition = {0} onChangeText={(value) => {
            setSelectedValue(value)}} >
            </Dropdown>
            </View>
           {selectedValue == 'All'? 
              <View style ={styles.multicontainer}> 
              <Card containerStyle={{padding: 0}}>
              <Card.Image source={require('./mcdonalds.jpg')} style={{
                width: 330,
                height: 230,
                resizeMode: 'cover'
              }} > 
              <View style={styles.rectangle}>
                <View  style= {{flexDirection: 'row', alignItems: 'center',}}>
                <View style= {styles.circle}>
                  <Text style = {{fontSize: 10, color: 'white',}}>%</Text>
                  </View><Text style= {{fontWeight: 'bold', fontSize: 10, color: 'white',  right: -10, bottom: -10}}>Discount 20% on all menu</Text>
                  </View>
              </View>

              <View style={[styles.banner, {
                    transform: [{ rotate: "45deg" }]
                  }]}>
                    <Text style={styles.text}>Featured</Text>
                  </View>

              </Card.Image>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20, left: -45, bottom:-5}}>Mcdonald's</Text><View style= {{flexDirection: 'row', alignItems: 'center', right: -50, bottom:-5,}}><Icon name='star' color='#ffff00'/><Text style={{color: 'yellow'}}>(5.0) </Text><Text style={{color: 'green'}}>Open </Text></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 15, left: -12, bottom:-10}}>Middle Eastern, Halal</Text><Text style= {{bottom:-10, right: -20}}>Avg. $20 / person </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <Text style= {{fontSize: 15, left: -65, bottom:-8}}>Delivery: $ 12</Text><Text style= {{bottom:-8, right: -70}}>9220.1 km</Text>
            </View>
            </Card>
            <Card containerStyle={{padding: 0}}>
              <Card.Image source={require('./pizza.png')} style={{
                width: 330,
                height: 230,
                resizeMode: 'cover'
              }} > 
              <View style={styles.rectangle1}>
                <View  style= {{flexDirection: 'row', alignItems: 'center',}}>
                <View style= {styles.circle}>
                  <Text style = {{fontSize: 10, color: 'white',}}>%</Text>
                  </View><Text style= {{fontWeight: 'bold', fontSize: 10, color: 'white',  right: -10, bottom: -10}}>Up tp 35%</Text>
                  </View>
              </View>

              <View style={[styles.banner, {
                    transform: [{ rotate: "45deg" }]
                  }]}>
                    <Text style={styles.text}>Featured</Text>
                  </View>

              </Card.Image>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20, left: -45, bottom:-5}}>Pizza Hut</Text><View style= {{flexDirection: 'row', alignItems: 'center', right: -50, bottom:-5,}}><Icon name='star' color='#ffff00'/><Text style={{color: 'yellow'}}>(5.0) </Text><Text style={{color: 'green'}}>Open </Text></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 15, left: -12, bottom:-10}}>Middle Eastern, Halal</Text><Text style= {{bottom:-10, right: -20}}>Avg. $20 / person </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <Text style= {{fontSize: 15, left: -65, bottom:-8}}>Delivery: $ 12</Text><Text style= {{bottom:-8, right: -70}}>9220.1 km</Text>
            </View>
            </Card>
            <Card containerStyle={{padding: 0}}>
              <Card.Image source={require('./grilled.jpeg')} style={{
                width: 330,
                height: 230,
                resizeMode: 'cover'
              }} > 
              <View style={styles.rectangle}>
                <View  style= {{flexDirection: 'row', alignItems: 'center',}}>
                <View style= {styles.circle}>
                  <Text style = {{fontSize: 10, color: 'white',}}>%</Text>
                  </View><Text style= {{fontWeight: 'bold', fontSize: 10, color: 'white',  right: -10, bottom: -10}}>Discount 20% on all menu</Text>
                  </View>
              </View>

              <View style={[styles.banner, {
                    transform: [{ rotate: "45deg" }]
                  }]}>
                    <Text style={styles.text}>Featured</Text>
                  </View>

              </Card.Image>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20, left: -45, bottom:-5}}>Sahtain</Text><View style= {{flexDirection: 'row', alignItems: 'center', right: -50, bottom:-5,}}><Icon name='star' color='#ffff00'/><Text style={{color: 'yellow'}}>(4.0) </Text><Text style={{color: 'red'}}>Closed </Text></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 15, left: -12, bottom:-10}}>Middle Eastern, Halal</Text><Text style= {{bottom:-10, right: -20}}>Avg. $20 / person </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <Text style= {{fontSize: 15, left: -65, bottom:-8}}>Delivery: $ 12</Text><Text style= {{bottom:-8, right: -70}}>9220.1 km</Text>
            </View>
            </Card>
            </View> :null} 

            {selectedValue == 'Pizza'? 
            <View style ={styles.multicontainer}> 
            <Card containerStyle={{padding: 0}}>
              <Card.Image source={require('./pizza.png')} style={{
                width: 330,
                height: 230,
                resizeMode: 'cover'
              }} > 
              <View style={styles.rectangle1}>
                <View  style= {{flexDirection: 'row', alignItems: 'center',}}>
                <View style= {styles.circle}>
                  <Text style = {{fontSize: 10, color: 'white',}}>%</Text>
                  </View><Text style= {{fontWeight: 'bold', fontSize: 10, color: 'white',  right: -10, bottom: -10}}>Up tp 35%</Text>
                  </View>
              </View>

              <View style={[styles.banner, {
                    transform: [{ rotate: "45deg" }]
                  }]}>
                    <Text style={styles.text}>Featured</Text>
                  </View>

              </Card.Image>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20, left: -45, bottom:-5}}>Pizza Hut</Text><View style= {{flexDirection: 'row', alignItems: 'center', right: -50, bottom:-5,}}><Icon name='star' color='#ffff00'/><Text style={{color: 'yellow'}}>(5.0) </Text><Text style={{color: 'green'}}>Open </Text></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 15, left: -12, bottom:-10}}>Middle Eastern, Halal</Text><Text style= {{bottom:-10, right: -20}}>Avg. $20 / person </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <Text style= {{fontSize: 15, left: -65, bottom:-8}}>Delivery: $ 12</Text><Text style= {{bottom:-8, right: -70}}>9220.1 km</Text>
            </View>
            </Card>
            </View> : null}

            {selectedValue == 'Sandwiches' ?
            <View style ={styles.multicontainer}>
              <Card containerStyle={{padding: 0}}>
              <Card.Image source={require('./mcdonalds.jpg')} style={{
                width: 330,
                height: 230,
                resizeMode: 'cover'
              }} > 
              <View style={styles.rectangle}>
                <View  style= {{flexDirection: 'row', alignItems: 'center',}}>
                <View style= {styles.circle}>
                  <Text style = {{fontSize: 10, color: 'white',}}>%</Text>
                  </View><Text style= {{fontWeight: 'bold', fontSize: 10, color: 'white',  right: -10, bottom: -10}}>Discount 20% on all menu</Text>
                  </View>
              </View>

              <View style={[styles.banner, {
                    transform: [{ rotate: "45deg" }]
                  }]}>
                    <Text style={styles.text}>Featured</Text>
                  </View>

              </Card.Image>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20, left: -45, bottom:-5}}>Mcdonald's</Text><View style= {{flexDirection: 'row', alignItems: 'center', right: -50, bottom:-5,}}><Icon name='star' color='#ffff00'/><Text style={{color: 'yellow'}}>(5.0) </Text><Text style={{color: 'green'}}>Open </Text></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 15, left: -12, bottom:-10}}>Middle Eastern, Halal</Text><Text style= {{bottom:-10, right: -20}}>Avg. $20 / person </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <Text style= {{fontSize: 15, left: -65, bottom:-8}}>Delivery: $ 12</Text><Text style= {{bottom:-8, right: -70}}>9220.1 km</Text>
            </View>
            </Card>
              </View> : null}

              {selectedValue == 'Grilled' ?
              <View style ={styles.multicontainer}> 
              <Card containerStyle={{padding: 0}}>
              <Card.Image source={require('./grilled.jpeg')} style={{
                width: 330,
                height: 230,
                resizeMode: 'cover'
              }} > 
              <View style={styles.rectangle}>
                <View  style= {{flexDirection: 'row', alignItems: 'center',}}>
                <View style= {styles.circle}>
                  <Text style = {{fontSize: 10, color: 'white',}}>%</Text>
                  </View><Text style= {{fontWeight: 'bold', fontSize: 10, color: 'white',  right: -10, bottom: -10}}>Discount 20% on all menu</Text>
                  </View>
              </View>

              <View style={[styles.banner, {
                    transform: [{ rotate: "45deg" }]
                  }]}>
                    <Text style={styles.text}>Featured</Text>
                  </View>

              </Card.Image>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20, left: -45, bottom:-5}}>Sahtain</Text><View style= {{flexDirection: 'row', alignItems: 'center', right: -50, bottom:-5,}}><Icon name='star' color='#ffff00'/><Text style={{color: 'yellow'}}>(4.0) </Text><Text style={{color: 'red'}}>Closed </Text></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 15, left: -12, bottom:-10}}>Middle Eastern, Halal</Text><Text style= {{bottom:-10, right: -20}}>Avg. $20 / person </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <Text style= {{fontSize: 15, left: -65, bottom:-8}}>Delivery: $ 12</Text><Text style= {{bottom:-8, right: -70}}>9220.1 km</Text>
            </View>
            </Card>
              </View> : null}
</View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -60,
    top: -5,
  },
  multicontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  headline: {
    marginTop: 20,
    width: 200,
    bottom: 20,
    left: -40,
    top: -4,
  },
  picker: {
    height: 200, 
    width: 150,
    marginTop: -70,
  },
  rectangle: {
    width: 170,
    height: 40,
    backgroundColor: '#db7093',
  },
  rectangle1: {
    width: 100,
    height: 40,
    backgroundColor: '#db7093',
  },
  circle: {
    borderRadius: 40,
    width: 20,
    height: 20,
    borderWidth: 1,
    right: -5,
    bottom: -10,
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: 'white',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    right: -10,
    color: 'black',
    textAlign: "center",
    justifyContent: 'center', 
  },
  banner: {
    width: 170,
    height: 40,
    position: 'absolute',
    top: 15,
    right: -40,
    backgroundColor: 'yellow',
    textAlign: "center",
    justifyContent: 'center', 
  },
});
