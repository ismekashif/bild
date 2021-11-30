const securedStyle = {
    secured: {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#8692A6'
    },
    icon: {
        marginRight: '10px'
    }
}

const Secured = () => {
    return <p style={securedStyle.secured}>
        <i class="fas fa-lock" style={securedStyle.icon}></i> Your Info is safely secured
    </p>
}

export default Secured;