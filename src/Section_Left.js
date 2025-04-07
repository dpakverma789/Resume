import "./resume.css";
import React from 'react';


function EducationList(props) {
    const education_list = props.eduction.arguments.Education;
    const listItems = education_list.map((item,i) =>
    <>
        <div className={"education-section_"+i}>
            <div className="education-course">{item.course}</div>
            <div className="education-university">{item.university}</div>
            <div className="education-duration">
                <i className="fa-solid fa-calendar-days"></i>&nbsp;{item.duration}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-location-dot"></i>&nbsp;{item.location}
            </div>
        </div>
        <br/>
    </>);
    return (listItems);
  }

function Responsibility(props){
    if (props.res.length>0){
    const res_list = props.res;
    const listItems = res_list.map((item) =>
        <>
            <li>{item}</li>
        </>
    )
    return(listItems);
    }
    return(<></>);
}


function ExperienceList(props) {
    const experience_list = props.experience.arguments.Experience;
    const listItems = experience_list.map((item,i) =>
    <>
        <div className={"experience-section_"+i}>
            <div className="experience-company">{item.company}</div>
            <div className="experience-designation">{item.designation}</div>
            <div className="experience-duration"><i className="fa-solid fa-calendar-days"></i>&nbsp;
            {item.duration}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-location-dot"></i>&nbsp;{item.location}
            </div>
            <ul><Responsibility res={item.responsibility}/></ul>
        </div>
        <div className='sub-seperator-left'/>
    </>);
    return (listItems);
}
  
  


function Section_Left(props) {
    return (
        <>
            <section className="left" id="left">
                <span className="education-title">education</span>
                <div className='seperator-left'/>
                <EducationList eduction={props} />
                <span className="experience-title">experience</span>
                <div className='seperator-left'/>
                <ExperienceList experience={props} />
            </section>
        </>
    );
}

export default Section_Left;
