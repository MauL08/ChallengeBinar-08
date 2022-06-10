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
import React, { useState, useEffect, useCallback } from 'react';
import database from '@react-native-firebase/database';

import { BackIcon } from '../../core/assets';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getPokedex } from '../../data/slices/pokemonSlice';
import { setLastSeen, setLoading } from '../../data/slices/globalSlice';

const DetailScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [catched, setCatched] = useState(false);

  const { isLoading } = useSelector(state => state.global);
  const { pokemonData } = useSelector(state => state.pokemon);

  const onPokemonCaptured = () => {
    const reference = database().ref(`/pokebag/${pokemonData.id}`);
    const content = {
      name: pokemonData.name,
      status: true,
    };

    try {
      reference.set(content);
    } catch (error) {
      console.log(error);
    }
  };

  const checkPokemon = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      database()
        .ref('/pokebag')
        .once('value')
        .then(snapshot => {
          let pokemonList = Object.values(snapshot.val());
          pokemonList.forEach(e => {
            if (pokemonData.name === e.name) {
              setCatched(e.status);
            }
          });
        });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, pokemonData.name]);

  const onCatch = async () => {
    const generateNumber = Math.round(Math.random() * 1000);

    if (generateNumber > 500 && generateNumber % 2 === 0) {
      setCatched(true);
      onPokemonCaptured();
      Alert.alert(
        'Good Job!',
        `You just captured ${
          pokemonData?.name?.charAt(0).toUpperCase() +
          pokemonData?.name?.slice(1)
        }.`,
        [
          {
            text: 'Go to PokeBag',
            onPress: () => navigation.navigate('Pokebag'),
          },
          { text: 'OK' },
        ],
      );
    } else {
      setCatched(false);
      Alert.alert('Noob!', 'Please Try Again :)', [
        {
          text: 'Give Up!',
        },
        { text: 'Try Again', onPress: () => onCatch() },
      ]);
    }
  };

  useEffect(() => {
    checkPokemon();
  }, [checkPokemon]);

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.mainSection}>
              <View style={styles.topNavbar}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(getPokedex());
                    dispatch(setLastSeen(1));
                    navigation.navigate('Home');
                  }}>
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
          showsVerticalScrollIndicator={false}
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
