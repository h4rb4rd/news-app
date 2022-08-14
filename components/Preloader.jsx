import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

const Preloader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' />
			<Text style={styles.message}>Загрузка...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	message: {
		fontSize: 24,
		fontWeight: '500',
		color: '#000',
		marginTop: 15,
	},
})

export default Preloader
