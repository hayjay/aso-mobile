import React, { Fragment } from 'react';
import {
  Pressable,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import CustomText from '../CustomText';
import ProductCard from '../ProductCard';
import CityThumbnail from '../CityThumbnail';

const ProductGroup = ({
  title,
  horizontal,
  itemWidth,
  data = [],
  type = 'product',
  actionButton,
  itemCategory,
  grid = false,
  onItemPress = () => {},
}) => {
  const horizontalProps = {
    horizontal: true,
    snapToInterval: itemWidth,
  };

  const extraScrollViewProps = horizontal ? horizontalProps : {};

  const productList = () => {
    const gridStyle = {
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    const ListContainer = grid ? View : Fragment;
    return (
      <ListContainer {...(grid ? { style: gridStyle } : {})}>
        {data.length > 0 ? (
          data.map((itemDetails) => {
            const {
              propertyID,
              date_diff: label,
              primary_image_link: imageUrl,
              price,
              currency,
              name: productTitle,
              address: subTitle,
              lowerTitle,
              no_bedroom,
              no_cars,
              no_bathroom,
            } = itemDetails;
            return (
              <TouchableOpacity
                onPress={() => onItemPress(itemDetails)}
                activeOpacity={0.7}
                style={grid && { width: '50%' }}
                key={propertyID}>
                <ProductCard
                  containerStyle={[styles.featured, { width: itemWidth }]}
                  label={label}
                  price={price}
                  currency={currency}
                  title={productTitle}
                  subTitle={subTitle}
                  lowerTitle={lowerTitle}
                  imageUrl={imageUrl}
                  numberBedrooms={no_bedroom}
                  numberBathrooms={no_bathroom}
                  numberCars={no_cars}
                  itemCategory={itemCategory}
                  propertyID={propertyID}
                  onPress={onItemPress}
                />
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>No Item Found!</Text>
        )}
      </ListContainer>
    );
  };

  const cityList = () => {
    return data.map(({ name, propertyID }) => (
      <CityThumbnail
        containerStyle={[styles.featured, { width: itemWidth }]}
        text={name}
        key={propertyID}
      />
    ));
  };

  const itemOptions = {
    product: productList,
    city: cityList,
  };
  const renderSelectedItem = itemOptions[type];

  return (
    <View style={[styles.container, !horizontal && { flex: 1 }]}>
      <View style={styles.headingContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        {actionButton && (
          <Pressable style={styles.action} onPress={actionButton.onPress}>
            <CustomText style={styles.actionText}>
              {actionButton.text}
            </CustomText>
            {actionButton.icon && actionButton.icon}
          </Pressable>
        )}
      </View>
      <ScrollView
        {...extraScrollViewProps}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        {renderSelectedItem()}
      </ScrollView>
    </View>
  );
};

export default ProductGroup;
