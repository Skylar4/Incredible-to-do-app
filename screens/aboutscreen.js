import React from 'react';
import { Button } from 'react-native';
import { View } from 'react-native-web';
import MainLayout from '../layouts/mainLayout';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </MainLayout>

  );
};

export default AboutScreen;