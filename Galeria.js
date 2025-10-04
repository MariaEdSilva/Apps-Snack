import React from 'react';
import { View, Text, ScrollView, TextInput} from 'react-native';
import Estilos from '../styles/Estilos';
import { Divider} from 'react-native-paper';
import ImagemGaleria from './ImagemGaleria';

const imagens = [
  {nome: "Ainu", caminho: require('../assets/Ainu.jpg')},
  {nome: "Ticuna", caminho: require('../assets/Ticuna.jpg')},
  {nome: "Livonian", caminho: require('../assets/Livonian.jpg')},
  {nome: "Kaigang", caminho: require('../assets/Kaigang.jpg')},

];
 
class Galeria extends React.Component{
  state = {
    filtro:''
  }

  
  render(){

    const imagensFiltardas = imagens.filter(item =>
    item.nome.toLowerCase().includes(this.state.filtro.toLowerCase())
    );

    return(
      <ScrollView style={Estilos.scrollViewContainer}>
        <View style={Estilos.containerTitulo}>
          <Text style={[Estilos.textoTitulo, Estilos.textoCor]}>Galeria de Imagens</Text>
        </View>
      <Divider style={Estilos.divisor}/>
      <TextInput style={Estilos.filtro}
        placeholder="Digite para filtar..."
        value={this.state.filtro}
        onChangeText={(text) => this.setState({filtro:text})}
        >
      </TextInput>
      <View style={Estilos.containerGaleria}>
      {
        imagensFiltardas.map(
          (item)=>(
            <ImagemGaleria
            nome={item.nome}
            caminho={item.caminho}
            />
          )
        )
      }
      </View>
      </ScrollView>
    );
  }
}
  
export default Galeria;
