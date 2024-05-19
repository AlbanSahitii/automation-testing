// Publikimi dhe Menaxhimi i Punëve
function manageJobs() {
    const jobs = [];

    return {
        postJob: (job) => {
            jobs.push(job);
            console.log(`Job posted: ${job.title}`);
        },
        updateJob: (job) => {
            const index = jobs.findIndex(j => j.id === job.id);
            if (index > -1) {
                jobs[index] = job;
                console.log(`Job updated: ${job.title}`);
            }
        },
        manageJobPosts: () => {
            return jobs;
        },
        followApplications: (jobId) => {
            const job = jobs.find(j => j.id === jobId);
            return job ? job.applications : [];
        },
        contactCandidates: (candidateId, message) => {
            console.log(`Contacted candidate ${candidateId} with message: ${message}`);
        }
    };
}

module.exports = manageJobs;
