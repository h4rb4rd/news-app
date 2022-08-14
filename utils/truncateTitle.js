export const truncateTitle = string => {
	if (string.length >= 50) {
		return string.substring(0, 50) + '...'
	}

	return string
}
