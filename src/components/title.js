const Title = props => {
    return (
        <>
            <h1 id="title-heading">{props.title}</h1>
            <p id="title-para">{props.para}</p>
        </>
    );
}

export default Title;