import "./hero.css"

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="hero__container">
                    <div className="hero__left">
                        <h3>Biznesingizni keyingi bosqichga
                            olib chiqing</h3>
                        <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                        <a className="header__btn" href="tel:+998909213711">+998 90 921 37 11</a>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Mup6uM2gdKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Hero