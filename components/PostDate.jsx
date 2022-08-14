import { StyleSheet, Text } from 'react-native'

const PostDate = ({ createdAt }) => {
	return <Text style={styles.date}>{createdAt}</Text>
}

const styles = StyleSheet.create({
	date: {
		fontSize: 12,
		color: 'rgba(0, 0, 0, 0.4)',
		marginTop: 2,
	},
})

export default PostDate
