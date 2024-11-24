const capitalizeFirstLetter = string => {
	if (!string) return '' // Obsługa pustego ciągu
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export default capitalizeFirstLetter
