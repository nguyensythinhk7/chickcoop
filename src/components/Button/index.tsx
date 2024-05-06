import './button.css';

const Button = ({ padding = '7px 25px', fontSize = 20, className = '',  title = '', type = 'primary', onClick }: { padding?: string, fontSize?: number, className?: string, title: string, type: 'primary' | 'secondary', onClick ?: () => any }) => {
  return <button onClick={onClick} className={`${className } btn-type-${type}`} >
    <span style={{ padding,  fontSize: `${fontSize}px` }} >{title}</span>
  </button>
}

export default Button;