"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface FormFooterProps {
    onNext: () => void
    onBack: () => void
    currentStep: number
    totalSteps?: number
    isNextDisabled?: boolean
}

export function FormFooter({
    onNext,
    onBack,
    currentStep,
    totalSteps = 6,
    isNextDisabled = false
}: FormFooterProps) {
    const isFirstStep = currentStep === 1
    const isLastStep = currentStep === totalSteps

    return (
        <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white p-4 shadow-sm z-20">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <div>
                    {!isFirstStep && (
                        <Button
                            variant="outline"
                            onClick={onBack}
                            className="gap-2 rounded-xl text-slate-600 border-slate-200 hover:bg-slate-50 font-semibold"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                    )}
                </div>
                <div>
                    <Button
                        onClick={onNext}
                        disabled={isNextDisabled}
                        className="gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-12 h-12 font-bold shadow-lg shadow-purple-500/20 transition-all active:scale-95"
                    >
                        {isLastStep ? "Schedule Now" : "Continue"}
                        {!isLastStep && <ArrowRight className="w-4 h-4" />}
                    </Button>
                </div>
            </div>
        </div>
    )
}
