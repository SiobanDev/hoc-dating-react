import {apiLogin} from "./hocDatingApiService";

export function showLoader(show, divId) {
    const $container = document.getElementById(`${divId}`);

    if ($container) {
        if (show) {
            const $loaderContainer = document.createElement('div');
            $loaderContainer.id = 'loader';
            $loaderContainer.classList.add('spinner-grow', 'text-light');
            $loaderContainer.role = "status";

            const $loaderText = document.createElement('span');
            $loaderText.classList.add('sr-only');
            $loaderText.innerHTML = 'loading...';

            $loaderContainer.appendChild($loaderText);
            $container.appendChild($loaderContainer);
            return true;

        } else {
            const $loaderContainer = document.querySelector('#loader');
            if ($loaderContainer) {
                $container.removeChild($loaderContainer);
                return true;
            }
            return false;
        }
    }
}

export async function connect(userData) {
    try {
        const apiConnexionResponse = await apiLogin(userData);

        if (apiConnexionResponse.status>= 200 && apiConnexionResponse.status < 400){
            return apiConnexionResponse.data.token
        };
        return apiConnexionResponse.status;

    } catch (e) {
        throw new Error(e);
    }
}

//
// export async function signIn(userData) {
//     try {
//         const apiResponse = await fetch
//         (
//             apiInscriptionUrl,
//             {
//                 method: 'POST',
//                 headers:
//                     {
//                         'Content-type': 'application/json'
//                     },
//                 credentials: 'include',
//                 body: JSON.stringify(userData)
//             }
//         );
//
//         if (apiResponse.status >= 200 && apiResponse.status < 400) {
//             return true;
//         }
//         return false;
//
//     } catch (e) {
//         throw new Error(e);
//     }
// }

//
// export async function signOut() {
//     const response = await fetch(apiSignOutUrl);
//
//     return ((response.status === 200));
// }
//
// export async function displayMovies() {
//     showLoader(true, 'all-movies-items');
//
//     try {
//         //// moviesData with MyFetchis a string !
//         // var moviesData = await myFetch(apiMoviesUrl, 'GET', {'Content-type': 'application/json'}, null);
//         const response = await fetch(
//             apiMoviesUrl,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 credentials: 'include',
//             }
//         );
//
//         const movieList = await response.json();
//
//         let movieContent = document.getElementById('all-movies-items');
//
//         //I would have written movieData.search if the key search was a variable or does not contain any special character (including caps)
//         for (let i = 0; i < movieList["Search"].length; i++) {
//
//             const movie = movieList["Search"][i];
//             const movieItem = movieConstruct(movie, i);
//
//             if (movieContent) {
//                 movieContent.appendChild(movieItem);
//             }
//         }
//     } catch (e) {
//         throw new Error(e);
//     }
// }

