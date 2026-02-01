"use client"

import * as React from "react"
import { Stepper } from "@/components/dashboard/create/stepper"
import { FormFooter } from "@/components/dashboard/create/form-footer"
import { NicheSelection } from "@/components/dashboard/create/niche-selection"
import { LanguageVoiceSelection } from "@/components/dashboard/create/language-voice-selection"
import { MusicSelection } from "@/components/dashboard/create/music-selection"
import { VideoStyleSelection } from "@/components/dashboard/create/video-style-selection"
import { CaptionStyleSelection } from "@/components/dashboard/create/caption-style-selection"
import { SeriesDetails } from "@/components/dashboard/create/series-details"

export default function CreateSeriesPage() {
    const [currentStep, setCurrentStep] = React.useState(1)
    const [formData, setFormData] = React.useState({
        niche: "",
        customNiche: "",
        language: "",
        voice: "",
        music: [] as string[],
        videoStyle: "",
        captionStyle: "",
        seriesName: "",
        duration: "",
        platform: "",
        scheduleTime: "",
        // Add more fields for future steps here
    })

    const handleNext = () => {
        if (currentStep < 6) {
            setCurrentStep(prev => prev + 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            // Final Step - Schedule
            console.log("Final Form Data:", formData)
            // Here you would typically call your backend API
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const updateFormData = (field: keyof typeof formData, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const toggleMusic = (musicId: string) => {
        setFormData(prev => {
            const isSelected = prev.music.includes(musicId)
            if (isSelected) {
                return { ...prev, music: prev.music.filter(id => id !== musicId) }
            } else {
                return { ...prev, music: [...prev.music, musicId] }
            }
        })
    }

    const isStep1Valid = formData.niche !== "" || formData.customNiche !== ""
    const isStep2Valid = formData.language !== "" && formData.voice !== ""
    const isStep3Valid = formData.music.length > 0
    const isStep4Valid = formData.videoStyle !== ""
    const isStep5Valid = formData.captionStyle !== ""
    const isStep6Valid = formData.seriesName !== "" && formData.duration !== "" && formData.platform !== "" && formData.scheduleTime !== ""

    const isCurrentStepValid = () => {
        if (currentStep === 1) return isStep1Valid
        if (currentStep === 2) return isStep2Valid
        if (currentStep === 3) return isStep3Valid
        if (currentStep === 4) return isStep4Valid
        if (currentStep === 5) return isStep5Valid
        if (currentStep === 6) return isStep6Valid
        return true
    }

    return (
        <div className="min-h-screen bg-slate-50/50 pb-32">
            <div className="max-w-5xl mx-auto pt-8">
                <Stepper currentStep={currentStep} />

                <div className="mt-12 px-4 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    {currentStep === 1 && (
                        <NicheSelection
                            selectedNiche={formData.niche}
                            onSelect={(id) => updateFormData("niche", id)}
                            customNiche={formData.customNiche}
                            onCustomNicheChange={(val) => updateFormData("customNiche", val)}
                        />
                    )}

                    {currentStep === 2 && (
                        <LanguageVoiceSelection
                            selectedLanguage={formData.language}
                            onLanguageSelect={(lang) => updateFormData("language", lang)}
                            selectedVoice={formData.voice}
                            onVoiceSelect={(voice) => updateFormData("voice", voice)}
                        />
                    )}

                    {currentStep === 3 && (
                        <MusicSelection
                            selectedMusicIds={formData.music}
                            onToggle={toggleMusic}
                        />
                    )}

                    {currentStep === 4 && (
                        <VideoStyleSelection
                            selectedStyleId={formData.videoStyle}
                            onSelect={(id) => updateFormData("videoStyle", id)}
                        />
                    )}

                    {currentStep === 5 && (
                        <CaptionStyleSelection
                            selectedStyleId={formData.captionStyle}
                            onSelect={(id) => updateFormData("captionStyle", id)}
                        />
                    )}

                    {currentStep === 6 && (
                        <SeriesDetails
                            formData={formData}
                            updateFormData={updateFormData}
                        />
                    )}
                </div>
            </div>

            <FormFooter
                currentStep={currentStep}
                onNext={handleNext}
                onBack={handleBack}
                isNextDisabled={!isCurrentStepValid()}
            />
        </div>
    )
}
