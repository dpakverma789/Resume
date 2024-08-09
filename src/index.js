import React from 'react';
import ReactDOM from 'react-dom/client';
import SECTION_LEFT from './Section_Left';
import SECTION_RIGHT from './Section_Right';
import { HEADER, DOWNLOAD_BUTTON } from './Header.js';

const user_details = {
  "name": "deepak verma",
  "designation": "software developer",
  "phone": "+91-8955160103",
  "email": "dpakverma789@gmail.com",
  "address": "udaipur, rajasthan"
}

const LeftSectionArguments = {
  "Education": [
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

  "Experience": [
    {
      "company": "logicloop venture pvt. ltd.",
      "designation": "software engineer",
      "duration": "April 2022 - Present",
      "location": "mumbai, MH",
      "responsibility": [
        "Hands on odoo ERP python (MVC) framework",
        "Tech used odoo ORM, postgresDB, XMl, JS, APIs",
        "Managing inhouse odoo modules"
      ]
    },

    {
      "company": "ksolves india pvt. ltd.",
      "designation": "software engineer",
      "duration": "Sept 2020 - March 2022",
      "location": "noida, UP",
      "responsibility": [
        "Hands on odoo ERP python (MVC) framework",
        "Tech used odoo ORM, postgresDB, XMl, JS, APIs",
        "Odoo modules: sales, purchase, crm, website, accounts, inventory"
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


const RightSectionArguments = {
  "Projects": [
    'https://managerpass.vercel.app',
    'https://readzara.vercel.app',
    'https://django-project-apis.vercel.app',
    'https://github.com/dpakverma789/mini-projects',
    'https://github.com/dpakverma789/Odoo'
  ],

  "otherlinks": [
    {
      'icon': "fa-brands fa-linkedin",
      'url': "https://linkedin.com/in/deepak-verma-07144012a"
    },
    {
      'icon': "fa-brands fa-hackerrank",
      'url': "https://hackerrank.com/profile/dpakverma1234"
    },
  ],

  "TechGraphic": [
    {
      "icon": "fa-brands fa-html5",
      "widthPx": 50
    },
    {
      "icon": "fa-brands fa-python",
      "widthPx": 40
    },
    {
      "icon": "fa-brands fa-css3-alt",
      "widthPx": 50
    },
    {
      "icon": "fa-brands fa-react",
      "widthPx": 30
    },
    {
      "icon": "fa-brands fa-square-js",
      "widthPx": 30
    },
    {
      "icon": "fa-solid fa-database",
      "widthPx": 50
    }
  ],

  "ToolList": [
    {
      "CoLSize": "col-3",
      "ColVal": "pycharm"
    },
    {
      "CoLSize": "col-3",
      "ColVal": "vscode"
    },
    {
      "CoLSize": "col-2",
      "ColVal": "git"
    },
    {
      "CoLSize": "col-3",
      "ColVal": "postgres"
    },
    {
      "CoLSize": "col-2",
      "ColVal": "jira"
    },
    {
      "CoLSize": "col-2",
      "ColVal": "figma"
    },
    {
      "CoLSize": "col-3",
      "ColVal": "postman"
    },
    {
      "CoLSize": "col-3",
      "ColVal": "ubuntu"
    },
    {
      "CoLSize": "col-3",
      "ColVal": "windows"
    }
  ]
}


const download_button = ReactDOM.createRoot(document.getElementById('download-button'));
download_button.render(
  <>
    <DOWNLOAD_BUTTON />
  </>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HEADER user={user_details} />
    <div className='section-container'>
      <SECTION_LEFT arguments={LeftSectionArguments} />
      <SECTION_RIGHT arguments={RightSectionArguments} />
    </div>
  </>
)