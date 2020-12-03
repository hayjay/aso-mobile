import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomText from '../CustomText';

const CodeInput = ({
  title,
  value,
  onChangeText = () => {},
  cellCount = 6,
  containerStyle,
}) => {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {!!title && <CustomText style={styles.title}>{title}</CustomText>}
      <View style={styles.otpContainer}>
        <CodeField
          ref={ref}
          {...codeFieldProps}
          value={value}
          onChangeText={onChangeText}
          cellCount={cellCount}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              style={[
                styles.cellContainer,
                !symbol && styles.emptyCellContainer,
              ]}>
              <CustomText
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </CustomText>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: 'grey',
  },
  root: { flex: 1, padding: 20, backgroundColor: 'pink' },
  cellContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#686C71',
  },
  emptyCellContainer: {
    borderBottomColor: '#ccc',
  },
  cell: {
    width: 30,
    height: 37,
    lineHeight: 37,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    color: '#686C71',
  },
  focusCell: {
    borderColor: '#000',
  },
  otpContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 7,

    elevation: 4,
  },
});

export default CodeInput;
