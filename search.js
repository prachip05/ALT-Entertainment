var indexValue = 1;
    showImg(indexValue);

    // function btm_slide(e) {
    //     showImg((indexValue = e));
    // }

    function side_slide(e) {
        showImg((indexValue += e));
    }

    function showImg(e) {
        var i;
        const img = document.querySelectorAll(".carousel-item img");
        // const sliders = document.querySelectorAll(".");
        if (e > img.length) {
            indexValue = 1;
        }
        if (e < 1) {
            indexValue = img.length;
        }
        for (i = 0; i < img.length; i++) {
            img[i].style.display = "none";
        }
        // for (i = 0; i < sliders.length; i++) {
        //     sliders[i].style.background = "none";
        // }
        img[indexValue - 1].style.display = "block";
        // sliders[indexValue - 1].style.background = "white";
    }

    // function myFunction() {
    //   document.getElementById("myDropdown").classList.toggle("show");
    // }
    
    // // Close the dropdown if the user clicks outside of it
    // window.onclick = function(event) {
    //   if (!event.target.matches('.dropbtn')) {
    //     var dropdowns = document.getElementsByClassName("dropdown-content");
    //     var i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //   }
    // }


var currentGenre = "Genre";
var movieTitle;
// function showNoResultsText(totalcount) {

//     if (totalcount == 0) {
//     //   document.getElementById("no-results").style.display = "block";
//       console.log('totalcount in showNoResultsText' + totalcount);
//     } else {
//       document.getElementById("no-results").style.display = "none";
//     }
  
// }
function getMediaPosters(selectedGenre) {
  var countMovies = 0;
  var mediaCarouselMovies;
  currentGenre = selectedGenre;
  document.getElementById("genreText").innerHTML = selectedGenre;

  $("#display-content").one("mouseover", function() {
    $("#display-content").addClass('permahover');
  });

  if (selectedGenre == 'All') {
    document.getElementById('movies-action').style.display = "inline-block";
    document.getElementById('movies-drama').style.display = "inline-block";
    document.getElementById('movies-sci-fi').style.display = "inline-block";
    mediaCarouselMovies = document.getElementById("film-section");
  }
    console.log(selectedGenre);
    if (selectedGenre == 'Action') {
        document.getElementById('movies-action').style.display = "inline-block";
        document.getElementById('movies-drama').style.display = "none";
        document.getElementById('movies-sci-fi').style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
      }
      if (selectedGenre == 'Drama') {
        document.getElementById('movies-action').style.display = "none";
        document.getElementById('movies-drama').style.display = "inline-block";
        document.getElementById('movies-sci-fi').style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
      }
      if (selectedGenre == 'Sci-fi') {
        document.getElementById('movies-action').style.display = "none";
        document.getElementById('movies-drama').style.display = "none";
        document.getElementById('movies-sci-fi').style.display = "inline-block";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
      }

  var mediaCarouselMoviesCount = mediaCarouselMovies.length;

  for (var count = 0; count < mediaCarouselMoviesCount; count++) {
    if (mediaCarouselMovies[count].style.display == "block")
      countMovies++;
  }
  console.log(countMovies);

//   showNoResultsText(countMovies);
}

function updateResults() {
    var query = document.getElementById('mysearch').value.trim().toLowerCase();
    var counter = 0;
  
    if (currentGenre == 'All' || currentGenre == 'Genre') {
      movieTitle = document.getElementsByClassName('film-name');
    }
    if (currentGenre == 'Action') {
      movieTitle = document.getElementById('movies-action').getElementsByClassName('film-name');
    }
    if (currentGenre == 'Drama') {
      movieTitle = document.getElementById('movies-drama').getElementsByClassName('film-name');
    }
    if (currentGenre == 'Sci-Fi') {
      movieTitle = document.getElementById('movies-scifi').getElementsByClassName('film-name');
    }
    
    for (var name = 0; name < movieTitle.length; name++) {
      var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();
  
      if (compareMovieTitles.indexOf(query) === -1) {
        movieTitle[name].closest('div.inline-block').style.display = "none";
      }else {
        movieTitle[name].closest('div.inline-block').style.display = "inline-block";
        counter++;
      }
    }
  
    // showNoResultsText(counter);
  }
  
