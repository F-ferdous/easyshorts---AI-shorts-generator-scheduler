"use client"

import * as React from "react"
import { Languages, DeepgramVoices, FonadalabVoices } from "./constants"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Check, Globe2, Mic2, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface LanguageVoiceSelectionProps {
    selectedLanguage: string
    onLanguageSelect: (lang: string) => void
    selectedVoice: string
    onVoiceSelect: (voice: string) => void
}

export function LanguageVoiceSelection({
    selectedLanguage,
    onLanguageSelect,
    selectedVoice,
    onVoiceSelect
}: LanguageVoiceSelectionProps) {
    const [playingVoice, setPlayingVoice] = React.useState<string | null>(null)
    const audioRef = React.useRef<HTMLAudioElement | null>(null)

    const currentLanguageObj = Languages.find(l => l.language === selectedLanguage)
    const availableVoices = currentLanguageObj?.modelName === "deepgram"
        ? DeepgramVoices
        : currentLanguageObj?.modelName === "fonadalab"
            ? FonadalabVoices
            : []

    const togglePreview = (previewFile: string, voiceName: string) => {
        if (playingVoice === voiceName) {
            audioRef.current?.pause()
            setPlayingVoice(null)
        } else {
            if (audioRef.current) {
                audioRef.current.src = `/voice/${previewFile}`
                audioRef.current.play()
                setPlayingVoice(voiceName)
            }
        }
    }

    React.useEffect(() => {
        audioRef.current = new Audio()
        audioRef.current.onended = () => setPlayingVoice(null)

        return () => {
            audioRef.current?.pause()
            audioRef.current = null
        }
    }, [])

    return (
        <div className="w-full max-w-4xl mx-auto space-y-12 pb-24">
            <div className="text-center space-y-2 mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Language & Voice</h1>
                <p className="text-slate-500 text-lg">Select the language and the perfect AI voice for your series.</p>
            </div>

            {/* Language Selection */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 px-2">
                    <Globe2 className="w-5 h-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-slate-800">Select Language</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {Languages.map((lang) => (
                        <div
                            key={lang.language}
                            onClick={() => {
                                onLanguageSelect(lang.language)
                                onVoiceSelect("") // Reset voice when language changes
                            }}
                            className={cn(
                                "cursor-pointer p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center gap-2 text-center",
                                selectedLanguage === lang.language
                                    ? "border-purple-600 bg-white shadow-lg shadow-purple-500/10 scale-[1.05]"
                                    : "border-slate-100 bg-white hover:border-purple-200"
                            )}
                        >
                            <span className="text-3xl">{lang.countryFlag}</span>
                            <span className={cn(
                                "font-bold text-sm",
                                selectedLanguage === lang.language ? "text-purple-600" : "text-slate-700"
                            )}>
                                {lang.language}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Voice Selection */}
            {selectedLanguage && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-2 px-2">
                        <Mic2 className="w-5 h-5 text-purple-600" />
                        <h2 className="text-xl font-bold text-slate-800">Available Voices</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] overflow-y-auto pr-2 no-scrollbar">
                        {availableVoices.map((voice) => (
                            <div
                                key={voice.modelName}
                                onClick={() => onVoiceSelect(voice.modelName)}
                                className={cn(
                                    "group cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                                    selectedVoice === voice.modelName
                                        ? "border-purple-600 bg-white shadow-xl shadow-purple-500/10 ring-1 ring-purple-600/10"
                                        : "border-slate-100 bg-white hover:border-purple-200"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6",
                                        selectedVoice === voice.modelName ? "bg-purple-600 text-white" : "bg-slate-50 text-slate-400"
                                    )}>
                                        <User className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className={cn(
                                                "text-lg font-bold truncate transition-colors",
                                                selectedVoice === voice.modelName ? "text-purple-600" : "text-slate-900"
                                            )}>
                                                {voice.modelName.split('-').pop()?.toUpperCase() || voice.modelName}
                                            </h3>
                                            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
                                                {voice.gender}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 text-xs mt-1 uppercase font-bold tracking-widest flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            {voice.model}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className={cn(
                                                "rounded-xl w-12 h-12 transition-all",
                                                playingVoice === voice.modelName
                                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                                                    : "bg-slate-50 hover:bg-purple-50 text-slate-400 hover:text-purple-600"
                                            )}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                togglePreview(voice.preview, voice.modelName)
                                            }}
                                        >
                                            {playingVoice === voice.modelName ? (
                                                <Pause className="w-5 h-5 fill-current" />
                                            ) : (
                                                <Play className="w-5 h-5 fill-current ml-0.5" />
                                            )}
                                        </Button>
                                        <div className={cn(
                                            "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                                            selectedVoice === voice.modelName ? "bg-purple-600 text-white scale-110 shadow-lg shadow-purple-200" : "bg-slate-100 text-transparent opacity-0"
                                        )}>
                                            <Check className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
