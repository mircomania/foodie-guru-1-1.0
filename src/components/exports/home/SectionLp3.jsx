import styles from '../../../styles/modules/home/sectionLp3.module.css';
import { useState, useEffect } from 'react';
import { useBackVideo } from '../../../hooks/UseBackVideo';

import { PlayIcon } from '../../../assets/icons/PlayIcon';
import { PauseIcon } from '../../../assets/icons/PauseIcon';
import { MuteIcon } from '../../../assets/icons/MuteIcon';
import { UnmuteIcon } from '../../../assets/icons/UnmuteIcon';

export const SectionLp3 = () => {
    const videoRef = useBackVideo(1);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onPlay = () => setIsPaused(false);
        const onPause = () => setIsPaused(true);

        video.addEventListener('play', onPlay);
        video.addEventListener('pause', onPause);

        return () => {
            video.removeEventListener('play', onPlay);
            video.removeEventListener('pause', onPause);
        };
    }, [videoRef]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onVolumeChange = () => {
            setIsMuted(video.muted);
        };

        video.addEventListener('volumechange', onVolumeChange);

        return () => {
            video.removeEventListener('volumechange', onVolumeChange);
        };
    }, [videoRef]);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        video.paused ? video.play() : video.pause();
    };

    return (
        <section className={styles.sectionContainer}>
            <video ref={videoRef} className={styles.videoBackground} autoPlay loop muted playsInline poster="/videos/video-home.jpg">
                <source src="/videos/video-home.mp4" type="video/mp4" />
            </video>

            {/* Controles */}
            <div className={styles.controls}>
                <button onClick={togglePlay} aria-label={isPaused ? 'Reproducir video' : 'Pausar video'}>
                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                </button>

                <button onClick={toggleMute} aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}>
                    {isMuted ? <MuteIcon /> : <UnmuteIcon />}
                </button>
            </div>
        </section>
    );
};
