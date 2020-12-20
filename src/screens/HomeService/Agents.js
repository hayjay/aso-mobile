import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import agent from '../../../assets/images/agent.png';

const Agents = () => {
  const [agents, setAgents] = React.useState([
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
    { name: 'Kelvin John', company: 'Kelly property consultant', image: agent },
  ]);

  return (
    <View style={styles.container}>
      {agents.map((agent, index) => (
        <View style={styles.agentCard} key={index}>
          <Image source={agent.image} style={styles.image} />
          <View>
            <Text style={styles.name}>{agent.name}</Text>
            <Text style={styles.company}>{agent.company}</Text>
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
  agentCard: {
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
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  company: {
    color: 'rgba(19, 21, 22, 0.6)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 3,
  },
});

export default Agents;
