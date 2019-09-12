function playVideo(stream,idVideo){
    const video = document.getElementById(idVideo);
            video.srcObject = stream;
            video.onloadeddata = () => video.play();
}
module.exports = playVideo;