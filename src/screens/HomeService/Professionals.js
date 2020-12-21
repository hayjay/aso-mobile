import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import professionalImage from '../../../assets/images/professional2.png';

const Professionals = ({ handleProfessionalPress }) => {
  const [professionals, setProfessionals] = React.useState([
    { name: 'Interior designers & decorators', image: professionalImage },
    { name: 'Kitchen & bathroom designers', image: professionalImage },
    { name: 'Design - Build Firms', image: professionalImage },
    { name: 'Home builders', image: professionalImage },
    { name: 'Interior ', image: professionalImage },
    { name: 'Kitchen & bathroom designers', image: professionalImage },
    { name: 'Design - Build Firms', image: professionalImage },
    { name: 'Home builders', image: professionalImage },
  ]);

  return (
    <View style={styles.container}>
      {professionals.map((professional, index) => (
        <TouchableOpacity
          onPress={handleProfessionalPress}
          style={styles.professionalCard}
          key={index}>
          <Image source={professional.image} style={styles.image} />
          <Text style={styles.text}>{professional.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  professionalCard: {
    flexBasis: '47%',
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'flex-start',
    width: 200,
    height: 180,
    marginBottom: 18,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  image: {
    borderRadius: 6,
    width: '100%',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Professionals;
