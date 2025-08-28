import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const LoadingScreen = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación de pulso para los puntos
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    return () => {
      pulseAnimation.stop();
    };
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0f2a18ff', '#1e3b29ff', '#488445ff']}
        style={styles.background}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        
        <View style={styles.content}>
          {/* Texto de carga */}
          <Text style={styles.loadingText}>Cargando</Text>
          
          {/* Puntos animados */}
          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((index) => (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  {
                    opacity: pulseAnim.interpolate({
                      inputRange: [1, 1.2],
                      outputRange: [0.3, 1],
                    }),
                    transform: [
                      {
                        scale: pulseAnim.interpolate({
                          inputRange: [1, 1.2],
                          outputRange: [0.8, 1.2],
                        }),
                      },
                    ],
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: width * 0.05,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F59E0B',
    marginHorizontal: 6,
  },
});

export default LoadingScreen;