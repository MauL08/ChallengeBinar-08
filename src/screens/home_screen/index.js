import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { getPokedex, getPokemon } from '../../data/slices/pokemonSlice';
import { Pokeball } from '../../core/assets';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isLoading } = useSelector(state => state.global);
  const { userInfo } = useSelector(state => state.user);
  const { pokemonData } = useSelector(state => state.pokemon);

  const [numberPagination, setNumberPagination] = useState(1);

  const onNextPagination = async () => {
    if (pokemonData.next === null) {
      return;
    } else {
      dispatch(getPokedex(pokemonData.next));
      if (numberPagination >= 0) {
        setNumberPagination(state => state + 1);
      }
    }
  };

  const onPrevPagination = async () => {
    if (pokemonData.previous === null) {
      return;
    } else {
      dispatch(getPokedex(pokemonData.previous));
      if (numberPagination > 0) {
        setNumberPagination(state => state - 1);
      }
    }
  };

  useEffect(() => {
    dispatch(getPokedex());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        {isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={pokemonData.results}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={() => (
              <>
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
              </>
            )}
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
            ListFooterComponent={() => (
              <>
                <View style={styles.paginationSection}>
                  <TouchableOpacity
                    onPress={() => onPrevPagination()}
                    style={styles.prevButton}>
                    <Text style={styles.textButton}>Sebelumnya</Text>
                  </TouchableOpacity>
                  <Text style={styles.numberingPageText}>
                    {numberPagination}
                  </Text>
                  <TouchableOpacity
                    onPress={() => onNextPagination()}
                    style={styles.nextButton}>
                    <Text style={styles.textButton}>Selanjutnya</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
