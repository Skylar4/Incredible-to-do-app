import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FooterComponent } from 'react-native-screens/lib/typescript/components/ScreenFooter';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;