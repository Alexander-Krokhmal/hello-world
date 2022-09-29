export default class NewsApiService {
    constructor() {
        
    }

    fetchArticles(searchQuery) {
        fetch(`https://pixabay.com/api/?key=30138739-91917411df1cd3860f7789c37&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&pretty=true&per_page=40`)
        .then(r => r.json())
        .then(console.log)
        .catch(error => console.log(error));
    }
}