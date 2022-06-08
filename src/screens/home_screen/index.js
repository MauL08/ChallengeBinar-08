import { View, ActivityIndicator, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const HomeScreen = () => {
  const { isLoading } = useSelector(state => state.global);
  const { userInfo } = useSelector(state => state.user);

  if (isLoading) {
    return <ActivityIndicator style={styles.loading} color="green" />;
  } else {
    return (
      <View style={styles.container}>
        <Text>LOGGED as {userInfo.name}</Text>
      </View>
    );
  }
};

export default HomeScreen;
