import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import './styles';

/**
 * Favorites teacher component
 * @returns React native component
 */
function Favorites() {
  return (
    <View>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default Favorites;