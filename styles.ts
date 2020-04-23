import { StyleSheet } from 'react-native';

export const colors = {
  red: '#c62828',
  pink: '#AD1457',
  purple: '#6A1B9A',
  deepPurple: '#4527A0',
  indigo: '#283593',
  blue: '#1565C0',
  lightBlue: '#0277BD',
  cyan: '#00838F',
  teal: '#00695C',
  green: '#2E7D32',
  lightGreen: '#558B2F',
  lime: '#9E9D24',
  yellow: '#F9A825',
  amber: '#FF8F00',
  orange: '#EF6C00',
  deepOrange: '#D84315',
  brown: '#4E342E',
  grey: '#424242',
  bluegrey: '#37474F',
  white: '#FFFFFF',
  black: '#181818',
};

export const basePadding = 15;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default styles;
