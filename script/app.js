// jobs data ------------------------------->
const jobsData = [
    {
        id: 1,
        company: "Mobile First Corp",
        title: "React Native Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$130,000 - $175,000",
        status: "not applied",
        description:
            "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 2,
        company: "TechNova Solutions",
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$90,000 - $120,000",
        status: "not applied",
        description:
            "Develop modern and responsive web applications using React and Tailwind CSS."
    },
    {
        id: 3,
        company: "CodeCrafters Ltd",
        title: "Backend Developer",
        type: "Part-time",
        location: "Onsite",
        salary: "$70,000 - $95,000",
        status: "not applied",
        description:
            "Build scalable REST APIs using Node.js and Express with MongoDB integration."
    },
    {
        id: 4,
        company: "NextGen IT",
        title: "JavaScript Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$85,000 - $110,000",
        status: "not applied",
        description:
            "Work with modern JavaScript (ES6+) to build interactive and high-performance applications."
    },
    {
        id: 5,
        company: "PixelSoft Studio",
        title: "UI/UX Designer",
        type: "Contract",
        location: "Remote",
        salary: "$60,000 - $80,000",
        status: "not applied",
        description:
            "Design user-friendly and visually appealing interfaces for web and mobile applications."
    },
    {
        id: 6,
        company: "CloudMatrix Inc",
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Hybrid",
        salary: "$110,000 - $150,000",
        status: "not applied",
        description:
            "Manage CI/CD pipelines and cloud infrastructure using AWS and Docker."
    },
    {
        id: 7,
        company: "DataWave Analytics",
        title: "Data Analyst",
        type: "Full-time",
        location: "Onsite",
        salary: "$75,000 - $100,000",
        status: "not applied",
        description:
            "Analyze datasets and generate business insights using SQL and Python."
    },
    {
        id: 8,
        company: "InnovateX Labs",
        title: "Full Stack Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$100,000 - $140,000",
        status: "not applied",
        description:
            "Develop end-to-end web applications using React, Node.js, and MongoDB."
    }
];

// dom access ------------------------------>
const jobContainer = document.getElementById('job-container');
const jobCount = document.getElementById('job-count');

const totalJobsCount = document.querySelector('.totalJobsCount');
const totalInterviewCount = document.querySelector('.totalInterviewCount');
const totalRejectedCount = document.querySelector('.totalRejectedCount');

const allJobsTab = document.getElementById('all-jobs-tab');
const intJobsTab = document.getElementById('interview-jobs-tab');
const rejJobsTab = document.getElementById('rejected-jobs-tab');

// default tab ------------------------------>
let currentTab = 'all';

