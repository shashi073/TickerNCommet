import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TextTicker from 'react-native-text-ticker';

import ICICICommentsList from './ICICI/ICICICommentsList';
import ICICIPage from './ICICI/ICICIPage';
import Textarea2 from 'react-native-textarea';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextTicker
          style={{ fontSize: 14}}
          duration={10000}
          bounce={false}
        >
          <Text onPress={() => navigation.navigate('ICICI Bank')}>
              ICICI Bank {'            |X|            '}
          </Text>
          <Text onPress={() => navigation.navigate('Kotak Mahindra Bank')}>
            Kotak Mahindra Bank {'            |X|            '}
          </Text>
          <Text onPress={() => navigation.navigate('HDFC Bank')}>
            HDFC Bank {'            |X|            '}
          </Text>
        </TextTicker>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 400, height: 500}} />
      
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Screen1({ navigation }) {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
 
  const handleChange = event => setGreeting(event.target.value);

  let enteredComment = '';


  
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ICICIPage />
      <ICICICommentsList newComment="Newly Added Comment"/>
      <Textarea2
          id="textAreaId"
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={120}
          defaultValue={greeting}
          value={greeting}
          placeholderTextColor={'#c7c7c7'}
          underlineColorAndroid={'transparent'}
          onChange = {handleChange}
      />
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => alert(greeting)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
     </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 3</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  textareaContainer: {
    height: 120,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 110,
    fontSize: 12,
    color: '#333',
  },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ICICI Bank" component={Screen1} />
        <Stack.Screen name="Kotak Mahindra Bank" component={Screen2} />
        <Stack.Screen name="HDFC Bank" component={Screen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
