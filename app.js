$(document).ready(function () {
  // Submit event handler
  $('#search-form').submit( function(e) {
    e.preventDefault();
    let query = $('#search-term').val();
    console.log(query);
    getVideos(query);
  })

  // Get videos from YouTube
  function getVideos(query) {
    // Usually when in all caps, it's a constant
    const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
    let params = {
      q: query,
      part: 'snippet',
      key: 'AIzaSyDU0ALRZDh-RxFXjCOnp7SKAtlySFwFH_k'
    }
    $.getJSON(YOUTUBE_URL, params, function(data) {
      // data.items is the "outbound"
      showResults(data.items);
      console.log(data);
    })
  }

  // Display video results
  // Video is the "inbound"
  function showResults(videos) {
    videos.map(function(item) {
      console.log(item);
      var id = item.id.videoId;
      var title = item.snippet.title;
      var thumbnail = item.snippet.thumbnails.medium.url;
      $('#results').append("<li><h3 class='video-title'>" + title + 
        "</h3><a href='http://www.youtube.com/watch?v=" + id + "'><img src='" + thumbnail + "'></a></li>");
    })
  }
})