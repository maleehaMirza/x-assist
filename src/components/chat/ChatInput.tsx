import { Send, Mic, Square, X, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  onSendVoiceNote: (audioBlob: Blob, audioUrl: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, onSendVoiceNote, disabled }: ChatInputProps) => {
  const [text, setText] = useState("");
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);

  const {
    isRecording,
    audioBlob,
    audioUrl,
    duration,
    error,
    startRecording,
    stopRecording,
    clearRecording,
  } = useVoiceRecording();

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text.trim());
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSendVoiceNote = () => {
    if (audioBlob && audioUrl) {
      onSendVoiceNote(audioBlob, audioUrl);
      clearRecording();
    }
  };

  const togglePreview = () => {
    if (!previewAudioRef.current) return;
    if (isPlayingPreview) {
      previewAudioRef.current.pause();
    } else {
      previewAudioRef.current.play();
    }
    setIsPlayingPreview(!isPlayingPreview);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Recording state
  if (isRecording) {
    return (
      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-destructive/10 rounded-full">
            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
            <span className="text-sm font-medium text-destructive">Recording...</span>
            <span className="text-sm text-muted-foreground ml-auto">
              {formatDuration(duration)}
            </span>
          </div>
          <Button
            onClick={stopRecording}
            size="icon"
            className="w-12 h-12 rounded-full bg-destructive hover:bg-destructive/90"
          >
            <Square className="w-5 h-5 fill-current" />
          </Button>
        </div>
      </div>
    );
  }

  // Voice note preview state
  if (audioUrl) {
    return (
      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-center gap-3">
          <Button
            onClick={clearRecording}
            size="icon"
            variant="ghost"
            className="shrink-0"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted rounded-full">
            <button
              onClick={togglePreview}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
            >
              {isPlayingPreview ? (
                <Pause className="w-4 h-4 text-primary-foreground" />
              ) : (
                <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
              )}
            </button>
            <div className="flex-1 flex gap-0.5">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-foreground/30"
                  style={{ height: `${Math.random() * 20 + 6}px` }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {formatDuration(duration)}
            </span>
            <audio
              ref={previewAudioRef}
              src={audioUrl}
              onEnded={() => setIsPlayingPreview(false)}
              className="hidden"
            />
          </div>

          <Button
            onClick={handleSendVoiceNote}
            size="icon"
            className="w-12 h-12 rounded-full gradient-teal hover:opacity-90 shrink-0"
          >
            <Send className="w-5 h-5 text-primary-foreground" />
          </Button>
        </div>
      </div>
    );
  }

  // Default text input state
  return (
    <div className="p-4 border-t border-border bg-card">
      {error && (
        <p className="text-sm text-destructive mb-2 px-2">{error}</p>
      )}
      <div className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message or record a voice note..."
            disabled={disabled}
            rows={1}
            className="w-full resize-none rounded-2xl bg-muted px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 max-h-32"
            style={{ minHeight: "48px" }}
          />
        </div>
        
        {text.trim() ? (
          <Button
            onClick={handleSend}
            disabled={disabled}
            size="icon"
            className="w-12 h-12 rounded-full gradient-teal hover:opacity-90 shrink-0"
          >
            <Send className="w-5 h-5 text-primary-foreground" />
          </Button>
        ) : (
          <Button
            onClick={startRecording}
            disabled={disabled}
            size="icon"
            className="w-12 h-12 rounded-full gradient-teal hover:opacity-90 shrink-0"
          >
            <Mic className="w-5 h-5 text-primary-foreground" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
