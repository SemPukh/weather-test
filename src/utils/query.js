export const getCityFromQueryParams = () => {
    const search = window.location.search || '';
    if (search) {
        const searchSplit = search.split('search=');
        const searchTerm = searchSplit[searchSplit.length - 1];
        const parsedSearchTerm = decodeURIComponent(searchTerm);
        return parsedSearchTerm;
    }

    return '';
};

export const setSearchParam = value => {
    const nextUrl = window.location.pathname + '?search=' + encodeURIComponent(value);
    window.history.pushState(null, '', nextUrl);
};
