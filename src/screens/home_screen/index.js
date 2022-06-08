import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { isLoading } = useSelector(state => state.global);
  const { userInfo } = useSelector(state => state.user);

  const [index, setIndex] = useState(0);

  if (isLoading) {
    return <ActivityIndicator color="orange" />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.topNavbar}>
          <View style={styles.userSection}>
            <Image
              source={{ uri: userInfo.image }}
              style={styles.imageProfile}
            />
            <Text style={styles.textName}>{userInfo.name}</Text>
          </View>

          <Text style={styles.textTitle}>PokeDex</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pokebag')}
            style={styles.pokebagButton}>
            <Text style={styles.textPokebag}>PokeBag</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainSection}>
          <Text style={styles.textMainTitle}>Pokedex</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Text>Click Me (Detail)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paginationSection}>
          <TouchableOpacity
            onPress={() => setIndex(state => state - 1)}
            style={styles.prevButton}>
            <Text style={styles.textButton}>Sebelumnya</Text>
          </TouchableOpacity>
          <Text>{index}</Text>
          <TouchableOpacity
            onPress={() => setIndex(state => state + 1)}
            style={styles.nextButton}>
            <Text style={styles.textButton}>Selanjutnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default HomeScreen;
