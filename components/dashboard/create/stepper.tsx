"use client"

import { cn } from "@/lib/utils"

interface StepperProps {
    currentStep: number
    totalSteps?: number
}

export function Stepper({ currentStep, totalSteps = 6 }: StepperProps) {
    return (
        <div className="w-full py-4 px-2">
            <div className="flex gap-2 w-full max-w-4xl mx-auto">
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const stepNumber = index + 1
                    const isActive = stepNumber <= currentStep
                    const isCompleted = stepNumber < currentStep

                    return (
                        <div key={index} className="flex-1">
                            <div
                                className={cn(
                                    "h-2 w-full rounded-full transition-all duration-500",
                                    isActive ? "bg-purple-600" : "bg-slate-200"
                                )}
                            />
                            <div className="mt-2 flex flex-col items-center">
                                <span className={cn(
                                    "text-xs font-semibold",
                                    isActive ? "text-purple-600" : "text-slate-400"
                                )}>
                                    Step {stepNumber}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
