export default function capitalizeFirstLetter(_str: string) {
	return _str && _str.charAt(0).toUpperCase() + _str.slice(1);
}
