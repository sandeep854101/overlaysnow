import React from 'react';

const VideoView = ({ videoData }) => {
    return (
        <div >
            {
                videoData.map((item) => (
                    <div key={item.id} >
                        <div>
                            <video
                                autoPlay
                                muted
                                loop
                                className='h-full w-[full]'
                            >
                                <source src={item.video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default VideoView;
