import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import './styles';

/**
 * List of teachers component
 * @returns React native component
 */
function TeacherList() {
  return (
    <View>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default TeacherList;