import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';

export default class ICICICommentsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:1, name:"Rohit Sharma", comment:"1996: ICICI Ltd. A diversified financial institution with headquarters in Mumbai."},
        {id:2, name:"Shikhar Dhawan",     comment:"1997: ITC Classic Finance. incorporated in 1986, ITC Classic was a non-bank financial firm that engaged in hire, purchase and leasing operations. At the time of being acquired, ITC Classic had eight offices, 26 outlets and 700 brokers.."},
        {id:3, name:"Virat Kohli", comment:"1997: SCICI (Shipping Credit and Investment Corporation of India)."},
        {id:4, name:"Shreyas Iyer",  comment:"1998: Anagram(ENAGRAM) Finance. Anagram had built up a network of some 50 branches in Gujarat, Rajasthan, and Maharashtra that were primarily engaged in the retail financing of cars and trucks. It also had some 250,000 depositors."},
        {id:5, name:"MS Dhoni",  comment:"2001: Bank of Madura."},
        {id:6, name:"Hardik Panya", comment:"2002: The Darjeeling and Shimla branches of Grindlays Bank."},
        {id:7, name:"Ravi Jadeja",      comment:"2005: Investitsionno-Kreditny Bank (IKB), a Russian bank."},
      ],
      
    }
  }

  render() {
    return (
        <FlatList
          style={styles.root}
          data={this.state.data}
          extraData={this.state}
          renderHeader = {() => {
              return <Text>This is comment</Text>;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          keyExtractor={(item)=>{
            return item.id;
          }}
          renderItem={(item) => {
            const Notification = item.item;
            return(
              <View style={styles.container}>
                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text  style={styles.name}>{Notification.name}</Text>
                  </View>
                  <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                </View>
              </View>
            );
          }}/>
      );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});  