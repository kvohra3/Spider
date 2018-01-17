const isWordHere = ($, word) => {
    const bodyText = $('html > body').text();
    console.log(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1);
    if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
        return true;
    }
    return false;
};
const collectInternalLinks = ($, LINK_TYPE) => {
    if (LINK_TYPE === 'RELATIVE') {
        let allRelativeLinks = [];

        const relativeLinks = $("a[href^='/']");
        relativeLinks.each(() => {
            allRelativeLinks.push($(this).attr('href'));
        });
        console.log("Found " + allRelativeLinks.length + " relative links");
        return allRelativeLinks;
    } else if (LINK_TYPE === 'ABSOLUTE') {
        let allAbsoluteLinks = [];

        const absoluteLinks = $("a[href^='http']");
        absoluteLinks.each(() => {
            allAbsoluteLinks.push($(this).attr('href'));
        });
        console.log("Found " + allAbsoluteLinks.length + " absolute links");
        return allAbsoluteLinks;

    } else {
        return null;
    };
};


module.exports = {
    isWordHere,
    collectInternalLinks
};
