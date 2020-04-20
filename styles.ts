import {StyleSheet} from 'react-native';

export const red = '#c62828';
export const pink = '#AD1457';
export const purple = '#6A1B9A';
export const deepPurple = '#4527A0';
export const indigo = '#283593';
export const blue = '#1565C0';
export const lightBlue = '#0277BD';
export const cyan = '#00838F';
export const teal = '#00695C';
export const green = '#2E7D32';
export const lightGreen = '#558B2F';
export const lime = '#9E9D24';
export const yellow = '#F9A825';
export const amber = '#FF8F00';
export const orange = '#EF6C00';
export const deepOrange = '#D84315';
export const brown = '#4E342E';
export const grey = '#424242';
export const bluegrey = '#37474F';

export const white = '#FFFFFF';
export const black = '#000000';
export const colorText = 'rgba(255, 255, 255, .5)';

export const basePadding = 15;

const styles = StyleSheet.create({
  header:{
    backgroundColor: bluegrey,
    height: 60,
    padding: basePadding,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerStyle:{
    backgroundColor: bluegrey,
  },
  headerTitleStyle:{
    color: white,
    fontSize: 24,
  }
});

export default styles;