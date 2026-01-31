"use client"

import * as React from "react"
import { BackgroundMusic } from "./constants"
import { Button } from "@/components/ui/button"
import { Play, Pause, Music2, Check, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

interface MusicSelectionProps {
    selectedMusicIds: string[]
    onToggle: (musicId: string) => void
}

export function MusicSelection({
    selectedMusicIds,
    onToggle
}: MusicSelectionProps) {
    const [playingId, setPlayingId] = React.useState<string | null>(null)
    const audioRef = React.useRef<HTMLAudioElement | null>(null)

    const togglePreview = (url: string, id: string) => {
        if (playingId === id) {
            audioRef.current?.pause()
            setPlayingId(null)
        } else {
            if (audioRef.current) {
                audioRef.current.src = url
                audioRef.current.play()
                setPlayingId(id)
            }
        }
    }

    React.useEffect(() => {
        audioRef.current = new Audio()
        audioRef.current.onended = () => setPlayingId(null)

        return () => {
            audioRef.current?.pause()
            audioRef.current = null
        }
    }, [])

    return (
        <div className="w-full max-w-4xl mx-auto space-y-10 pb-24 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2 mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Background Music</h1>
                <p className="text-slate-500 text-lg">Select one or more tracks to be used as background music for your videos.</p>
            </div>

            <div className="flex items-center gap-2 px-2">
                <Headphones className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Available Music</h2>
            </div>

            <div className="space-y-4 h-[500px] overflow-y-auto pr-2 no-scrollbar scroll-smooth">
                {BackgroundMusic.map((music) => {
                    const isSelected = selectedMusicIds.includes(music.id)
                    const isPlaying = playingId === music.id

                    return (
                        <div
                            key={music.id}
                            onClick={() => onToggle(music.id)}
                            className={cn(
                                "group cursor-pointer p-6 rounded-[2.5rem] border-2 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-between gap-6 bg-white",
                                isSelected
                                    ? "border-purple-600 shadow-xl shadow-purple-500/10 ring-1 ring-purple-600/10"
                                    : "border-slate-100 hover:border-purple-200"
                            )}
                        >
                            <div className="flex items-center gap-6 min-w-0">
                                <div className={cn(
                                    "w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6",
                                    isSelected ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-600"
                                )}>
                                    <Music2 className="w-8 h-8" />
                                </div>
                                <div className="space-y-1 min-w-0">
                                    <h3 className={cn(
                                        "text-xl font-bold transition-colors truncate",
                                        isSelected ? "text-purple-600" : "text-slate-900"
                                    )}>
                                        {music.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed truncate max-w-md">
                                        {music.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 shrink-0">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        "rounded-2xl w-14 h-14 transition-all",
                                        isPlaying
                                            ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                                            : "bg-slate-50 hover:bg-purple-50 text-slate-400 hover:text-purple-600"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        togglePreview(music.url, music.id)
                                    }}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-6 h-6 fill-current" />
                                    ) : (
                                        <Play className="w-6 h-6 fill-current ml-0.5" />
                                    )}
                                </Button>
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                                    isSelected
                                        ? "bg-purple-600 text-white scale-110 shadow-lg shadow-purple-200"
                                        : "bg-slate-100 text-transparent opacity-0 translate-x-4"
                                )}>
                                    <Check className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
