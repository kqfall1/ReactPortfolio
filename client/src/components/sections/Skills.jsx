import '../../styles/Skills.css';

export default function Skills() {
    return ( 
        <>
            <h1 className="h1Margins">Technical Skills</h1>
            <ul className="skillList">
                <li><div className="skillNames">Programming</div>: Proficient in writing maintainable, modular, 
                    and scalable software in C#, Java, Python, JavaScript. Also familiar with utilizing APIs.</li>
                <li><div className="skillNames">Backend Development</div>: Possess a deep understanding of 
                    object-oriented concepts such as inheritance, encapsulation, polymorphism, and interfaces. 
                    Also familiar with serialization in various formats. </li>
                <li><div className="skillNames">Frameworks</div>: Experienced in using .NET (Core), React.js, 
                    Express.js, and Node.js to complete software projects. This very software project was created 
                    using the MERN stack! It is incredibly powerful!</li>
                <li><div className="skillNames">Software Development Tools</div>: Solid foundation in SQL and PL/SQL. Familiar 
                with controlling software versions with Git and creating UML software diagrams 
                with Microsoft Visio. Have also used Jira for project management.</li>
            </ul>
        </>  
    )
}     