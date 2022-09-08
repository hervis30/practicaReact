import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  //estados

  const [nombre, setNombre] = useState('')
  const [monto, setMonto] = useState('')
  const [numeroCuotas, setNumeroCuotas] = useState(0)
  const [valorCuotas, setValorCuotas] = useState(0)
  const [fecha, setFecha] = useState('')
  const [tipoPrestamo, setTipoPrestamo] = useState('')
  const [totalDeuda, setTotalDeuda] = useState(0)

  let limitMonto = () => {
    if (monto < 1000 && monto > 100000000) {
      alert: "monto no es valido, debe estar entre 1millon y cien millones"
    } else {

    }
  }

  let calcular = (tipoPrestano) => {

    switch (tipoPrestamo) {
      case "vivienda":

        break
      case "libre":

        break
      case "educacion":

        break
    }
  }
  return (
    <View style={styles.container}>

      <View style={styles.simulador}>
        <Text>nombre</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}></TextInput>
        <Text>Monto prestamo</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={monto => setMonto(monto)}
          value={monto}
        ></TextInput>
        <Text>Numero de Cuotas</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={numeroCuotas => setNumeroCuotas(numeroCuotas)}
          value={numeroCuotas}
        ></TextInput>
        <Text>Valor de Cuotas</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={valorCuotas => setValorCuotas(valorCuotas)}
          value={valorCuotas}
        ></TextInput>
      </View>

      <View style={styles.simulador}>
        <Text>Fecha</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={fecha => setFecha(fecha)}
          value={fecha}
        ></TextInput>
        <Text>Tipo prestamo</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={tipoPrestamo => setTipoPrestamo(tipoPrestamo)}
          value={tipoPrestamo}
        ></TextInput>
        <Text>Total Deuda</Text>
        <TextInput placeholder='_____________________________'
          onChangeText={totalDeuda => setTotalDeuda(totalDeuda)}
          value={totalDeuda}
        ></TextInput>
      </View>

      <View style={styles.simulador}>
        <TouchableOpacity style={{ backgroundColor: '#228b22', marginTop: 3, width: 120, height: 30, borderRadius: 3 }}
          onPress={() => limitMonto()}
        >
          <Text style={{ color: 'white', padding: 3, textAlign: 'center' }}>Calcular / Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#228b22', marginTop: 3, width: 120, height: 30, borderRadius: 3 }}
          onPress={() => calcular('')}
        >
          <Text style={{ color: 'white', padding: 3, textAlign: 'center' }}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#228b22', marginTop: 3, width: 120, height: 30, borderRadius: 3 }}
          onPress={() => {
            setNombre('');
            setMonto('');
            setNumeroCuotas('');
            setValorCuotas('');
            setFecha('');
            setTipoPrestamo('');
            setTotalDeuda('');
          }}
        >
          <Text style={{ color: 'white', padding: 3, textAlign: 'center' }} >Limpiar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simulador: {
    flex: 1,
    marginLeft: 5,
    marginLeft: 5,
    width: 5
  }
});
