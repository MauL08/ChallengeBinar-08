import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  topNavbar: {
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
    marginHorizontal: AppConfig.paddingXL,
    marginTop: AppConfig.padding2XL,
  },
});
