const googleSigninStyle = {
    customBtn: {
        display: 'inline-block',
        width: '100%',
        height: '64px',
        borderRadius: '6px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
        whiteSpace: 'nowrap',
        marginBottom: '30px'
    },
    icon: {
        background: 'url("https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg") transparent 5px 50% no-repeat',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 30px',
        padding: '10px 0',
        width: '42px',
        height: '42px'
    },
    buttonText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        fontSize: '16px',
        fontWeight: 500
    }

}

const GoogleSignin = () => {
    return (
        <div>
            <div id="customBtn" style={googleSigninStyle.customBtn}>
            <span style={googleSigninStyle.icon}></span>
            <span style={googleSigninStyle.buttonText}>Register with Google</span>
            </div>
        </div>
    );
}

export default GoogleSignin;