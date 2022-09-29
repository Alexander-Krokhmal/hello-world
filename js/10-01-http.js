const searchbox = document.querySelector('.searchbox');
const profailContainer = document.querySelector('.profile-section');

searchbox.addEventListener('submit', e => {
    e.preventDefault();

    const login = searchbox.nextElementSibling.namespaceURI.value;
    fetchUser(login)
        .then(showProfile)
        .catch(showError);
    
    searchbox.reset();
});

// searchbox.addEventListener('input', debounce(() => {
//     e.preventDefault();
//     const login = searchbox.value;

// fetchUser(login)
//         .then(showProfile)
//         .catch(showError);
    
//     searchbox.reset();
// }, 300));

function showError(error) {
    console.log(error);
    profailContainer.innerHTML = 'Somthing wrong with your code!';
}

function showProfile(userData) {
    console.log(userData);

    const template = userData
    .map(({ flags, name, capital, population, languages }) => {
        return `<img width="200px" height="100px" src='${flags.svg}' alt='${name.official} flag' />
        <ul class="country-info__list">
            <li class="country-info__item country-info__item--name"><p><b>Name: </b>${name.official}</p></li>
            ${capital ? `<li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>` : ''}
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages)}</p></li>
        </ul>`;
    })
    .join('');
    profailContainer.innerHTML = template;
}

function fetchUser(login) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${login}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
};

