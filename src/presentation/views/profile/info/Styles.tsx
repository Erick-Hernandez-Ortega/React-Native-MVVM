import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';

const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
    },
    backgroundImage: {
      width: '100%',
      height: 300,
    },
    darkness: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 26,
        position: 'absolute',
        alignSelf: 'center',
        top: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: 250,
        alignSelf: 'center',
    },
});

export default ProfileInfoStyles;
