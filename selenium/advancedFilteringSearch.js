// Filtër dhe Kërkim i Avancuar
function advancedFilteringSearch() {
    const data = [];

    return {
        filterJobs: (criteria) => {
            return data.filter(item => item.type === 'job' && Object.keys(criteria).every(key => item[key] === criteria[key]));
        },
        filterCandidates: (criteria) => {
            return data.filter(item => item.type === 'candidate' && Object.keys(criteria).every(key => item[key] === criteria[key]));
        },
        advancedSearch: (type, criteria) => {
            return data.filter(item => item.type === type && Object.keys(criteria).every(key => item[key] === criteria[key]));
        }
    };
}

module.exports = advancedFilteringSearch;
