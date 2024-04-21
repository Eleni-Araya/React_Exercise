import React, { useState, useEffect } from 'react';
import MusicPlayer from './musicPlayer';
import Songs from '../types/song';
// import { useNavigate } from 'react-router-dom';
import userService from '../apis/services/login.service'

export default function PlayMusic() {
    const [musicList, setMusicList] = useState<Songs[]>([]);
    // const navigate = useNavigate()

    useEffect(() => {
        const musicList = async () => {
            try {
                const response = await userService.getSongs();
                setMusicList(response.data)
            } catch (error) {
                throw new Error('Error fetching songs');

            }
        }
        musicList();
    }, [])

    return (
        <div className='fixed-bottom'>
            {musicList.length > 0 ? <MusicPlayer src={'http://localhost:8000/' + musicList[0].urlPath} /> : <></>}
        </div>
    );
}
