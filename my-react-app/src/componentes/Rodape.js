import React from 'react';

//componenet sem estado -> stateless
const Rodape = props => {
    return (
        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado no curso com bootstrap <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>
    )
}

export default Rodape