const Hero = () => {
    return (
        <header>
            <div id="logo">
                <img src="/assets/logo.png" alt="logo" />
                <span>Oasis.</span>
            </div>
            <blockquote>
                <div><i className="fas fa-quote-left"></i></div>
                <p id="quote">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                <p id="author">Vincent Obi <i className="fas fa-check-circle"></i></p>
            </blockquote>
        </header>
    );
}

export default Hero;