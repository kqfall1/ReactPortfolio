import '../styles/BlackjackEngine.css';

import BlackjackEnginePrototype from '../../assets/BlackjackEnginePrototype.jpg'; 

export default function BlackjackEngine() { 
    return ( 
        <div className="blackjackEngine">
            <h2 className="sectionH2"><a href="https://github.com/kqfall1/BlackjackEngine">
            Blackjack Engine</a></h2>
            <div className="horizontalSectionSidebar">
                <img src={BlackjackEnginePrototype} alt="My GUI prototype to test my blackjack engine"/>
                <p className="horizontalSectionSidebarRightElement"> 
                    Four years ago, I created a simple console blackjack game in Python. I was very proud of it 
                    and thought of it as my greatest programmatic creation for years. In hindsight, the 
                    application was under-engineered and crude. I have set out to refactor it into a library and
                    build GUI prototypes on top of it to test my abilities.
                </p>
            </div>
        </div>
    )
}