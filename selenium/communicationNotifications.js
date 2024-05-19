// Komunikimi dhe Njoftimet
function communicationNotifications() {
    return {
        directCommunication: (user, message) => {
            console.log(`Message sent to ${user.name}: ${message}`);
        },
        sendNotification: (user, notification) => {
            console.log(`Notification sent to ${user.email}: ${notification}`);
        },
        notifyNewJobs: (user, job) => {
            console.log(`Notified ${user.name} about new job: ${job.title}`);
        },
        notifyApplicationStatus: (user, status) => {
            console.log(`Notified ${user.name} about application status: ${status}`);
        }
    };
}

module.exports = communicationNotifications;
