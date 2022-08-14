import { useState } from 'react'
import { Alert } from 'react-native'

import { BASE_URL } from '../api'

const useGetArticles = () => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const fetchArticles = async () => {
		setIsLoading(true)

		try {
			const response = await fetch(`${BASE_URL}/articles`)
			const data = await response.json()

			setData(data)
		} catch (err) {
			Alert.alert('Во время загрузки произошла ошибка!', err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return { fetchArticles, data, isLoading }
}

export default useGetArticles
