import React, { Fragment } from 'react';
import { Pressable, ScrollView, View, Text } from 'react-native';

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
  navigation,
  grid = false,
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
          data.map(
            ({
              propertyID,
              metaItems,
              date_diff: label,
              primary_image_link: imageUrl,
              price,
              currency,
              name: productTitle,
              address: subTitle,
              lowerTitle,
            }) => (
              <View style={grid && { width: '50%' }}>
                <ProductCard
                  containerStyle={[styles.featured, { width: itemWidth }]}
                  label={label}
                  price={price}
                  currency={currency}
                  metaItems={metaItems}
                  title={productTitle}
                  subTitle={subTitle}
                  lowerTitle={lowerTitle}
                  imageUrl={imageUrl}
                  propertyID={propertyID}
                />
              </View>
            ),
          )
        ) : (
          <Text>No Item Found!</Text>
        )}
      </ListContainer>
    );
  };

  const cityList = () => {
    return data.map(({ name }) => (
      <CityThumbnail
        containerStyle={[styles.featured, { width: itemWidth }]}
        text={name}
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
