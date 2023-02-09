const Icon = props => {
    const classes = `icon-${props.icon} ${props.className !== undefined ? props.className : ""}`
    if (props.onClick) {
        const iconClickHandler = () => {
            props.onClick()
        }
        
        return <i onClick={iconClickHandler} className={classes}></i>
    }
    return <i className={classes}></i>
}

export default Icon