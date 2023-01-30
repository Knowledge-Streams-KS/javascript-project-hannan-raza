const movie = document.getElementById("txt");
const year = document.getElementById("year");
const content_outer_div = document.getElementById("content_outer_div");

const element = document.getElementById("btn");
element.addEventListener("click", () => movieFunc(movie, year));

const movieFunc = async (movieName, movieYear) => {
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${movieName.value}&apikey=84e1751e`
  );

  const data = await resp.json();
  console.log(data);
  length = data["Search"].length;
  const year = movieYear.value;

  const titles = [];
  const posters = [];
  for (let i = 0; i < length; i++) {
    if (year == [data["Search"][i].Year] || year == "") {
      titles.push([data["Search"][i].Title]);
      posters.push([data["Search"][i].Poster]);
    }
  }
  window.localStorage.setItem("movie_name", movieName.value);
  window.localStorage.setItem("movie_year", movieYear.value);

  length1 = titles.length;

  $(".content_inner_div").remove();

  for (let i = 0; i < length1; i++) {
    let html = `<div class="content_inner_div"><h1>${titles[i]}</h1> <img src="${posters[i]}"width="300" height="300"></div> `;
    content_outer_div.insertAdjacentHTML("beforeend", html);
  }
};

const movieFunc2 = async (movieName, movieYear) => {
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=84e1751e`
  );

  const data = await resp.json();
  console.log(data);
  length = data["Search"].length;
  const year = movieYear;

  const titles = [];
  const posters = [];
  for (let i = 0; i < length; i++) {
    if (year == [data["Search"][i].Year] || year == "") {
      titles.push([data["Search"][i].Title]);
      posters.push([data["Search"][i].Poster]);
    }
  }
  window.localStorage.setItem("movie_name", movieName);
  window.localStorage.setItem("movie_year", movieYear);

  length1 = titles.length;

  $(".content_inner_div").remove();
  for (let i = 0; i < length1; i++) {
    let html = `<div class="content_inner_div"><h1>${titles[i]}</h1> <img src="${posters[i]}"width="300" height="300"></div> `;
    content_outer_div.insertAdjacentHTML("beforeend", html);
  }
};

$(document).ready(function () {
  let movieName = localStorage.getItem("movie_name");
  let movieYear = localStorage.getItem("movie_year");
  movieFunc2(movieName, movieYear);
});
