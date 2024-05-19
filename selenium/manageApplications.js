// Aplikimi Online dhe Menaxhimi i Aplikimeve
function manageApplications() {
    const applications = [];

    return {
        applyForJob: (application) => {
            applications.push(application);
            console.log(`Application submitted for job ${application.jobId}`);
        },
        saveApplication: (application) => {
            applications.push(application);
            console.log(`Application saved for job ${application.jobId}`);
        },
        manageApplications: () => {
            return applications;
        },
        automaticEvaluation: (application, criteria) => {
            const score = Object.keys(criteria).reduce((acc, key) => {
                return acc + (application[key] === criteria[key] ? 1 : 0);
            }, 0);
            application.score = score;
            console.log(`Application for job ${application.jobId} evaluated with score ${score}`);
        }
    };
}

module.exports = manageApplications;
