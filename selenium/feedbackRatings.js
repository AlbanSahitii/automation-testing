// Feedback dhe Vlerësime
function feedbackRatings() {
    const feedbacks = [];

    return {
        leaveFeedback: (feedback) => {
            feedbacks.push(feedback);
            console.log(`Feedback left by ${feedback.userId}`);
        },
        rateUser: (rating) => {
            feedbacks.push(rating);
            console.log(`Rating given by ${rating.userId}`);
        },
        viewFeedback: (userId) => {
            return feedbacks.filter(feedback => feedback.userId === userId);
        }
    };
}

module.exports = feedbackRatings;
