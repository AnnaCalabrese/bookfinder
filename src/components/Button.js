const Button = ({color , text}) => {
    const onClick = () => {
        console.log("Hi!")
    }
    return <button type="submit" onClick={onClick} >{text}</button>
}

export default Button