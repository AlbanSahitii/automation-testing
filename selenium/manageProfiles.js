// Menaxhimi i Profileve dhe CV-ve
function manageProfiles() {
    const profiles = [];

    return {
        createProfile: (user) => {
            profiles.push(user);
            console.log(`Profile created for ${user.name}`);
        },
        updateProfile: (user) => {
            const index = profiles.findIndex(u => u.id === user.id);
            if (index > -1) {
                profiles[index] = user;
                console.log(`Profile updated for ${user.name}`);
            }
        },
        uploadCV: (userId, cv) => {
            const user = profiles.find(u => u.id === userId);
            if (user) {
                user.cv = cv;
                console.log(`CV uploaded for ${user.name}`);
            }
        },
        updateCV: (userId, cv) => {
            const user = profiles.find(u => u.id === userId);
            if (user) {
                user.cv = cv;
                console.log(`CV updated for ${user.name}`);
            }
        },
        addExperience: (userId, experience) => {
            const user = profiles.find(u => u.id === userId);
            if (user) {
                user.experience = user.experience || [];
                user.experience.push(experience);
                console.log(`Experience added for ${user.name}`);
            }
        },
        addSkills: (userId, skills) => {
            const user = profiles.find(u => u.id === userId);
            if (user) {
                user.skills = user.skills || [];
                user.skills.push(...skills);
                console.log(`Skills added for ${user.name}`);
            }
        },
        addEducation: (userId, education) => {
            const user = profiles.find(u => u.id === userId);
            if (user) {
                user.education = user.education || [];
                user.education.push(education);
                console.log(`Education added for ${user.name}`);
            }
        },
        browseProfiles: (criteria) => {
            return profiles.filter(profile => {
                return Object.keys(criteria).every(key => profile[key] === criteria[key]);
            });
        }
    };
}

module.exports = manageProfiles;
