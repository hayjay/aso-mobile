import React, { Fragment } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

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
    return (
      <View style={grid && gridStyle}>
        {data.map(
          ({
            metaItems,
            label,
            imageUrl,
            price,
            title: productTitle,
            subTitle,
            lowerTitle,
          }) => (
            <View style={grid && { width: '50%' }}>
              <ProductCard
                containerStyle={[styles.featured, { width: itemWidth }]}
                label={label}
                price={price}
                metaItems={metaItems}
                title={productTitle}
                subTitle={subTitle}
                lowerTitle={lowerTitle}
                imageUrl={imageUrl}
              />
            </View>
          ),
        )}
      </View>
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
