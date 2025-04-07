import React from 'react';
import ReactDOM from 'react-dom/client';
import SECTION_LEFT from './Section_Left';
import SECTION_RIGHT from './Section_Right';
import { HEADER, DOWNLOAD_BUTTON } from './Header.js';

const user_details = {
  "name": "deepak verma",
  "designation": "python developer",
  "phone": "+91-8955160103 | +91-6377122637",
  "email": "dpakverma789@gmail.com",
  "address": "udaipur, rajasthan (Remote Working)"
}

const LeftSectionArguments = {
  "Education": [
    {
      "course": "M.B.A (Information Technology)",
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
      "designation": "software engineer (outsourced: Mswipe Tech.)",
      "duration": "April 2022 - Present",
      "location": "mumbai, MH",
      "responsibility": [
        "Tech used odoo-python ORM, postgresDB, XMl, JS, REST APIs",
        "Developed and maintained custom Odoo modules, enhancing business processes using Odoo Python",
        "Led the migration of legacy Odoo modules to the latest version for improvement in system performance and user experience",
        "Optimized database queries within Odoo ORM, reducing data retrieval times by 30%, improving overall system responsiveness",
        "Integrated third-party REST APIs and Created Odoo API using Controllers to automating data exchange."
      ]
    },

    {
      "company": "ksolves india pvt. ltd.",
      "designation": "software engineer",
      "duration": "Sept 2020 - March 2022",
      "location": "noida, UP",
      "responsibility": [
        "Worked on Python Based Open ERP Framework Odoo",
        "Customized and extended Odoo ERP modules, focusing on CRM, Sales, and Accounting to meet client-specific requirements to increase in user satisfaction."
      ]
    },

    // {
    //   "company": "career transition",
    //   "designation": "career break (covid-lockdown)",
    //   "duration": "april 2020 - aug 2020",
    //   "location": "udaipur, RJ",
    //   "responsibility": []
    // },

    {
      "company": "AVA Consulting",
      "designation": "",
      "duration": "Sept 2019 - March 2020",
      "location": "noida, UP",
      "responsibility": []
    }
  ]
}


const RightSectionArguments = {
  "Projects": [
    'https://password-manager-plus.vercel.app',
    'https://readzaraa.vercel.app',
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
      "widthPx": 50,
      "name": 'HTML'
    },
    {
      "icon": "fa-brands fa-python",
      "widthPx": 40,
      "name": 'PYTHON'
    },
    {
      "icon": "fa-brands fa-css3-alt",
      "widthPx": 50,
      "name": 'CSS'
    },
    {
      "icon": "fa-brands fa-react",
      "widthPx": 30,
      "name": 'REACT'
    },
    {
      "icon": "fa-brands fa-square-js",
      "widthPx": 30,
      "name": 'JavaScript'
    },
    {
      "icon": "fa-solid fa-database",
      "widthPx": 50,
      "name": 'SQL'
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
      "CoLSize": "col-2",
      "ColVal": "canva"
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