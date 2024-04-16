import '../styles/modules/BlockBox.scss'

function BlockBox({ children, size }) {
  return <div className={`BlockBox ${size}`}>{children}</div>
}

export default BlockBox;