import { useState } from 'react'
import { Alert } from 'react-native'

import { BASE_URL } from '../api'

const useGetArticle = () => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const fetchArticle = async id => {
		setIsLoading(true)

		try {
			const response = await fetch(`${BASE_URL}/articles/${id}`)
			const data = await response.json()

			setData(data)
		} catch (err) {
			Alert.alert('Во время загрузки произошла ошибка!', err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return { fetchArticle, data, isLoading }
}

export default useGetArticle
