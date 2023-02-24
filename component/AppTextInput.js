import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AppTextInput({icon, width = '85%', margin = 10, ...otherProps}) {
  return (
    <View style={[styles.container, {width}, {marginVertical: margin}]}>
      {icon && (
        <MaterialIcons name={icon} size={25} color="grey" style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor="grey"
        style={{fontSize: 20, width: 260}}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
    alignSelf: 'center',
  },
});

export default AppTextInput;
