import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#84FFA6',
        alignItems: 'center',
    },
    form: {
        flexDirection: 'row',
        margin: 30,

    },
    inputPasta: {
        backgroundColor: '#FFF',
        width: 160,
        height: 48,
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
    },
    inputHeight: {
        backgroundColor: '#FFF',
        width: 160,
        height: 48,
        borderRadius: 5,
        marginLeft: 10,
        alignItems: 'center',
    },
    Button: {
        backgroundColor: '#90AFFE',
        width: 150,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    ButtonText: {
        color: '#000',
        fontSize: 14,
    },
    title: {
        fontSize: 18,
        marginTop: 20,
    },
    result: {
        marginTop: 20,
        fontSize: 36,
    },
    alert: {
        fontSize: 14,
        marginTop: 20,
        color: '#000000',
    },
    tableView: {
        backgroundColor: '#FFF',
        width: 220,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 5,
    },
    tableText: {
        fontSize: 12,
    }
});