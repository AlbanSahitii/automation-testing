function candidateAssessment() {
    return {
        // Array to store created tests
        createdTests: [],

        createTests: function(test) { 
            // Create assessment tests
            this.createdTests.push(test);
            console.log(`Test created: ${test.name}`);
            console.log("Total tests created:", this.createdTests.length);
        },

        manageTests: function() { 
            // Manage online tests 
            console.log("Online tests managed.");
            console.log("Total tests managed:", this.createdTests.length);
        }
    };
}

module.exports = candidateAssessment;
