import { useEffect } from 'react'
import {
	StatusBar,
	StyleSheet,
	View,
	FlatList,
	RefreshControl,
	TouchableOpacity,
} from 'react-native'

import Post from '../components/Post'
import Preloader from '../components/Preloader'
import useGetArticles from '../hooks/useGetArticles'

export const HomeScreen = ({ navigation }) => {
	const { fetchArticles, data, isLoading } = useGetArticles()

	useEffect(() => {
		fetchArticles()
	}, [])

	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('Post', { id: item.id, title: item.title })
			}
		>
			<Post
				imageUrl={item.imageUrl}
				title={item.title}
				createdAt={item.createdAt}
			/>
		</TouchableOpacity>
	)

	if (isLoading) {
		return <Preloader />
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' />

			<FlatList
				data={data}
				renderItem={renderItem}
				refreshControl={
					<RefreshControl refreshing={isLoading} onRefresh={fetchArticles} />
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default HomeScreen
