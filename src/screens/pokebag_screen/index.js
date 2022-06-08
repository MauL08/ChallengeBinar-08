import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { BackIcon } from '../../core/assets';
import { styles } from './styles';

const PokebagScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.topNavbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.textPokebag}>PokeBag</Text>
        <Text style={styles.textCount}>0</Text>
      </View>
      <View style={styles.mainSection}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text>Click Me (Detail)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PokebagScreen;
