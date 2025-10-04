import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Estilos from '../styles/Estilos';
import { Divider} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
 
const itens = ["Ainu", "Ticuna", "Livonian", "Kaigang"]
 
class Sobre extends React.Component{
  render() {
    return(
        <ScrollView style={Estilos.scrollViewContainer}>
          <View style={Estilos.containerTitulo}>
            <Text style={[Estilos.textoSobre, Estilos.textoCor]}>A cada duas semanas, uma língua desaparece no mundo. Com ela, se apaga uma história, um povo, uma forma única de ver a vida.</Text>
          </View>
 
          <View style={Estilos.containerSobre}>
            <Text style={[Estilos.textoSobre, Estilos.textoCor]}></Text>
 
            <Divider style={Estilos.divisor}/>
 
            <Text style={[Estilos.textoCor, Estilos.textoLista]}>
            Línguas ameaçadas:
            </Text>
 
            <View style={Estilos.containerLista}>
            {
                itens.map((item) => (
                  <View style={Estilos.itemLista}>
                    <Ionicons
                      name="checkmark-circle-outline"
                      color="green"
                      size={30}
                    />
                    <Text style={Estilos.textoLista}>{item}</Text>
                  </View>
                ))
            }
            </View>
 
          </View>
        </ScrollView>
       
 
    );
  }
}
 
export default Sobre;
