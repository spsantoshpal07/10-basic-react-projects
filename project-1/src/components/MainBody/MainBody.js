import flipkart_logo from '../../resources/flipkart.png';
import amazon_logo from '../../resources/amazon.png';
import shoe_image from '../../resources/shoe_image.png';

import './MainBody.css';

const MainBody = () => {
    return (
        <>
            <div className='section container'>
                <section className='left-section'>
                    <h1>Your feet deserve the best</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className='section-btn'>
                        <button className='btn btn-shopnow'>Shop Now</button>
                        <button className='btn btn-category'>Category</button>
                    </div>
                    <div className='section-available'>
                        <p>Also Available On</p>
                        <div className='websites-logo'>
                            <img src={flipkart_logo} alt='flipkart-logo' />
                            <img src={amazon_logo} alt='amazon-logo' />
                        </div>
                    </div>
                </section>
                <section className='right-section'>
                    <img src={shoe_image} alt='shoe' />
                </section>
            </div>
        </>
    )
}

export default MainBody;