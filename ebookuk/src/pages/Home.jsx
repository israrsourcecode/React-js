import HeroImg from "../components/Hero/HeroImg/HeroImg"
import HeroTitle from "../components/Hero/HeroTitle/HeroTitle"

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="hero-data">
                                <HeroTitle heading={"Every Great Book Begins With a"} highlight={"Voice Like Yours"} headingpara={"Avail the best eBook writing services at pocket-friendly rates"} para={"Our ebook publishing platform helps authors transform their thoughts into books that readers can hold on their screens and remember long after the final page."} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <HeroImg img_url={"../src/assets/images/top-banner-book.webp"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
