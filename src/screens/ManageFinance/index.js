import React from 'react';
import { ScrollView, View } from 'react-native';
import Accordion from '../../components/Accordion';
import CustomHeader from '../../components/CustomHeader';
import CustomText from '../../components/CustomText';
import PlusButton from '../../components/PlusButton';
import styles from './styles';

const ManageFinance = ({ navigation }) => {
  const links = [
    {
      id: 1,
      title: 'Payment Options',
      onPress: () => navigation.navigate('PaymentOption'),
    },
    {
      id: 2,
      title: 'Affordability Calculator',
    },
    {
      id: 3,
      title: 'My Payment Profile',
      onPress: () => navigation.navigate('ManageFinance'),
    },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader
        headerRightContents={[{ type: 'more' }]}
        title="Manage Finance"
      />
      <ScrollView>
        <View style={styles.intro}>
          <CustomText type="info-title">Understanding The Basis</CustomText>
          <CustomText type="info-body">
            As the downturn from coronavirus pandemic squeezes the economy,
            higher-end and luxury real estate markets have become the hardest
            hit, as premium apartments property owners record lowest sales in
            major cities.As the downturn from coronavirus pandemic.
          </CustomText>
        </View>
        <Accordion containerStyle={styles.accordion} data={links} />
      </ScrollView>
      <PlusButton />
    </View>
  );
};

export default ManageFinance;
