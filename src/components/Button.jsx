function Button({ type, children, size, color }) {
	return (
		<button
			type={type}
			className={['Button', size, color].join(' ')}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	color: 'primary'
};

export default Button;
