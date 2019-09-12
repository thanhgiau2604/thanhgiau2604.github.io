function openStream(cb) {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            cb(stream);
        })
}

module.exports = openStream;