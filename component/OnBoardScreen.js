import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppButton from './AppButton';
export default function OnBoardScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.medi1} source={require('./medi1.png')} />
      <Text style={{fontSize: 24, color: '#000000'}}>
        Resolve all your mental
      </Text>
      <Text style={{fontSize: 45, fontWeight: 'bold', color: '#181F39'}}>
        PROBLEM
      </Text>
      <View style={styles.bottomContainer}>
        <Text style={{fontSize: 15, marginBottom: 20, color: '#000000'}}>
          Take a breath, let’s get started
        </Text>
        <AppButton
          title="Create Account"
          color="#121A3A"
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={{marginBottom: 20, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, color: '#000000'}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={{color: '#171E38'}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000000'}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faede4',
    alignItems: 'center',
    // justifyContent: "center",
  },
  bottomContainer: {
    position: 'absolute',

    bottom: 0,
  },
});
