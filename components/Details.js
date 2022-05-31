import * as React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, FlatList, Image, Share, Button } from 'react-native';
import Constants from 'expo-constants';
import Wrapper from './Wrapper';
import item from './List';
import { styles } from './Styles';


export default function Details({route, navigation}){
  //declaring consts
  const [statsList, setStatsList] = React.useState([]);
  const [typesList, setTypesList] = React.useState([]);
  const { item, pokemonNumber, imgUrl } = route.params;
  const pokemon = item.name;

  const onShare = async () => { //function to share the pokemon with friends when the share button is hit
      try {
        const result = await Share.share({
          message:
            'I would like to share with you this pokemon: ',pokemon,
          url: {imgUrl},
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

  React.useEffect(() => { //using fetch to take the necessary information on the api
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonNumber)
      .then((response) => response.json())
      .then((json) => setStatsList(json.stats))
      fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonNumber)
      .then((response) => response.json())
      .then((json) => setTypesList(json.types))
      .catch((error) => console.error(error))
    });
    
  },);

  function ShowTypes({item}){ //function to show the type of the pokemon 
    return(
      <View>
        <Text style={{fontWeight:'bold'}}>  {item.type.name}  </Text>
      </View>
    )
  }

  function ShowDetails({item}){ //show de hp, attack, defense and speed status of the pokemon
    if(item.stat.name=='special-attack'||item.stat.name=='special-defense') {
      return  ;
    }
    else{
    return(
      <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center', }}>
        <Text style={styles.stat}>{item.stat.name}:    </Text>
        <View style={{
          backgroundColor:'gray',
          width:100,
          height:10,
        }}>
        <View style={{
          backgroundColor:'red',
          width:item.base_stat,
          height:10,
        }}>
        </View>
        </View>
        <Text style={styles.stat}> {item.base_stat}</Text>
      </View>
    )
    }
  }
  var color
  switch(typesList[0]){
    case 'grass':color='green'
    break;
  }

  return (
    <View style={styles.detfundo}>
      <View style = {styles.pokedetfundo}>
        <Text style={styles.pokename}>{item.name}</Text>
        <View style={{flexDirection:'row'}}>
          <Text> Types: </Text>
          <FlatList
          horizontal={true}
          data={typesList}
          renderItem={ShowTypes}
          keyExtractor={(type) => type.type.name}
          />
        </View>
        <Image style={styles.bigimage} source={{uri: imgUrl }}/>
      </View>
      <View> 
        <FlatList
          data={statsList}
          renderItem={ShowDetails}
          keyExtractor={(status) => status.stat.name}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button onPress={onShare} title="Share"/>
      </View>
    </View>
  );
}