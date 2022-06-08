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
  textPokebag: {
    fontSize: ms(16),
    fontWeight: 'bold',
    color: 'white',
  },
  textCount: {
    backgroundColor: 'green',
    paddingHorizontal: AppConfig.paddingM,
    paddingVertical: AppConfig.paddingS,
    borderRadius: ms(20),
    fontSize: ms(16),
    fontWeight: 'bold',
    color: 'white',
  },
  mainSection: {
    marginHorizontal: AppConfig.paddingXL,
    marginTop: AppConfig.padding2XL,
  },
});