// function -------------------------------->
function renderAllJobs() {
    jobContainer.innerHTML = '';

    let jobData;
    
    if (currentTab === 'all') {
        jobData = jobsData;
    } else {
        jobData = jobsData.filter((job) => job.status === currentTab);
    };

    jobCount.innerText = jobData.length;

    if (jobData.length === 0) {
        jobContainer.innerHTML = `
            <div class="w-full min-h-[400px] flex items-center justify-center flex-col gap-5 bg-white border border-[#F1F2F4] rounded-lg">
                <div class="w-[100px] h-[100px]">
                    <img src="./assets/jobs.png" alt="icon">
                </div>
                <div class="w-full text-center space-y-1">
                    <h2 class="text-2xl text-[#002C5C] font-semibold">No Jobs Available</h2>
                    <p class="text-base text-[#64748B] font-normal">Check back soon for new job opportunities</p>
                </div>
            </div>
        `;

        return;
    };

    jobData.forEach((job) => {
        const jobCard = document.createElement('div');
        jobCard.className = "w-full p-6 bg-[#ffffff] border border-[#F1F2F4] rounded-lg space-y-5";

        jobCard.innerHTML = `
            <div class="w-full flex items-center justify-between">
                <div class="w-auto space-y-1">
                    <p class="font-geist text-[#002C5C] text-lg font-semibold capitalize">${job.company}</p>
                    <p class="font-geist text-[#64748B] text-base font-normal capitalize">${job.title}</p>
                </div>
                <button class="w-10 h-10 bg-[#ffffff] border border-[#F1F2F4] rounded-full flex items-center justify-center cursor-pointer transition-all ease-linear duration-200 hover:bg-[#EF4444]/20 hover:border-[#EF4444]/20 group" onclick="jobsDeleted(${job.id})">
                    <i class="fa-regular fa-trash-can text-sm text-[#64748B] group-hover:text-[#EF4444]"></i>
                </button>
            </div>
            <div class="w-full flex items-center justify-start gap-2">
                <p class="font-geist text-[#64748B] text-sm font-normal capitalize">${job.location}</p>
                <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>
                <p class="font-geist text-[#64748B] text-sm font-normal capitalize">${job.type}</p>
                <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>
                <p class="font-geist text-[#64748B] text-sm font-normal capitalize">${job.salary}</p>
            </div>
            <div class="w-full space-y-2">
                <div class="job-badge w-[115px] py-2 px-3 bg-[#EEF4FF] border border-[#EEF4FF] rounded-sm text-center">
                    <span class="job-status font-geist text-[#002C5C] text-sm font-medium uppercase">${job.status}</span>
                </div>
                <p class="font-geist text-[#323B49] text-sm font-normal">${job.description}</p>
            </div>
            <div class="w-full flex items-center justify-start gap-2">
                <button class="job-btn w-[100px] py-2 px-3 bg-[#10B981]/10 border border-[#10B981] rounded-sm font-geist text-[#10B981] text-sm font-semibold uppercase cursor-pointer" onclick="jobsInterview(${job.id})">interview</button>
                <button class="job-btn w-[100px] py-2 px-3 bg-[#EF4444]/10 border border-[#EF4444] rounded-sm font-geist text-[#EF4444] text-sm font-semibold uppercase cursor-pointer" onclick="jobsRejected(${job.id})">rejected</button>
            </div>
        `;

        const jobBadge = jobCard.querySelector('.job-badge');
        const jobStatus = jobCard.querySelector('.job-status');

        if (job.status === 'interview') {
            jobBadge.classList.remove('rej-badge-active');
            jobBadge.classList.add('int-badge-active');

            jobStatus.classList.remove('text-[#002C5C]', 'text-[#EF4444]');
            jobStatus.classList.add('text-[#10B981]');
        };

        if (job.status === 'rejected') {
            jobBadge.classList.remove('int-badge-active');
            jobBadge.classList.add('rej-badge-active');

            jobStatus.classList.remove('text-[#002C5C]', 'text-[#10B981]');
            jobStatus.classList.add('text-[#EF4444]');
        };

        jobContainer.appendChild(jobCard)
    });
};

function jobsInterview(jobId) {
    let findJob = jobsData.find((job) => job.id === jobId);
    findJob.status = 'interview';
    updateJobsCounter();
    renderAllJobs();
};

function jobsRejected(jobId) {
    let findJob = jobsData.find((job) => job.id === jobId);
    findJob.status = 'rejected';
    updateJobsCounter();
    renderAllJobs();
};

function jobsDeleted(jobId) {
    let findJobIdx = jobsData.findIndex((idx) => idx.id === jobId);
    jobsData.splice(findJobIdx, 1);
    updateJobsCounter();
    renderAllJobs();
};

function updateJobsCounter() {
    totalJobsCount.innerText = jobsData.length;

    const intJobs = jobsData.filter((job) => job.status === 'interview');
    const rejJobs = jobsData.filter((job) => job.status === 'rejected');

    totalInterviewCount.innerText = intJobs.length;
    totalRejectedCount.innerText = rejJobs.length;
};

allJobsTab.addEventListener('click', () => {
    currentTab = 'all';

    intJobsTab.classList.remove('active');
    rejJobsTab.classList.remove('active');
    allJobsTab.classList.add('active');
    
    renderAllJobs();
});

intJobsTab.addEventListener('click', () => {
    currentTab = 'interview';

    allJobsTab.classList.remove('active');
    rejJobsTab.classList.remove('active');
    intJobsTab.classList.add('active');

    renderAllJobs();
});

rejJobsTab.addEventListener('click', () => {
    currentTab = 'rejected';

    allJobsTab.classList.remove('active');
    intJobsTab.classList.remove('active');
    rejJobsTab.classList.add('active');

    renderAllJobs();
});

// funciton call --------------------------->
updateJobsCounter();
renderAllJobs();