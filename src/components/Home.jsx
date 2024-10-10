import '../styles/home.css'

function Home() {
    return (
        <div>
            <div className='hero-container'>
                <div className='hero-image'>
                    <div className='hero-text'>Welcome to the Tire Network!</div>
                </div>
            </div>
            <div className='message-container'>
                <h3>Message from the owner: </h3>
            </div>
            <div className='video-container'>
                <iframe src="https://www.youtube-nocookie.com/embed/uXQULoZQogM?si=w0bc4mxuEh3shMjF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div>
                <div className='best-heading-container'>
                    <h3>The Tire Network of Baltimore, The best for the best!</h3>
                </div>
                <div className='best-info-1-container'>
                    <p>
                    Nestled in the heart of Federal Hill, Baltimore, MD, The Tire Network stands as a paragon of automotive excellence, setting the gold standard for auto repair and maintenance services. This establishment is more than just a workshop; its an institution where precision engineering meets impeccable customer service, creating an unrivaled automotive care experience. With a team of highly skilled technicians who are not only ASE-certified but also continuously trained on the latest automotive technologies, The Tire Network ensures that every vehicle is treated with the utmost care and expertise.
                    </p>
                    <div className='best-info-1-image'>

                    </div>
                </div>
                <div className='best-info-2-container'>
                    <div className='best-info-2-image'>

                    </div>
                    <p>
                    What truly sets The Tire Network apart is its commitment to customer satisfaction. Understanding the importance of trust and transparency in the auto service industry, this shop provides detailed, clear explanations of each service, ensuring that customers are well-informed and comfortable with every decision made. Moreover, the shop prides itself on its honesty, never recommending unnecessary services, and always prioritizing the {`customer's`} needs and budget. With state-of-the-art diagnostic tools and a passion for excellence, The Tire Network {`doesn't`} just repair vehicles; it restores peace of mind, making it the undisputed best auto shop in Baltimore, MD.
                    </p>
                </div>
            </div>
            <div>
                <h3></h3>
            </div>
        </div>
    )
}

 export default Home