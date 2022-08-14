import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import PostScreenImage from '../components/PostScreenImage'
import PostScreenText from '../components/PostScreenText'
import Preloader from '../components/Preloader'
import useGetArticle from '../hooks/useGetArticle'

const PostScreen = ({ route, navigation }) => {
	const { fetchArticle, data, isLoading } = useGetArticle()
	const { id, title } = route.params

	useEffect(() => {
		fetchArticle(id)
		navigation.setOptions({ title })
	}, [])

	if (isLoading) {
		return <Preloader />
	}

	return (
		<View style={styles.container}>
			<PostScreenImage imageUrl={data?.imageUrl} />
			<PostScreenText text={data?.text} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
})

export default PostScreen
