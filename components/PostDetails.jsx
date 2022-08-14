import { StyleSheet, View } from 'react-native'

import PostDate from './PostDate'
import PostTitle from './PostTitle'

const PostDetails = ({ title, createdAt }) => {
	return (
		<View style={styles.container}>
			<PostTitle title={title} />
			<PostDate createdAt={createdAt} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
})

export default PostDetails
