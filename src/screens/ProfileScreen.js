import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Configuración de Cuenta',
      subtitle: 'Privacidad, seguridad, idioma',
      icon: 'settings',
      color: '#071cdcff',
    },
    {
      id: 2,
      title: 'Métodos de Pago',
      subtitle: 'Gestionar tarjetas y cuentas',
      icon: 'credit-card',
      color: '#e0b310ff',
    },
    {
      id: 3,
      title: 'Historial de Transacciones',
      subtitle: 'Ver todas las transacciones',
      icon: 'clock',
      color: '#ff6b6b',
    },
    {
      id: 4,
      title: 'Ayuda y Soporte',
      subtitle: 'Obtén ayuda cuando la necesites',
      icon: 'help-circle',
      color: '#0d0d0cd1',
    },
    {
      id: 5,
      title: 'Acerca de',
      subtitle: 'Conoce más sobre PulseFinance',
      icon: 'info',
      color: '#ffd43b',
    },
  ];

  const MenuItem = ({item}) => (
    <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
      <LinearGradient
        colors={['rgba(35, 106, 50, 0.3)', 'rgba(21, 44, 28, 0.63)']}
        style={styles.menuGradient}>
        <View style={[styles.menuIcon, {backgroundColor: item.color + '20'}]}>
          <Icon name={item.icon} size={18} color={item.color} />
        </View>
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>{item.title}</Text>
          <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
        </View>
        <Icon name="chevron-right" size={18} color="#b8b9c0ff" />
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#0F172A', '#4d8961ff', '#506f5aff']}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Perfil</Text>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="edit-3" size={20} color="#e0b310ff" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileCard}>
            <LinearGradient
              colors={['rgba(35, 117, 58, 0.98)', 'rgba(3, 17, 2, 0.96)']}
              style={styles.profileGradient}>
              <LinearGradient
                colors={['rgba(35, 117, 58, 0.98)', 'rgba(3, 17, 2, 0.96)']}
                style={styles.profileGlass}>
                
                <View style={styles.profileMainContent}>
                  <View style={styles.avatarContainer}>
                    <Image
                      source={{uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}}
                      style={styles.avatarImage}
                    />
                    <View style={styles.avatarBorder} />
                  </View>
                  
                  <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>Solangel Quiroga</Text>
                    <Text style={styles.userEmail}>solangel@gmail.com</Text>
                  </View>
                </View>

                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>5</Text>
                    <Text style={styles.statLabel}>Años activo</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>Gold</Text>
                    <Text style={styles.statLabel}>Miembro</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>4.9</Text>
                    <Text style={styles.statLabel}>Calificación</Text>
                  </View>
                </View>
                
              </LinearGradient>
            </LinearGradient>
          </View>

          <View style={styles.menuSection}>
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </View>

          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
            <LinearGradient
              colors={['rgba(255, 107, 107, 0.1)', 'rgba(255, 107, 107, 0.05)']}
              style={styles.logoutGradient}>
              <Icon name="log-out" size={20} color="rgba(253, 251, 251, 0.83)" />
              <Text style={styles.logoutText}>Cerrar sesión</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>

        {false && (
          <TouchableOpacity style={styles.floatingButton} activeOpacity={0.8}>
            <LinearGradient
              colors={['#e0b310ff', '#0d290bff']}
              style={styles.floatingGradient}>
              <Icon name="plus" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  editButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  profileGradient: {
    borderRadius: 20,
  },
  profileGlass: {
    borderRadius: 18,
    padding: 5,
  },
  profileMainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarBorder: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 37,
    borderWidth: 2,
    borderColor: '#e0b310ff',
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  userEmail: {
    fontSize: 16,
    color: '#b8b9c0ff',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
  },
  statValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#d9e8ddff',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuSection: {
    paddingHorizontal: 8,
    marginBottom: 30,
  },
  menuItem: {
    marginBottom: 12,
  },
  menuGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 16,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 80,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  menuContent: {
    flex: 1,
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#e6e6e8ff',
    lineHeight: 16,
  },
  logoutButton: {
    marginHorizontal: 20,
    backgroundColor:'rgba(233, 17, 17, 1)',
    borderRadius: 16,
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(206, 12, 12, 0.83)',
  },
  logoutText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    padding: 12,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  floatingGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;