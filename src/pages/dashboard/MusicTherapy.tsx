import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../../utils/Music";

const MusicTherapy = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePrevious = () => {
    const newIndex = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(newIndex);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const newIndex = currentTrack === tracks.length - 1 ? 0 : currentTrack + 1;
    setCurrentTrack(newIndex);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // Sync play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  // Time updater
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleNext);
    };
  }, [currentTrack]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <audio ref={audioRef} src={tracks[currentTrack].src} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Music Therapy
        </h1>
        <p className="text-xl text-slate-600">
          Heal your mind with therapeutic sounds
        </p>
      </div>

      {/* Now Playing Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-8">
            <Volume2 className="h-24 w-24 text-white" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 mb-1">
            {tracks[currentTrack].title}
          </h2>
          <p className="text-slate-600 mb-6">{tracks[currentTrack].artist}</p>

          {/* Progress */}
          {/* Progress Bar */}
          <div className="w-full max-w-md mb-4">
            <div
              className="relative h-2 bg-slate-200 rounded-full cursor-pointer group"
              onClick={(e) => {
                const rect = (e.target as HTMLElement).getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newTime = (clickX / rect.width) * duration;
                if (audioRef.current) {
                  audioRef.current.currentTime = newTime;
                  setCurrentTime(newTime);
                }
              }}
            >
              <div
                className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full transition-all duration-200"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 left-0 h-4 w-4 bg-indigo-600 rounded-full shadow-md group-hover:scale-110 transition transform"
                style={{
                  left: `calc(${(currentTime / duration) * 100}% - 8px)`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-slate-500 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-6 mt-4">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full hover:bg-slate-100 transition"
            >
              <SkipBack className="h-6 w-6 text-slate-700" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-6 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="h-8 w-8 text-white" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full hover:bg-slate-100 transition"
            >
              <SkipForward className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Playlist</h3>
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTrack(index);
                setIsPlaying(true);
              }}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition ${
                currentTrack === index
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center">
                <div className="mr-4">
                  {currentTrack === index && isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </div>
                <div className="text-left">
                  <h4 className="font-medium">{track.title}</h4>
                  <p className="text-sm text-slate-500">{track.artist}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">{track.mood}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicTherapy;
