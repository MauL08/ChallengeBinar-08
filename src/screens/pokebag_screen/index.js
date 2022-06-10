import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BackIcon } from '../../core/assets';
import { styles } from './styles';
import { Pokeball } from '../../core/assets';
import database from '@react-native-firebase/database';
import { getPokemon } from '../../data/slices/pokemonSlice';

const PokebagScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pokemonList, setPokemonList] = useState([]);

  const onGetPokebag = () => {
    database()
      .ref('/pokebag')
      .once('value')
      .then(snapshot => {
        setPokemonList(Object.values(snapshot.val()));
      });
  };

  useEffect(() => {
    onGetPokebag();
  }, []);

  return (
    <View>
      <View style={styles.topNavbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.textPokebag}>PokeBag</Text>
        <Text style={styles.textCount(pokemonList.length)}>
          {pokemonList.length}
        </Text>
      </View>
      <View style={styles.mainSection}>
        <FlatList
          numColumns={2}
          data={pokemonList}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(getPokemon(item.name));
                navigation.navigate('Detail');
              }}
              style={styles.pokemonContainer}>
              <Image source={Pokeball} style={styles.pokeball} />
              <Text>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default PokebagScreen;
