"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import {
    Clock,
    Instagram,
    Youtube,
    Mail,
    Check,
    Type,
    LayoutGrid,
    Info
} from "lucide-react"

// Custom TikTok icon since Lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.84-.16 1.74.28 2.51.39.71 1.04 1.21 1.83 1.45.65.2 1.33.18 1.98-.02.91-.27 1.67-.93 2.09-1.77.26-.52.39-1.11.39-1.69.01-4.04 0-8.07.01-12.11Z" />
    </svg>
)

interface SeriesDetailsProps {
    formData: any
    updateFormData: (field: any, value: any) => void
}

const platforms = [
    { id: "tiktok", name: "TikTok", icon: TikTokIcon, color: "hover:text-[#fe2c55]" },
    { id: "youtube", name: "YouTube", icon: Youtube, color: "hover:text-[#ff0000]" },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "hover:text-[#e4405f]" },
    { id: "email", name: "Email", icon: Mail, color: "hover:text-purple-600" },
]

export function SeriesDetails({
    formData,
    updateFormData
}: SeriesDetailsProps) {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-12 pb-24 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2 mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Final Touches</h1>
                <p className="text-slate-500 text-lg">Name your masterpiece and schedule the magic.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side: General Info */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Type className="w-5 h-5 text-purple-600" />
                            <Label htmlFor="seriesName" className="text-lg font-bold text-slate-800">Series Name</Label>
                        </div>
                        <Input
                            id="seriesName"
                            placeholder="Enter a catchy name for your series..."
                            value={formData.seriesName}
                            onChange={(e) => updateFormData("seriesName", e.target.value)}
                            className="h-14 rounded-2xl border-2 border-slate-100 focus:border-purple-600 focus:ring-purple-600/10 text-lg transition-all"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-purple-600" />
                            <Label htmlFor="duration" className="text-lg font-bold text-slate-800">Video Duration</Label>
                        </div>
                        <Select
                            value={formData.duration}
                            onValueChange={(val) => updateFormData("duration", val)}
                        >
                            <SelectTrigger id="duration" className="h-14 rounded-2xl border-2 border-slate-100 focus:border-purple-600 text-lg">
                                <SelectValue placeholder="Select duration..." />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-slate-100">
                                <SelectItem value="30-50" className="rounded-xl h-12">30 - 50 seconds</SelectItem>
                                <SelectItem value="60-70" className="rounded-xl h-12">60 - 70 seconds</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-purple-600" />
                            <Label htmlFor="scheduleTime" className="text-lg font-bold text-slate-800">Publish Time</Label>
                        </div>
                        <div className="relative group">
                            <Input
                                id="scheduleTime"
                                type="time"
                                value={formData.scheduleTime}
                                onChange={(e) => updateFormData("scheduleTime", e.target.value)}
                                className="h-14 rounded-2xl border-2 border-slate-100 focus:border-purple-600 focus:ring-purple-600/10 text-lg transition-all bg-white"
                            />
                        </div>
                        <div className="flex items-start gap-2 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                            <Info className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                            <p className="text-purple-700 text-sm leading-relaxed">
                                <span className="font-bold">Note:</span> Video will generate <span className="underline decoration-purple-300 decoration-2">3-6 hours</span> before publishing to ensure everything is perfect.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Platform Selection */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <LayoutGrid className="w-5 h-5 text-purple-600" />
                        <h2 className="text-lg font-bold text-slate-800">Target Platforms</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {platforms.map((platform) => {
                            const isSelected = formData.platform === platform.id
                            const Icon = platform.icon

                            return (
                                <div
                                    key={platform.id}
                                    onClick={() => updateFormData("platform", platform.id)}
                                    className={cn(
                                        "group cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center gap-4 text-center bg-white",
                                        isSelected
                                            ? "border-purple-600 shadow-xl shadow-purple-500/10 scale-[1.05]"
                                            : "border-slate-100 hover:border-purple-200"
                                    )}
                                >
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300",
                                        isSelected ? "bg-purple-600 text-white" : "bg-slate-50 text-slate-400",
                                        platform.color
                                    )}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "font-bold text-sm",
                                            isSelected ? "text-purple-600" : "text-slate-600"
                                        )}>
                                            {platform.name}
                                        </span>
                                        {isSelected && (
                                            <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center animate-in zoom-in">
                                                <Check className="w-3 h-3 text-white stroke-[3]" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
