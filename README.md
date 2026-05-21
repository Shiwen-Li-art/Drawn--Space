\# BuildGrow AI Portfolio Platform



BuildGrow is an AI-powered portfolio optimization platform designed for environmental design students and cross-disciplinary design learners.



The platform helps users transform academic coursework into professional, career-ready portfolios by supporting portfolio upload, AI content recognition, layout generation, career direction matching, skill gap analysis, and personalized growth task recommendations.



\## Project Background



This project explores how AI can support environmental design students who are preparing for career transition, graduate applications, or cross-disciplinary job opportunities.



Many students have strong coursework projects, but they often struggle to reorganize these works into professional portfolios that match target roles such as UI/UX design, branding, product design, interior design, or landscape design.



\## Key Features



\- Portfolio file upload

\- AI portfolio content analysis

\- OCR document recognition

\- Portfolio layout generation

\- Regeneration based on user descriptions

\- GitHub file storage integration

\- Career direction matching

\- Skill gap analysis

\- Growth task recommendations



\## Tech Stack



\- Node.js

\- Express.js

\- REST API

\- Mock AI response

\- Mock OCR response

\- GitHub API preparation



\## Folder Structure



```txt

BuildGrow-AI-Portfolio-Platform/

├── routes/

│   ├── ai.js

│   ├── ocr.js

│   ├── layout.js

│   ├── regen.js

│   ├── export.js

│   ├── github.js

│   ├── career.js

│   └── growth.js

│

├── controllers/

│   ├── aiController.js

│   ├── ocrController.js

│   ├── layoutController.js

│   ├── regenController.js

│   ├── exportController.js

│   ├── githubController.js

│   ├── careerController.js

│   └── growthController.js

│

├── uploads/

│   └── .gitkeep

│

├── server.js

├── package.json

├── .env.example

├── .gitignore

└── README.md

