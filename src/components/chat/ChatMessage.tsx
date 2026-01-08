import { Bot, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  audioUrl?: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center shrink-0">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-sm"
            : "bg-muted text-foreground rounded-tl-sm"
        }`}
      >
        {message.audioUrl ? (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isUser
                  ? "bg-primary-foreground/20 hover:bg-primary-foreground/30"
                  : "bg-foreground/10 hover:bg-foreground/20"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex gap-0.5">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full ${
                      isUser ? "bg-primary-foreground/50" : "bg-foreground/30"
                    }`}
                    style={{
                      height: `${Math.random() * 16 + 8}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <span className={`text-xs ${isUser ? "opacity-70" : "text-muted-foreground"}`}>
              Voice note
            </span>
            <audio
              ref={audioRef}
              src={message.audioUrl}
              onEnded={handleAudioEnd}
              className="hidden"
            />
          </div>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
