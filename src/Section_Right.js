import './resume.css';
import React from 'react';

function PROJECTS(props){
    const projects_list =  props.techProjects.arguments.Projects;
    const itemList = projects_list.map((project,i)=>
        <>
            <div className={'project_'+i}>
            <i className="fa-solid fa-up-right-from-square"></i>&nbsp;&nbsp;&nbsp;
                <a className='project-url' target="_blank" rel="noopener noreferrer" href={project}>{project.slice(8,)}</a>
            </div>
            <div className='sub-seperator-right'/>
        </>
    );
    return(itemList);
}

function LINKS(props){
    const other_links =  props.otherlinks.arguments.otherlinks;
    const itemList = other_links.map((link,i)=>
        <>
            <div className={'link_'+i}>
                <i className={'other-link-icon '+link.icon}></i>&nbsp;&nbsp;&nbsp;
                <a className='project-url' target="_blank" rel="noopener noreferrer" href={link.url}>{link.url.slice(8,)}</a>
            </div>
            <div className='sub-seperator-right'/>
        </>
    );
    return(itemList);
}


function TECH_SKILLS(props) {
    const TechList = props.techSkills.arguments.TechGraphic;
    const techSkills = TechList.map((skill) => 
        <>
            <div className='tech-skill row col-6'>
            <i className= {skill.icon+' skill-fa col-3'}></i>
                <div className="progress col-9">
                    <div className="progress-bar" role="progressbar" style={{ width: skill.widthPx }}
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </>
    )
    return (techSkills);
}


function TOOL_LIST(props) {
    const ToolList = props.toolList.arguments.ToolList;
    const Tool_List = ToolList.map((tool) => 
        <>
            <div className={tool.CoLSize}>{tool.ColVal}</div>
        </>
    )
    return (Tool_List);
}

function SECTION_RIGHT(props) {
    return (
        <>
            <section className="right" id="right">
                <div className='tech-skills'>tech Skills</div>
                <div className='seperator-right'/>
                <div className='row'>
                    <TECH_SKILLS techSkills = {props}/>
                </div>
                <br />
                <div className='tech-framework'>framework & library</div>
                <div className='seperator-right'/>
                <div className='tools-list row'>
                    <div className='col-3'>django</div>
                    <div className='col-5'>RESTframework</div>
                    <div className='col-3'>reactJS</div>
                    <div className='col-4'>odoo ERP</div>
                    <div className='col-2'>API</div>
                    <div className='col-2'>ORM</div>
                    <div className='col-2'>RegEx</div>
                    <div className='col-8'>Data Structure & Algorithm</div>
                </div>
                <br />
                <div className='tech-tools'>used Tools</div>
                <div className='seperator-right'/>
                <div className='tools-list row'>
                   <TOOL_LIST toolList = {props}/>
                </div>
                <br />
                <div className='tech-projects'>projects links</div>
                <div className='seperator-right'/>
                <div className='project-list'>
                    <PROJECTS techProjects = {props}/>
                </div>
                <br />
                <div className='other-links'>Other Links</div>
                <div className='seperator-right'/>
                <div className='links'>
                    <LINKS otherlinks = {props}/>
                </div>
            </section>
        </>
    )
}

export default SECTION_RIGHT;
