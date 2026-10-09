declare global {
    interface YTPlayer {
        seekTo(seconds: number, allowSeekAhead?: boolean): void;
        playVideo(): void;
        pauseVideo(): void;
    }
    interface YT {
        player(id: string): YTPlayer;
    }
    interface Window {
        YT?: YT;
        onYouTubeIframeAPIReady?: () => void;
    }
}

export {};