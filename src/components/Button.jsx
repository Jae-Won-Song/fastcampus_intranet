function Button({ type, children, size, color, onClick }) {
  return (
    <button type={type} className={['Button', size, color].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: 'primary'
};

export default Button;
