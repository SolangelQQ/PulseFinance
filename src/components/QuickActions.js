import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Enviar',
      icon: 'arrow-up',
    },
    {
      id: 2,
      title: 'Recibir',
      icon: 'arrow-down',
    },
    {
      id: 3,
      title: 'Cambiar',
      icon: 'repeat',
    },
    {
      id: 4,
      title: 'Más',
      icon: 'grid',
    },
  ];

  const ActionButton = ({action}) => (
    <TouchableOpacity 
      style={styles.actionButton} 
      activeOpacity={0.7}>
      <View style={styles.actionContainer}>
        <Icon name={action.icon} size={24} color="#FFFFFF" />
      </View>
      <Text style={styles.actionText}>{action.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Acciones rápidas</Text>
      <View style={styles.actionsRow}>
        {actions.map(action => (
          <ActionButton key={action.id} action={action} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.03,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 20,
    letterSpacing: -0.3,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.01,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionContainer: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.08,
    backgroundColor: 'rgba(45, 81, 39, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#10d845ff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  actionText: {
    fontSize: width * 0.034,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default QuickActions;

