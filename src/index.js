import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return(
        <header>
            <nav>
                <img src="r.png" width="40px"/>
            </nav>
        </header>
    )
}

function MainContent(){
    return(<div>

        </div>

        )
}

function Footer(){
    return(
        <p>nto jest stópka</p>
    )
}

function Page(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById('root'));