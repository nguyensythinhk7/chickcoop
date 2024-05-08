import './button.css';
import { CSSProperties } from 'react';

const Button = ({ padding = '7px 25px', fontSize = 20, className = '',  title = '', type = 'primary', onClick, style }: { padding?: string, fontSize?: number, className?: string, title: string, type: 'primary' | 'secondary' | '3rd', style?: CSSProperties , onClick ?: () => any }) => {
  return <button style={style} onClick={onClick} className={`${className } btn-type-${type}`} >
    <span style={{ padding,  fontSize: `${fontSize}px` }} >{title}</span>
  </button>
}

export default Button;