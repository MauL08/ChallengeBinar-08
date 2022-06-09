import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { BackIcon } from '../../core/assets';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const DetailScreen = () => {
  const navigation = useNavigation();
  const [catched, setCatched] = useState(false);

  const { isLoading } = useSelector(state => state.global);
  const { pokemonData } = useSelector(state => state.pokemon);

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
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.mainSection}>
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
              <View style={styles.headerSection}>
                <Image
                  source={{
                    uri: pokemonData?.sprites?.other['official-artwork']
                      .front_default,
                  }}
                  style={styles.pokemonImage}
                />
                <View style={styles.headerUserSection}>
                  <Text style={styles.pokemonNameStyle}>
                    {pokemonData?.name?.charAt(0).toUpperCase() +
                      pokemonData?.name?.slice(1)}
                  </Text>
                  <View style={styles.basicInformationContainer}>
                    <Text style={styles.listNameTitle}>Basic Information</Text>
                    <Text>Height : {pokemonData.height}</Text>
                    <Text>Weight : {pokemonData.weight}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.infoMainContainer}>
                <View style={styles.pokemonListContainer}>
                  <Text style={styles.listNameTitle}>Types :</Text>
                  <FlatList
                    horizontal={true}
                    data={pokemonData.types}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                      <Text style={styles.listName}>{item.type.name}</Text>
                    )}
                  />
                </View>
                <View style={styles.pokemonListContainer}>
                  <Text style={styles.listNameTitle}>Abilities :</Text>
                  <FlatList
                    horizontal={true}
                    data={pokemonData.abilities}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                      <Text style={styles.listName}>{item.ability.name}</Text>
                    )}
                  />
                </View>
              </View>
              <Text style={styles.listNameTitle}>Moves : </Text>
            </View>
          )}
          numColumns={2}
          data={pokemonData.moves}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Text style={styles.moveText}>{item.move.name}</Text>
          )}
        />
      )}
    </View>
  );
};

export default DetailScreen;
