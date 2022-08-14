import { StyleSheet, Image } from 'react-native'

const PostImage = ({ imageUrl }) => {
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
		width: 60,
		height: 60,
		borderRadius: 12,
		marginRight: 12,
	},
})

export default PostImage
