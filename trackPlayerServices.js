import TrackPlayer, {AppKilledPlaybackBehavior, Capability, RepeatMode, Event} from 'react-native-track-player';

export const setupPlayer = async () => {
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    }
    catch {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            android: {
                appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
                stopWithApp: true
            },
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.SeekTo,
            ],
            compactCapabilities: [
                Capability.Play,
                Capability.Pause,
                // Capability.SkipToNext,
                // Capability.SkipToPrevious,
            ],
            progressUpdateEventInterval: 1,
        });

        isSetup = true;
    }
    finally {
        return isSetup;
    }
}

export const playbackService = async () => {
    TrackPlayer.addEventListener("remote-play", () => TrackPlayer.play());
    TrackPlayer.addEventListener("remote-pause", () => TrackPlayer.pause());
}