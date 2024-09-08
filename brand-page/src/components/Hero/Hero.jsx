import './Hero.css'
const Hero = () => {
    return(
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                    <img src="/images/amazon.png" alt="Amazon_logo" />
                    <img src="/images/flipkart.png" alt="Flipkart_logo" />
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src="/images/shoe_image.png" alt="Hero_image" />
            </div>
        </main>
       
    )
}
export default Hero;