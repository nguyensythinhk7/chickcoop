import './button.css';

const Button = ({ className = '',  title = '', type = 'primary', onClick }: { className?: string, title: string, type: 'primary' | 'secondary', onClick ?: () => any }) => {
  return <button className={`${className } btn-type-${type}`} >
    <span>{title}</span>
  </button>
}

export default Button;