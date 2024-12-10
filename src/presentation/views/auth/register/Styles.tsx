import {StyleSheet} from 'react-native';
import {MyColors} from '../../../theme/AppTheme';

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
  title: {
    fontSize: 28,
    marginLeft: 50,
    color: MyColors.background,
  },
  svgContainer: {
    backgroundColor: MyColors.primary,
    height: '30%',
    paddingTop: 30,
  },
  svg: {
    position: 'absolute',
    top: -10,
  },
  img: {
    width: 130,
    height: 130,
    transform: [{rotate: '35deg'}],
    alignSelf: 'flex-end',
  },
  divider: {
    flex: 1,
  },
  arrowBack: {
    width: 30,
    height: 30,
  },
  arrowBackContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
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

export default RegisterStyles;
