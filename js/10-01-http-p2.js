// import NewsApiService from "./components/news-service";

const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryEl: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
}
const { searchForm, galleryEl, loadMoreBtn } = refs;

class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
       return fetch(`https://pixabay.com/api/?key=30138739-91917411df1cd3860f7789c37&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&pretty=true&page=${this.page}&per_page=40`)
        .then(r => r.json())
            .then(data => {
                this.incrementePage();  //увеличиваем на 1 page для последующего запроса
                console.log(data);
                return data;
        })
        .catch(error => console.log(error));
    }

    incrementePage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};

const NewsService = new NewsApiService();

searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearchForm(e) {
    e.preventDefault();
    
    NewsService.query = e.target.searchQuery.value;
    NewsService.resetPage();
    console.dir(e.currentTarget.elements.searchQuery.value);
       
    NewsService.fetchArticles();
    console.log(NewsService);
}

function onLoadMore(e) {
    e.preventDefault();
    console.log(e);

    NewsService.fetchArticles();
}


















//-------------------------------------------------------------------
/** 
const url = 'https://pixabay.com/api/';
const options = {
    params: {
        key:'30138739-91917411df1cd3860f7789c37',
        q: 'cat',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 40,
    }
};

fetch(url, options)
    .then(r => r.json())
    .then(console.log)
    .catch(error => console.log(error));
    */
          