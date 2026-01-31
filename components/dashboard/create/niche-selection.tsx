"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Ghost,
    Lightbulb,
    Trees,
    Monitor,
    Heart,
    Search,
    BrainCircuit,
    Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

const availableNiches = [
    {
        id: "scary-stories",
        name: "Scary Stories",
        description: "Dark, mysterious, and chilling tales that keep viewers on edge.",
        icon: Ghost,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        id: "motivational",
        name: "Motivational",
        description: "Inspiring messages and powerful insights to fuel ambition.",
        icon: Lightbulb,
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        id: "nature-facts",
        name: "Nature Facts",
        description: "Amazing wonders and hidden secrets of the natural world.",
        icon: Trees,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        id: "tech-news",
        name: "Tech News",
        description: "Latest trends and fast-paced updates from the digital frontier.",
        icon: Monitor,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        id: "health-wellness",
        name: "Health & Wellness",
        description: "Quick tips for physical health, mindful living, and vitality.",
        icon: Heart,
        color: "text-rose-600",
        bg: "bg-rose-50"
    },
    {
        id: "did-you-know",
        name: "Did You Know?",
        description: "Surprising facts and Mind-blowing trivia about everything.",
        icon: BrainCircuit,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    {
        id: "luxury-lifestyle",
        name: "Luxury Lifestyle",
        description: "The world of extreme wealth, supercars, and high-end living.",
        icon: Sparkles,
        color: "text-yellow-600",
        bg: "bg-yellow-50"
    }
]

interface NicheSelectionProps {
    selectedNiche: string
    onSelect: (nicheId: string) => void
    customNiche: string
    onCustomNicheChange: (value: string) => void
}

export function NicheSelection({
    selectedNiche,
    onSelect,
    customNiche,
    onCustomNicheChange
}: NicheSelectionProps) {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-24">
            <div className="text-center space-y-2 mb-8 mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Choose your niche</h1>
                <p className="text-slate-500 text-lg">Select a niche that matches your content's theme.</p>
            </div>

            <Tabs defaultValue="available" className="w-full">
                <div className="flex justify-center mb-8">
                    <TabsList className="bg-slate-100 p-1 rounded-2xl h-14 w-full max-w-md shadow-inner">
                        <TabsTrigger
                            value="available"
                            className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm text-base h-full w-full"
                        >
                            Available Niche
                        </TabsTrigger>
                        <TabsTrigger
                            value="custom"
                            className="rounded-xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm text-base h-full w-full"
                        >
                            Custom Niche
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="available" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] overflow-y-auto pr-2 no-scrollbar scroll-smooth">
                        {availableNiches.map((niche) => (
                            <div
                                key={niche.id}
                                onClick={() => onSelect(niche.id)}
                                className={cn(
                                    "group cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                                    selectedNiche === niche.id
                                        ? "border-purple-600 bg-white shadow-xl shadow-purple-500/10 ring-1 ring-purple-600/10"
                                        : "border-slate-100 bg-white hover:border-purple-200"
                                )}
                            >
                                <div className="flex gap-4 items-start">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6",
                                        niche.bg
                                    )}>
                                        <niche.icon className={cn("w-7 h-7", niche.color)} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className={cn(
                                            "text-lg font-bold transition-colors",
                                            selectedNiche === niche.id ? "text-purple-600" : "text-slate-900"
                                        )}>
                                            {niche.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {niche.description}
                                        </p>
                                    </div>
                                    {selectedNiche === niche.id && (
                                        <div className="ml-auto bg-purple-600 rounded-full p-1 self-center">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="custom" className="mt-0">
                    <Card className="p-8 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-3xl">
                        <div className="max-w-xl mx-auto space-y-6 text-center">
                            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-slate-200 flex items-center justify-center mx-auto text-purple-600">
                                <Search className="w-10 h-10" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Define your own niche</h3>
                                <p className="text-slate-500">Can't find what you're looking for? Type it below.</p>
                            </div>
                            <input
                                type="text"
                                placeholder="e.g. Science Experiments, Daily Stoicism..."
                                value={customNiche}
                                onChange={(e) => onCustomNicheChange(e.target.value)}
                                className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl px-6 text-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium text-slate-800"
                            />
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
