function trainingManagement() {
    const trainings = [];
    const courses = [];

    return {
        organizeTraining: (training) => {
            trainings.push(training);
            console.log(`Training organized: ${training.title}`);
        },
        manageCourses: (course) => {
            courses.push(course);
            console.log(`Course managed: ${course.title}`);
        },
        getTrainings: () => {
            return trainings;
        },
        getCourses: () => {
            return courses;
        }
    };
}

module.exports = trainingManagement;
