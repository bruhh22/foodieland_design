export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    ...props
}) {
    const baseClasses = 'font-medium rounded-lg transition-colors duration-200 flex items-center justify-center'

    const variants = {
        primary: 'bg-primary text-white hover:bg-opacity-90',
        secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
        outline: 'bg-transparent border border-gray-300 text-gray-700 hover:border-primary hover:text-primary',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
        <button
            className={classes}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}