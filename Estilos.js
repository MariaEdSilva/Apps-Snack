import { StyleSheet} from 'react-native';
 
export default StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: "#F549",
    flex: 1
 
  },
  scrollViewContainer: {
   backgroundColor:"#F549",
 },
 containerTitulo: {
   alignItens: 'center',
   padding: 20
 },
 textoTitulo: {
   fontSize: 26,
   fontWeight: 600
   
 },
  textoCor: {
    color: 'white'
  },
  containerSobre: {
    margin: 20
  },
  textoSobre: {
    fontSize: 18,
    textAlign: 'justify'
  },
  divisor: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: 'grey'
  },
  containerLista:{
    margin: 10,
  },
  itemLista: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    marginTop: 10,
    marginBottom: 10
  },
  textoLista: {
    color: 'white',
    fontSize: 20,
    marginLeft: 5,
    
  },
  filtro: {
    color:'rgb(203, 81, 69)',
    backgroundColor: 'white',
    padding: 10,
    borderRadius:5,
    margin:10,
  },

  containerImagemGaleria:{
    width: 150,
    alignItems:'center'
  },

  raioBorda:{
    borderRadius: 8,

  },
  imagemGaleria:{
    width: '100%',
    height: 200
  },
  

  containerGaleria:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:20,
    margin:10,
    flex:1,
    height:'100%',
    color:'white'
  },
});
 
export const drawerStyles = {
  headerStyle: {
    backgroundColor: "rgb(203, 81, 69)",
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  drawerStyle: {
    backgroundColor: '#F549',
    width: 240,
  },
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: '#aaa',
  drawerLabelStyle:{
    fontSize: 16,
    fontWeight: 'bold',
  }
};
