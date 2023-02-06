type TitleProps = {
    name?: string
}

function Title(props: TitleProps) {

    return (
        <div>Welcome {props.name}</div>
    )
}

export default Title
