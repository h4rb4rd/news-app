import { StyleSheet, Image } from 'react-native'

const PostScreenImage = ({ imageUrl }) => {
	return (
		<Image
			style={styles.image}
			source={{
				uri: imageUrl,
			}}
		/>
	)
}

const styles = StyleSheet.create({
	image: {
		borderRadius: 10,
		width: '100%',
		height: 250,
		marginBottom: 20,
	},
})

export default PostScreenImage
