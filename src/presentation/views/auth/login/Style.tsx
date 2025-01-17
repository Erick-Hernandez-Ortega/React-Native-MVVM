import {StyleSheet} from 'react-native';
import {MyColors} from '../../../theme/AppTheme';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
  title: {
    fontSize: 28,
    marginLeft: 30,
    color: MyColors.background,
  },
  img: {
    width: 180,
    height: 180,
    transform: [{rotate: '35deg'}],
    alignSelf: 'flex-end',
  },
  textRegister: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: MyColors.secondary,
  },
  svgContainer: {
    backgroundColor: MyColors.primary,
    height: '45%',
    paddingTop: 50,
  },
  svg: {
    position: 'absolute',
    top: 90,
  },
  divider: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginStyles;
