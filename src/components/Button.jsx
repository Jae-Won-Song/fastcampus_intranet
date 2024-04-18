<<<<<<< HEAD
function Button({ type, children, size, color }) {
	return (
		<button
			type={type}
			className={['Button', size, color].join(' ')}>
=======
function Button({ type, children, size, color, onClick }) {
	return (
		<button
			type={type}
			className={["Button", size, color].join(" ")}
			onClick={onClick}>
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
			{children}
		</button>
	);
}

Button.defaultProps = {
<<<<<<< HEAD
	color: 'primary'
=======
	color: "primary"
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
};

export default Button;
