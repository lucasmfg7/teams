import { useState } from 'react'
import { FlatList } from 'react-native'

import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import { Container } from './styles'

export const Groups = () => {
  const [groups, setGroups] = useState([
    "Galera do Ignite",
    "Galera do React Native",
  ]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
};
