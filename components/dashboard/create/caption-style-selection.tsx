"use client"

import * as React from "react"
import { CaptionStyles } from "./constants"
import { Check, Type } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaptionStyleSelectionProps {
    selectedStyleId: string
    onSelect: (styleId: string) => void
}

export function CaptionStyleSelection({
    selectedStyleId,
    onSelect
}: CaptionStyleSelectionProps) {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-12 pb-24 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700">
            <style jsx global>{`
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 10px rgba(168,85,247,0.8), 0 0 20px rgba(168,85,247,0.4); }
                    50% { text-shadow: 0 0 20px rgba(168,85,247,1), 0 0 40px rgba(168,85,247,0.6); }
                }
                @keyframes gradient-wave {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes typewriter {
                    from { width: 0; }
                    to { width: 100%; }
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .style-preview-modern-glow {
                    animation: glow 2s ease-in-out infinite;
                }
                .style-preview-gradient-wave {
                    background-size: 200% 200%;
                    animation: gradient-wave 3s linear infinite;
                }
                .style-preview-typewriter {
                    overflow: hidden;
                    white-space: nowrap;
                    border-right: 3px solid white;
                    animation: typewriter 2s steps(20, end) infinite;
                }
                .style-preview-classic-white, .style-preview-yellow-bold, .style-preview-outline-black {
                    animation: bounce-subtle 3s ease-in-out infinite;
                }
            `}</style>

            <div className="text-center space-y-2 mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Caption Style</h1>
                <p className="text-slate-500 text-lg">Pick a subtitle style that brings your content to life.</p>
            </div>

            <div className="flex items-center gap-2 px-2">
                <Type className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Available Styles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CaptionStyles.map((style) => {
                    const isSelected = selectedStyleId === style.id

                    return (
                        <div
                            key={style.id}
                            onClick={() => onSelect(style.id)}
                            className={cn(
                                "group cursor-pointer p-1 rounded-[2rem] border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                                isSelected
                                    ? "border-purple-600 bg-white shadow-xl shadow-purple-500/10 ring-1 ring-purple-600/10"
                                    : "border-slate-100 bg-white hover:border-purple-200"
                            )}
                        >
                            <div className="relative h-48 rounded-[1.8rem] bg-slate-900 overflow-hidden flex items-center justify-center p-6">
                                {/* Background Decorative Element */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20" />

                                {/* Live Animated Preview */}
                                <div className={cn(
                                    "text-center text-3xl transition-all duration-500",
                                    style.styleClass,
                                    `style-preview-${style.id}`
                                )}>
                                    Beautiful Captions
                                </div>

                                {/* Selection Checkmark Overlay */}
                                <div className={cn(
                                    "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                                    isSelected
                                        ? "bg-purple-600 text-white scale-110 shadow-lg"
                                        : "bg-white/10 backdrop-blur-md text-white/50 scale-0 opacity-0"
                                )}>
                                    <Check className="w-5 h-5 stroke-[3]" />
                                </div>
                            </div>

                            <div className="p-5 space-y-1">
                                <h3 className={cn(
                                    "font-bold text-lg transition-colors",
                                    isSelected ? "text-purple-600" : "text-slate-900"
                                )}>
                                    {style.name}
                                </h3>
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest leading-relaxed">
                                    {style.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
