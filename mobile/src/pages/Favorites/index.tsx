import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

/**
 * Favorites teacher component
 * @returns React native component
 */
function Favorites() {
  return (
    <View>
      <PageHeader title="Proffys disponíveis" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;