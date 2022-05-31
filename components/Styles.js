import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ // here are most of the styles used on the app
  loading: {
    alignSelf:'center',
    justifyContent: 'center',
    top:'40%'
  },
  textloading:{
    fontFamily:'lato',
    fontSize: 35,
    fontWeight:'bold',
    fontStyle:'italic',
    textAlign:'center',
  },
  item: {
    backgroundColor: 'black',
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 35,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    textAlign:"center",
    textTransform:"uppercase",
    fontWeight: "bold",
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 3,
  },
  image:{
    width:120,
    height:120,
    alignSelf: 'center',
    backgroundColor:'white',
    borderRadius:120,
  },
  fundo:{
    backgroundColor:'#DC1212',
  },
  detfundo:{
    backgroundColor:'#ffdee6',
  },
  stat:{
    padding: 8,
    marginVertical: 1,
    marginHorizontal: 15,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 15,
    width:85, 
  },
  pokename:{
    fontSize: 40,
    textAlign:"center",
    textTransform:"uppercase",
    fontWeight: "bold",
    color:"black",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
  },
  bigimage:{
    width:250,
    height:250,
    alignSelf: 'center',
  },
  pokedetfundo:{
    backgroundColor:'#b8fcff',
    height:350,
    borderBottomLeftRadius:50 ,
    borderBottomRightRadius:50,
  },
  headertitle:{
    fontSize: 24, 
    textAlign:"center", 
    color:'white', 
    fontWeight: 'bold', 
  },
  type:{
    fontSize: 10, 
    fontWeight: 'bold',
  },
});