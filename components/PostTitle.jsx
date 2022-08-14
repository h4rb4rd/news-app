import { StyleSheet, Text } from 'react-native'
import { truncateTitle } from '../utils/truncateTitle'

const PostTitle = ({ title }) => {
	return <Text style={styles.title}>{truncateTitle(title)}</Text>
}

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		fontWeight: '700',
	},
})

export default PostTitle
