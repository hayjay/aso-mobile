import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import CustomHeader from '../../components/CustomHeader';
import professional2 from '../../../assets/images/professional2.png';

const AllProfessionals = ({ navigation }) => {
  const [allProfessionals, setAllProfessionals] = React.useState([
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
    {
      name: 'David Chinedu',
      image: professional2,
      company: 'Smart Decor Enterprise',
    },
  ]);

  return (
    <ScrollView>
      <CustomHeader
        headerRightContents={[{ type: 'search' }]}
        title="Professionals"
      />
      <View style={styles.heading}>
        <Text style={styles.headingText}>32 interior designers</Text>
        <View style={styles.sort}>
          <Text style={styles.sortText}>Sort by</Text>
          <Ionicons
            name="md-arrow-dropdown"
            size={24}
            color="rgba(19, 21, 22, 0.5)"
          />
        </View>
      </View>
      <View style={styles.container}>
        {allProfessionals.map((professional, index) => (
          <Pressable
            style={styles.professionalCard}
            key={index}
            onPress={() => navigation.navigate('ProfessionalDetails')}>
            <Image source={professional.image} style={styles.image} />
            <View>
              <Text style={styles.name}>{professional.name}</Text>
              <Text style={styles.company}>{professional.company}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 15,
    width: '92%',
  },
  headingText: {
    color: 'rgba(19, 21, 22, 0.8)',
    fontSize: 15,
  },
  sort: {
    flexDirection: 'row',
  },
  sortText: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    marginRight: 3,
  },
  professionalCard: {
    flexBasis: '47%',
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'flex-start',
    width: 200,
    height: 180,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  name: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  company: {
    color: 'rgba(19, 21, 22, 0.6)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 3,
  },

  image: {
    width: '100%',
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default AllProfessionals;
