import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import lawyer from '../../../assets/images/lawyer.png';

const Lawyers = () => {
  const [lawyers, setAgents] = React.useState([
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
    { name: 'Barrister Adejoke', firm: "Ades's chamber", image: lawyer },
  ]);

  return (
    <View style={styles.container}>
      {lawyers.map((lawyer, index) => (
        <View style={styles.lawyerCard} key={index}>
          <Image source={lawyer.image} style={styles.image} />
          <View>
            <Text style={styles.name}>{lawyer.name}</Text>
            <Text style={styles.firm}>{lawyer.firm}</Text>
          </View>
        </View>
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
  lawyerCard: {
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
  name: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  firm: {
    color: 'rgba(19, 21, 22, 0.6)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 3,
  },
});

export default Lawyers;
