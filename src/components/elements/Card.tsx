type Props = {
    title: string
    subtitle: string
}

const Card = (props: Props) => {
    return (
        <section>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </section>
    )
}

export default Card
