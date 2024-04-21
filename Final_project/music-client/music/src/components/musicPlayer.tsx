import React from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface MusicPlayerProps {
    src: string;
}
export default function MusicPlayer({ src }: MusicPlayerProps) {
    return (
        <div>
            <AudioPlayer
                // autoPlay
                src={src}
                onPlay={(e: any) => console.log('onPlay')}
            // other props as needed
            />
        </div>
    );
}
