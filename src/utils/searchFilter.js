import searchAction from '../redux/actions/propertyAction';

export const searchAllProperties = async (
  searchData,
  transaction_type = 'Buy',
  navigation,
  dispatch,
) => {
  const searchValues = {
    searchData,
    transaction_type,
  };
  const results = await dispatch(searchAction.searchProperties(searchValues));

  navigation.navigate('SearchResults', {
    searchResults: results,
    type: 'Buy',
  });
};
