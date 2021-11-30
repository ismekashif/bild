const titleStyle = {
    titleHeading: {
        fontSize: '30px',
        fontWeight: 'bold'
    },
    titlePara: {
        fontSize: '18px',
        color: '#8692A6',
        marginTop: '10px'
    }
}

const Title = props => {
    return (
        <>
            <h1 style={titleStyle.titleHeading}>{props.title}</h1>
            <p style={titleStyle.titlePara}>{props.para}</p>
        </>
    );
}

export default Title;