import React from 'react';
import ReactDOM from 'react-dom/client';
import SECTION_LEFT from './Section_Left';
import SECTION_RIGHT from './Section_Right';
import {HEADER,  DOWNLOAD_BUTTON} from './Header.js';

const user_details = {
  "name": "deepak verma",
  "designation": "software developer",
  "phone": "+91-8955160103",
  "email": "dpakverma789@gmail.com",
  "address": "udaipur, rajasthan"
}

const info = 
  {
    "education": [
      {
        "course": "master of business administration (I.T)",
        "university": "narsee monjee inst. of management",
        "duration": "sept 2021 - oct 2023",
        "location": "mumbai, MH"
      },
      {
        "course": "b.tech (electronics & communication)",
        "university": "rajasthan technical university",
        "duration": "aug 2015 - june 2019",
        "location": "jaipur, RJ"
      }
    ],

    "experience": [
      {
        "company": "logicloop venture pvt. ltd.",
        "designation": "software engineer",
        "duration": "April 2022 - Present",
        "location": "mumbai, MH",
        "responsibility": [
          "Hands on odoo ERP python (MVC) framework",
          "tech used odoo ORM, postgresDB, XMl, JS, APIs",
          "managing clients & inhouse odoo module"
        ]
      },
    
      {
        "company": "ksolves india pvt. ltd.",
        "designation": "software engineer",
        "duration": "Sept 2020 - March 2022",
        "location": "noida, UP",
        "responsibility": [
          "Hands on odoo ERP python (MVC) framework",
          "tech used odoo ORM, postgresDB, XMl, JS, APIs",
          "odoo modules: sales, purchase, crm, website, accounts"
        ]
      },

      {
        "company": "career transition",
        "designation": "career break (covid-lockdown)",
        "duration": "april 2020 - aug 2020",
        "location": "udaipur, RJ",
        "responsibility": []
      },

      {
        "company": "AVA Consulting",
        "designation": "US IT Recruiter",
        "duration": "Sept 2019 - March 2020",
        "location": "noida, UP",
        "responsibility": []
      }
    ]
}

const projects = [
  'https://managerpass.vercel.app',
  'https://readzara.vercel.app',
  'https://django-project-apis.vercel.app',
  'https://github.com/dpakverma789/mini-projects'
]

 


const download_button = ReactDOM.createRoot(document.getElementById('download-button'));
download_button.render(
  <>
      <DOWNLOAD_BUTTON/>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HEADER user={user_details} />
    <div className='section-container'>
      <SECTION_LEFT user_info={ info } />
      <SECTION_RIGHT projects={ projects }/>
    </div>
  </>
)