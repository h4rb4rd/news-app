import { StyleSheet, Text } from 'react-native'

const PostScreenText = ({ text }) => {
	return <Text style={styles.text}>{text}</Text>
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		lineHeight: 24,
	},
})

export default PostScreenText
