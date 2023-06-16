const fs = require('fs');

const fileList = require('../utils/videolist');

//send the list of all videos
module.exports.listVideos = async (req, res) => {
    return res.send(200).json({
        message: 'List of videos are sent successfully',
        data: fileList
    })
}

//play the video
module.exports.videoPlay = async (req, res) => {

}

// get the video uploaded
module.exports.videoUpload = async (req, res) => {

}