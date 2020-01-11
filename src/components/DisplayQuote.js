import React from 'react';

function DisplayQuote({quote}) {
    return (
        <div className="DisplayQuote">
            <img 
                src={quote.image}
                alt={quote.character}
            />
            <p>
                {quote.quote}
            </p>
            <p>
                {quote.character}
            </p>
        </div>
    )
}

export default DisplayQuote;