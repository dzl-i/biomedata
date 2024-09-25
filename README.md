# BiomeData

**"Empowering Biomedical Research Through Unified Data Management"**

The Australian Biomedical Data Repository System aims to provide a secure, centralized platform for Australian researchers to store and manage diverse biomedical data, including whole genome sequencing (WGS), whole exome sequencing (WES), mutation data, phenotypes, imaging data, and signals. This platform will serve as a comprehensive database, enabling researchers to store, search, and retrieve data efficiently, while also providing powerful tools for data visualization, analysis, and reporting. Inspired by projects like the UK Biobank, this system will promote data sharing and collaboration among the Australian research community, while ensuring data integrity, security, and compliance with ethical and legal standards.

## Routes
Planned routes that would be integral to the workflow of the Data Repository System.

### AUTH Routes
- `POST /auth/register` - Register a new account
- `POST /auth/login` - Login to an existing account
- `POST /auth/logout` - Logs user out of existing session
- `POST /auth/refreshToken` - Refreshes access token if a refresh token is valid

### RESEARCHER Routes
- `GET /researcher/profile` - Show details of a researcher's profile (including themselves)
- Modification to researcher's details (e.g. name, institution, etc.) might be supported

### DATASET Routes
- `GET /dataset/list-patients` - Show a list of available patient datasets
- `GET /dataset/list-genomics` - Show a list of available genomic information datasets
- `GET /dataset/list-phenotypes` - Show a list of available phenotype datasets
- `GET /dataset/list-imaging` - Show a list of available biomedical imaging datasets
- `GET /dataset/list-signal` - Show a list of available biomedical signal datasets
- `GET /dataset/list-category` - Show a list of available datasets based on category

### SEARCH Routes
- `GET /search` - Search across all datasets with filters

### OVERVIEW Routes
- `GET /overview/patients` - View a comprehensive overview of the dataset such as patient demographic information (e.g. age, sex)
- `GET /overview/genomics` - View a comprehensive overview of the dataset such as genomic profiles and mutation variants
- `GET /overview/phenotypes` - View a comprehensive overview of the dataset such as phenotypic details and trait associations
- `GET /overview/imaging` - View a comprehensive overview of the dataset such as linked imaging and signal data
- `GET /overview/signals` - View a comprehensive overview of the dataset such as linked imaging and signal data

### UPLOAD Routes
- `POST /upload/patients` - Upload patient information such as name and age
- `POST /upload/genomics` - Upload genomic information such as WGS and WES
- `POST /upload/phenotypes` - Upload phenotypic details such as description and associated traits
- `POST /upload/imaging` - Upload biomedical images such as MRI and CT scans
- `POST /upload/signals` - Upload biomedical signal data such as EEG and ECG

### UPDATE Routes
- These may or may not be supported due to time constraints
- `PUT /update/patients/:id` - Update patient information
- `PUT /update/genomics/:id` - Update genomic information
- `PUT /update/phenotypes/:id` - Update phenotypic details
- `PUT /update/imaging/:id` - Update biomedical images
- `PUT /update/signals/:id` - Update biomedical signal data

### PROJECT Routes
- `POST /project/create` - Create a new project with at least one category selected
- `POST /project/join` - Join an existing project
- `POST /project/leave` - Leave an existing project
- `GET /project/list` - List all projects
- `GET /project/details/:id` - Show details of the project
- `PUT /project/update/:id` - Update project details
- `PUT /project/status-update` - Update the project status

### VISUALISATION Routes
- `GET /visualise/genomics/:id` - Generate visualisation for genomic data
- `GET /visualise/phenotypes/:id` - Generate visualisation for phenotype data
- `GET /visualise/signals/:id` - Generate visualisation for signal data

### LOGS Routes
- `POST /logs/create` - Log an event
- `GET /logs/list` - List the event logs
- `GET /logs/researcher/:id` - Get logs for a specific researcher

### Notes
- Due to privacy concerns, researchers can only view patients that they have "created"
- There will be "Projects" so that researchers can collaborate on some cases -> technicalities will be defined later
- More will be added as the project progresses

## UI/UX Design
Some plans for the UI/UX design to make the web application more intuitive for researchers. Planned colour scheme is white, yellow, and purple for a modernised look.

### Register/Login Page
- Login page should be relatively straightforward - just email and password
- Register page is quite extensive, a lot of details - name, institution, email, username, password -> how to make this seem less daunting? Cleaner ui, plenty spacing so it does not look cramped
- Aiming for a clean

### Dashboard
- Several tabs for the datasets such as Patients, Genomic Data, etc.
- One tab for "All", where all datasets will be shows and searches/filters can be applied here
- Vertical navbar for a cleaner look
