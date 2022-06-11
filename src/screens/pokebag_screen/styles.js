import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

const pokebagSize = count => {
  if (count < 5) {
    return 'green';
  }
  if (count > 5 && count < 10) {
    return 'gold';
  } else {
    return 'red';
  }
};

export const styles = StyleSheet.create({
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
  textPokebag: {
    fontSize: ms(16),
    fontWeight: 'bold',
    color: 'white',
  },
  textCount: count => ({
    backgroundColor: pokebagSize(count),
    paddingHorizontal: AppConfig.paddingM,
    paddingVertical: AppConfig.paddingS,
    borderRadius: ms(20),
    fontSize: ms(16),
    fontWeight: 'bold',
    color: 'black',
  }),
  mainSection: {
    marginHorizontal: AppConfig.paddingXL,
    marginTop: AppConfig.padding2XL,
  },
  pokemonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: ms(2),
    paddingVertical: AppConfig.paddingM,
    paddingHorizontal: AppConfig.paddingL,
    marginVertical: AppConfig.paddingL,
    marginHorizontal: AppConfig.paddingM,
    width: 160,
  },
  pokeball: {
    height: 36,
    width: 36,
    marginRight: ms(10),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
