"use client"

import * as React from "react"
import { VideoStyles } from "./constants"
import { Check, Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface VideoStyleSelectionProps {
    selectedStyleId: string
    onSelect: (styleId: string) => void
}

export function VideoStyleSelection({
    selectedStyleId,
    onSelect
}: VideoStyleSelectionProps) {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-10 pb-24 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2 mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Visual Style</h1>
                <p className="text-slate-500 text-lg">Choose a visual aesthetic that matches the mood of your series.</p>
            </div>

            <div className="flex items-center gap-2 px-2">
                <Palette className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Available Styles</h2>
            </div>

            <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar scroll-smooth px-2">
                {VideoStyles.map((style) => {
                    const isSelected = selectedStyleId === style.id

                    return (
                        <div
                            key={style.id}
                            onClick={() => onSelect(style.id)}
                            className={cn(
                                "flex-none w-[240px] cursor-pointer group transition-all duration-300 transform active:scale-[0.98]",
                                isSelected ? "scale-[1.02]" : "hover:scale-[1.01]"
                            )}
                        >
                            <div className={cn(
                                "relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 transition-all duration-300 shadow-lg",
                                isSelected
                                    ? "border-purple-600 shadow-purple-500/20 ring-4 ring-purple-600/10"
                                    : "border-white hover:border-purple-200 shadow-slate-200"
                            )}>
                                <Image
                                    src={style.image}
                                    alt={style.name}
                                    fill
                                    className={cn(
                                        "object-cover transition-transform duration-700 group-hover:scale-110",
                                        isSelected ? "scale-105" : ""
                                    )}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Selection Checkmark */}
                                <div className={cn(
                                    "absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl",
                                    isSelected
                                        ? "bg-purple-600 text-white scale-110 rotate-0"
                                        : "bg-white/20 backdrop-blur-md text-white/50 scale-0 rotate-12 opacity-0"
                                )}>
                                    <Check className="w-6 h-6 stroke-[3]" />
                                </div>

                                {/* Style Name */}
                                <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
                                    <h3 className="text-xl font-black text-white tracking-widest uppercase drop-shadow-md">
                                        {style.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Hint for scrolling */}
            <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium animate-pulse">
                <span>Scroll horizontally to see more styles</span>
                <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-purple-200 rounded-full" />
                </div>
            </div>
        </div>
    )
}
