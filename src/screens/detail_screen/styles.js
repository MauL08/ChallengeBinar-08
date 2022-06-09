import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  topNavbar: {
    borderRadius: ms(12),
    backgroundColor: AppConfig.primaryColor,
    padding: AppConfig.paddingXL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    tintColor: 'white',
  },
  textTitle: {
    fontSize: ms(16),
    fontWeight: 'bold',
    color: 'white',
  },
  catchButton: catched => ({
    padding: AppConfig.paddingS,
    borderRadius: ms(10),
    backgroundColor: catched ? 'green' : 'red',
  }),
  catchText: {
    fontWeight: 'bold',
    color: 'white',
  },
  mainSection: {
    marginHorizontal: AppConfig.paddingL,
    marginTop: AppConfig.padding2XL,
  },
  pokemonImage: {
    height: 200,
    width: 200,
  },
  headerSection: {
    flexDirection: 'row',
  },
  headerUserSection: {
    marginTop: AppConfig.padding2XL,
    alignItems: 'center',
  },
  infoMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pokemonListContainer: {
    marginHorizontal: AppConfig.paddingL,
    marginTop: AppConfig.paddingL,
    marginBottom: AppConfig.paddingXL,
    height: 100,
    width: 180,
    borderRadius: ms(12),
    paddingHorizontal: AppConfig.paddingL,
    paddingVertical: AppConfig.paddingL,
    backgroundColor: 'lightblue',
  },
  moveText: {
    padding: AppConfig.paddingM,
    fontSize: 16,
    backgroundColor: 'blanchedalmond',
    margin: AppConfig.paddingL,
    width: 150,
    borderRadius: ms(8),
  },
  basicInformationContainer: {
    borderRadius: ms(12),
    backgroundColor: 'lightgreen',
    margin: AppConfig.paddingXL,
    padding: AppConfig.paddingL,
  },
  pokemonNameStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  listNameTitle: {
    marginBottom: AppConfig.paddingS,
    fontWeight: 'bold',
  },
  listName: {
    borderRadius: ms(8),
    backgroundColor: 'sandybrown',
    padding: AppConfig.paddingM,
    margin: AppConfig.padding2XS,
  },
});
