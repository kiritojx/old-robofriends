import React from 'react';

const Card = (props) => {

    // Destructuring
    const { id, name, email } = props;
    return (
        <div className="bg-light-green dib grow ma2 br3 pad3 shadow-5 tc">
            <img alt='avatar-robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>
                    {name}
                </h2>
                <p>
                    {email}
                </p>
            </div>
        </div>

    );
}

export default Card;