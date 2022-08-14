import { StyleSheet, View } from 'react-native'

import PostDetails from './PostDetails'

import PostImage from './PostImage'

const Post = ({ imageUrl, title, createdAt }) => {
	return (
		<View style={styles.container}>
			<PostImage imageUrl={imageUrl} />
			<PostDetails title={title} createdAt={createdAt} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
	},
})

export default Post
