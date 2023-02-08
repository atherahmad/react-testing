type TitleProps = {
    name?: string
}

function Title(props: TitleProps) {

    return (
        <div>

            <div>Welcome {props.name? props.name: "Guest"}</div>
            {props? <h1>got props</h1>:<p>no props</p>}
        </div>
    )
}

export default Title
