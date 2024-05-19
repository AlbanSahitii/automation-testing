// Ndihmë dhe Mbështetje
function helpSupport() {
    const faqs = [];
    const helpArticles = [];

    return {
        faq: () => {
            return faqs;
        },
        helpArticles: () => {
            return helpArticles;
        },
        contactSupport: (user, issue) => {
            console.log(`Support contacted by ${user.name} regarding ${issue}`);
        }
    };
}

module.exports = helpSupport;
