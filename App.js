import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';

export default function ProfilStatique() {
  const [nom, setNom] = useState('Othmane'); 
  const [message, setMessage] = useState('Bienvenue sur ton profil 👋'); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=15' }} 
        style={styles.avatar}
      />

      <Text style={styles.title}>Profil utilisateur</Text>

      
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom"
        editable={true} 
        value={nom}
        onChangeText={setNom}
      />

      
      <Text style={styles.label}>Message :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un message"
        editable={true}
        value={message}
        onChangeText={setMessage}
      />

      <Text style={styles.message}>{message}</Text>

      
      <Button
        title="Afficher une alerte"
        onPress={() => {
          Alert.alert('Bonjour !', `Salut ${nom} 👋`);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});
