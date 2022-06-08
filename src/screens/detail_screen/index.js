import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { BackIcon } from '../../core/assets';
import { styles } from './styles';

const DetailScreen = () => {
  const navigation = useNavigation();
  const [catched, setCatched] = useState(false);

  const onCatch = async () => {
    const generateNumber = Math.round(Math.random() * 1000);

    if (generateNumber > 500 && generateNumber % 2 === 0) {
      setCatched(true);
      Alert.alert('Good Job', 'You just captured Bulbasaur');
    } else {
      setCatched(false);
      Alert.alert('Noob', 'Please Try Again :)');
    }
  };

  return (
    <View>
      <View style={styles.topNavbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Pokemon Detail</Text>
        {catched ? (
          <View style={styles.catchButton(catched)}>
            <Text style={styles.catchText}>Catched</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.catchButton(catched)}
            onPress={() => onCatch()}>
            <Text style={styles.catchText}>Catch Me!</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.mainSection}>
        <Text>Pokemon Information</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
