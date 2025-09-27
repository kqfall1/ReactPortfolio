import '../../styles/BlackjackEngine.css';

import BlackjackEnginePrototype from '../../assets/BlackjackEnginePrototype.jpg'; 

export default function BlackjackEngine() { 
    return ( 
        <div className="blackjackEngine">
            <h2 className="sectionH2"><a href="https://github.com/kqfall1/BlackjackEngine" 
            target="_blank">Blackjack Engine</a></h2>
            <div className="horizontalSectionSidebar">
                <img src={BlackjackEnginePrototype} alt="My GUI prototype to test my blackjack engine"/>
                <p className="horizontalSectionSidebarRightElement"> 
                    Four years ago, I created a simple console blackjack game in Python. I was very 
                    proud of it and thought of it as my greatest programmatic creation for years. In 
                    hindsight, the application was under-engineered and crude. It also had some 
                    tendencies similar to those of spaghetti code. Furthermore, it has a few minor - 
                    but very noticeable - bugs. In this project, I sought to demonstrate my growth 
                    as a developer after two semesters in college by creating a blackbox blackjack 
                    engine in C#. I encountered many challenges and learned lessons about OOP and 
                    event-driven applications along the way. I look forward to continuing this when I 
                    have some free time. 
                </p>
            </div>
        </div>
    )
}