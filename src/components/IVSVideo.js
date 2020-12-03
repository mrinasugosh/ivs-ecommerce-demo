import React, {useEffect, useRef} from 'react';


function IVSVideo(options) {
    const divEl = useRef(null);
    const videoEl = useRef(null);

    useEffect(() => {

            const script = document.createElement('script');

            script.src = 'https://player.live-video.net/1.0.0/amazon-ivs-player.min.js';
            script.async = true;

            document.body.appendChild(script);

            script.onload = () => {
                // eslint-disable-next-line no-undef
                if (IVSPlayer.isPlayerSupported) {
                    // eslint-disable-next-line no-undef
                    const player = IVSPlayer.create();
                    player.attachHTMLVideoElement(document.getElementById('video-player'));
                    player.load("https://86b54afdc65c.us-east-1.playback.live-video.net/api/video/v1/us-east-1.623041181200.channel.ZiBj0oglnYPj.m3u8");
                    player.play();
                }
            }

            return () => {
                document.body.removeChild(script);
            }

        },
        []
    )

    return (
        <div ref={divEl} style={{ textAlign: 'center', margin: '1rem' }}>
            <video
                id="video-player"
                ref={videoEl}
                playsInline
                autoPlay
                height={500}
                controls
            />
        </div>
    );
}

export default IVSVideo;