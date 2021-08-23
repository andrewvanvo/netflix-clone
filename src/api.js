const API_KEY = "ffbc264f7e884f8a03bd48c028d959d4";

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=12`,
    fetchDocumentary:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=99`,
    fetchDrama:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=18`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=878`,
    fetchComedy:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35`,
    fetchRomance:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27`,
}

//perhaps get rid of some of the optional params aside from with_genres

export default requests