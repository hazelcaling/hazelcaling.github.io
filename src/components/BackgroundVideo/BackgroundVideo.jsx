import './BackgroundVideo.css'

function BackgroundVideo() {
    return (
        <div className="video-background">
            <video src="background-video.mp4" autoPlay muted loop type='video/mp4'>

            </video>
        </div>
    )
}

export default BackgroundVideo
