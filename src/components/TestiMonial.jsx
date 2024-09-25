
import QuoteCard from './QuoteCard'
import "../css/quote.css";

const TestiMonial = () => {
    return (
        <div className='testimonial-card-container'>
            <div className="text-wrapper">
                <h2>Heading</h2>
                <p>Subheading</p>
            </div>
            <div className='quote-card-wrapper'>
                {
                    Array(6).fill().map((_, index) => (
                        <QuoteCard key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default TestiMonial;