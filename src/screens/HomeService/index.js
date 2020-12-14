import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import CustomHeader from '../../components/CustomHeader';
import ServiceCategoryCard from '../../components/ServiceCategoryCard';
import Departments from './Departments';
import Vendors from './Vendors';
import Professionals from './Professionals';
import Agents from './Agents';
import Lawyers from './Lawyers';
import styles from './styles';

const serviceCategoriesState = [
  { name: 'Departments', selected: true },
  { name: 'Vendors', selected: false },
  { name: 'Professionals', selected: false },
  { name: 'Agents', selected: false },
  { name: 'Lawyers', selected: false },
];

function serviceCategoryReducer(prevState, { type, payload }) {
  switch (type) {
    case 'SELECT_SERVICE_CATEGORY':
      return prevState.map((category) => {
        return category.name === payload.name
          ? { ...category, selected: true }
          : { ...category, selected: false };
      });
  }
}

const HomeService = ({ route, navigation }) => {
  const [serviceCategories, serviceCategoriesDispatch] = React.useReducer(
    serviceCategoryReducer,
    serviceCategoriesState,
  );
  const [activeCategory, setActiveCategory] = React.useState('Departments');

  const handlePress = (category) => {
    serviceCategoriesDispatch({
      type: 'SELECT_SERVICE_CATEGORY',
      payload: category,
    });

    setActiveCategory(category.name);
  };

  return (
    <ScrollView>
      <View>
        <CustomHeader
          headerRightContents={[{ type: 'more' }]}
          title="Home Service"
          // searchBar={true}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20, marginLeft: 20 }}>
          {serviceCategories.map((category, index) => (
            <View style={styles.scrollWrapper} key={index}>
              <TouchableOpacity onPress={() => handlePress(category)}>
                <ServiceCategoryCard
                  name={category.name}
                  selected={category.selected}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text>42 {activeCategory}</Text>
          <View style={styles.sort}>
            <Text style={styles.text}>Sort by</Text>
            <Ionicons
              name="md-arrow-dropdown"
              size={24}
              color="rgba(19, 21, 22, 0.5)"
            />
          </View>
        </View>

        <View>
          {activeCategory === 'Departments' && <Departments />}
          {activeCategory === 'Vendors' && <Vendors />}
          {activeCategory === 'Professionals' && <Professionals />}
          {activeCategory === 'Agents' && <Agents />}
          {activeCategory === 'Lawyers' && <Lawyers />}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeService;
