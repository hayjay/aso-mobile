import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Pressable,
  Animated,
  LogBox,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import BackButton from '../../components/BackButton';
import professional3 from '../../../assets/images/professional3.png';
import twitter from '../../../assets/images/twitter.png';
import facebook from '../../../assets/images/facebook.png';
import instagram from '../../../assets/images/instagram.png';

const ProfessionalDetails = ({ navigation }) => {
  const [dragUp, setDragUp] = React.useState(false);
  const [translateY] = React.useState(new Animated.Value(-75));

  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const handleDragUp = () => {
    if (dragUp) {
      new Animated.spring(
        translateY,
        {
          toValue: -300,
        },
        { useNativeDriver: false },
      ).start();
      setDragUp(false);
    } else {
      new Animated.spring(
        translateY,
        {
          toValue: -75,
        },
        { useNativeDriver: false },
      ).start();
      setDragUp(true);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={professional3} style={styles.image}>
        <BackButton containerStyle={styles.backButton} iconStyle={styles.btn} />
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.5))',
            'rgba(0, 0, 0, 0.8))',
          ]}
          style={styles.gradient}
        />
      </ImageBackground>

      <Animated.View
        style={([styles.professionalInfo], { transform: [{ translateY }] })}>
        <View style={styles.top}>
          <View>
            <Text style={styles.text}>10 years</Text>
            <Text style={styles.text}>Experience</Text>
          </View>
          <View>
            <Text style={styles.text}>86 jobs</Text>
            <Text style={styles.text}>Completed</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={handleDragUp}>
            <View style={styles.dragBtn} />
          </TouchableOpacity>

          <View style={styles.row}>
            <View>
              <Text style={styles.text2}>David Chinedu</Text>
              <Text style={{ color: 'rgba(19, 21, 22, 0.5)' }}>
                Interior Designer
              </Text>
            </View>
            <View style={styles.row}>
              <Image source={facebook} style={styles.socialMedia} />
              <Image source={twitter} style={styles.socialMedia} />
              <Image source={instagram} />
            </View>
          </View>

          <View style={styles.contactInfo}>
            <Text style={styles.contact}>
              42 Montgomery Road Sabo Yaba, Lagos
            </Text>
            <Text style={styles.contact}>davidchinedu@gmail.com</Text>
            <Text style={styles.contact}>+234-0803-4444-567</Text>
          </View>

          <View style={{ marginTop: 19 }}>
            <View style={styles.section}>
              <Text style={styles.sectionText}>About</Text>
              <Ionicons
                size={21}
                color="rgba(19, 21, 22, 0.4)"
                name="ios-arrow-forward"
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText}>Contact</Text>
              <Ionicons
                size={21}
                color="rgba(19, 21, 22, 0.4)"
                name="ios-arrow-forward"
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText}>Projects</Text>
              <Ionicons
                size={21}
                color="rgba(19, 21, 22, 0.4)"
                name="ios-arrow-forward"
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText}>Reviews</Text>
              <Ionicons
                size={21}
                color="rgba(19, 21, 22, 0.4)"
                name="ios-arrow-forward"
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 600,
  },
  image: {
    height: 600,
    width: '100%',
  },
  backButton: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 16,
    zIndex: 5,
  },
  btn: {
    color: '#000',
  },
  professionalInfo: {
    height: 400,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: '40%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 10,
  },
  bottom: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(19, 21, 22, 0.8)',
  },
  dragBtn: {
    width: 40,
    height: 4,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#C4C4C4',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
  },
  socialMedia: {
    marginRight: 12,
  },
  contactInfo: {
    marginTop: 16,
  },
  contact: {
    color: 'rgba(19, 21, 22, 0.8)',
    marginTop: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(19, 21, 22, 0.3)',
    paddingTop: 20,
    paddingBottom: 20,
  },
  sectionText: {
    fontSize: 16,
    color: 'rgba(19, 21, 22, 0.6)',
    fontWeight: '500',
  },
});

export default ProfessionalDetails;
