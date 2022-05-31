import * as React from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';
import Wrapper from './Wrapper';
import { styles } from './Styles';

export default function List({navigation}) {
  const [loading, setLoading] = React.useState(true); // const defined for the loading settings
  const [list, setList] = React.useState([]); // const defined for the list settings

  function Pokemon({item}){ //function that will render each of the 100 first pokemons on pokedex
    
    const pokemonNumber = item.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')//using replace to take only the number of each pokemon from the url
    const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+pokemonNumber+'.png'//define a const to save the url of each image
    return( //setting up the button that will navigate to the details page and what will be shown for each item in the list (pokemon image and name)
      <TouchableOpacity onPress={() => {navigation.navigate('Details', {item, pokemonNumber, imgUrl})}}>
        <View style={styles.item}>
          <Image style={styles.image} source={{uri: imgUrl }}/>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  React.useEffect(() => {
    setTimeout(() => { //using fetch to take the necessary information on the api
      fetch('https://pokeapi.co/api/v2/pokemon?limit=93')
      .then((response) => response.json())
      .then((json) => setList(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, 2000);
    
  }, []);

  if (loading) {
    return( //if the page is loading this will show an activity indicator animating
    <View style={styles.loading}>
      <ActivityIndicator size="large" animating/>
      <Text style={styles.textloading}>LOADING POKEMONS</Text>
    </View>
    )
  } else {
    return ( //if the page is not loading anymore this will show the pokemons using a flatlist
      <View style={styles.fundo}>
        <FlatList
          data={list}
          renderItem={Pokemon}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}

