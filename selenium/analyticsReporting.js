// Analitika dhe Raportimi
function analyticsReporting() {
    const jobPosts = [];

    return {
        monitorPerformance: () => {
            jobPosts.forEach(job => {
                console.log(`Job: ${job.title} - Applications: ${job.applications.length}`);
            });
        },
        analyzeApplications: () => {
            const applicationStats = jobPosts.reduce((acc, job) => {
                acc[job.id] = job.applications.length;
                return acc;
            }, {});
            console.log(applicationStats);
        },
        viewApplicationStats: (user) => {
            const userApplications = jobPosts.flatMap(job => job.applications).filter(app => app.userId === user.id);
            console.log(userApplications);
        }
    };
}

module.exports = analyticsReporting;
