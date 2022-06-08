import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppConfig.baseColor,
  },
  topNavbar: {
    backgroundColor: AppConfig.primaryColor,
    paddingVertical: AppConfig.paddingM,
    paddingHorizontal: AppConfig.paddingXL,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userSection: {
    alignItems: 'center',
  },
  imageProfile: {
    marginBottom: ms(4),
    borderRadius: ms(10),
    height: 50,
    width: 50,
  },
  mainSection: {
    marginHorizontal: AppConfig.paddingXL,
    marginTop: AppConfig.padding2XL,
  },
  paginationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: AppConfig.paddingXL,
    marginVertical: AppConfig.padding2XL,
  },
  prevButton: {
    paddingVertical: AppConfig.paddingXL,
    paddingHorizontal: AppConfig.padding3XL,
    borderRadius: ms(10),
    backgroundColor: AppConfig.primaryColor,
  },
  nextButton: {
    paddingVertical: AppConfig.paddingXL,
    paddingHorizontal: AppConfig.padding3XL,
    borderRadius: ms(10),
    backgroundColor: 'lightblue',
  },
  pokebagButton: {
    backgroundColor: 'brown',
    padding: AppConfig.paddingS,
    borderRadius: ms(8),
  },
  textPokebag: {
    color: 'white',
    fontWeight: 'bold',
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(18),
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
  },
  textMainTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: ms(20),
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(15),
  },
});
