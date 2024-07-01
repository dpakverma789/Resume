import './resume.css';

function PROJECTS(props){
    const projects_list = props.project.projects
    const itemList = projects_list.map((project,i)=>
        <>
            <div className={'project_'+i}>
                <i className="fa-solid fa-code-branch"></i>&nbsp;&nbsp;&nbsp;
                <a className='project-url' target="_blank" rel="noreferrer" href={project}>{project.slice(8,)}</a>
            </div>
            <div className='sub-seperator-right'/>
        </>
    );
    return(itemList);

}


function SECTION_RIGHT(props) {
    
    return (
        <>
            <section className="right" id="right">
                <div className='tech-skills'>tech Skills</div>
                <div className='seperator-right'/>
                <div className='row'>
                    {/* HTML */}
                    <div className='tech-skill row col-6'>
                        <i className="fa-brands fa-html5 skill-fa col-3"></i>
                        <div className="progress col-9">
                            <div className="progress-bar" role="progressbar" style={{ width: 40 }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* Python */}
                    <div className='tech-skill row col-6'>
                        <i className="fa-brands fa-python skill-fa col-3"></i>
                        <div className="progress col-9">
                            <div className="progress-bar" role="progressbar" style={{ width: 30 }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* CSS */}
                    <div className='tech-skill row col-6'>
                        <i className="fa-brands fa-css3-alt skill-fa col-3"></i>
                        <div className="progress col-9">
                            <div className="progress-bar" role="progressbar" style={{ width: 40 }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* React */}
                    <div className='tech-skill row col-6'>
                        <i className="fa-brands fa-react skill-fa col-3"></i>
                        <div className="progress col-9">
                            <div className="progress-bar" role="progressbar" style={{ width: 20 }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* JS */}
                    <div className='tech-skill row col-6'>
                        <i className="fa-brands fa-square-js skill-fa col-3"></i>
                        <div className="progress col-9">
                            <div className="progress-bar" role="progressbar" style={{ width: 20 }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* Database */}
                    <div className='tech-skill row col-6'>
                        <i className="fa-solid fa-database skill-fa col-3" style={{ color: "black" }}></i>
                        <div className="progress col-9">
                            <div className="progress-bar" role="progressbar" style={{ width: 40 }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='tech-framework'>framework & library</div>
                <div className='seperator-right'/>
                <div className='tools-list row'>
                    <div className='col-3'>django</div>
                    <div className='col-5'>RESTframework</div>
                    <div className='col-3'>reactJs</div>
                    <div className='col-2'>odoo</div>
                </div>
                <br />
                <div className='tech-tools'>used Tools</div>
                <div className='seperator-right'/>
                <div className='tools-list row'>
                    <div className='col-3'>pycharm</div>
                    <div className='col-3'>vscode</div>
                    <div className='col-2'>git</div>
                    <div className='col-3'>postgres</div>
                    <div className='col-2'>jira</div>
                    <div className='col-2'>figma</div>
                    <div className='col-3'>postman</div>
                    <div className='col-3'>ubuntu</div>
                    <div className='col-3'>windows</div>
                </div>
                <br />
                <div className='tech-projects'>projects</div>
                <div className='seperator-right'/>
                <div className='project-list'>
                    <PROJECTS project={props}/>
                </div>
            </section>
        </>
    )
}

export default SECTION_RIGHT;
