"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Zap,
    Calendar,
    Share2,
    Mail,
    CheckCircle2,
    Youtube,
    Instagram,
    Twitter,
    ArrowRight,
    Menu,
    X,
    PlayCircle,
    Clock,
    Layout,
    Globe
} from "lucide-react"

export function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Easy Shorts</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
                        <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How it works</a>
                        <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white border-none shadow-lg shadow-purple-500/20">
                            Get Started
                        </Button>
                    </div>

                    <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-950 border-b border-white/5 p-4 flex flex-col gap-4">
                        <a href="#features" className="text-slate-400">Features</a>
                        <a href="#how-it-works" className="text-slate-400">How it works</a>
                        <a href="#pricing" className="text-slate-400">Pricing</a>
                        <Button className="w-full bg-purple-600">Get Started</Button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 animate-pulse">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-6 py-1 px-4 border-purple-500/30 bg-purple-500/10 text-purple-400 backdrop-blur-md">
                        AI-Powered Video Scheduling ✨
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                        Animate. Schedule. <br />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Go Viral.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Create high-quality AI shorts in seconds and auto-schedule them across YouTube, Instagram, TikTok, and Email.
                        The ultimate SaaS for creators and marketers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xl shadow-purple-500/25">
                            Start Generating for Free <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 transition-all text-slate-300">
                            Watch Demo <PlayCircle className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Hero Image */}
                    <div className="mt-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                        <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10 max-w-5xl mx-auto">
                            <img
                                src="/hero-dashboard.png"
                                alt="Easy Shorts Dashboard"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-12 border-y border-white/5 bg-slate-950/50">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-widest font-semibold">Powering creators on</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale contrast-125">
                        <div className="flex items-center gap-2"><Youtube className="w-6 h-6" /><span className="text-lg font-bold">YouTube</span></div>
                        <div className="flex items-center gap-2"><Instagram className="w-6 h-6" /><span className="text-lg font-bold">Instagram</span></div>
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.03-12.07z" /></svg>
                            <span className="text-lg font-bold">TikTok</span>
                        </div>
                        <div className="flex items-center gap-2"><Mail className="w-6 h-6" /><span className="text-lg font-bold">Email</span></div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to <br /><span className="text-purple-500">dominate short-form.</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Skip the hours of editing. Let our AI do the heavy lifting while you focus on growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:border-purple-500/50 transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Zap className="text-purple-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">AI Video Generation</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Turn text prompts or long videos into viral-ready shorts with built-in subtitles and magnetic hooks.
                                </p>
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-slate-900 aspect-video flex items-center justify-center">
                                    <img src="/ai-feature.png" alt="AI Gen" className="w-full h-full object-cover" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300">
                            <CardContent className="p-8 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Calendar className="text-blue-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">Smart Scheduler</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Plan your entire month in minutes. Drag and drop videos into the calendar and let us handle the posting.
                                </p>
                                <div className="mt-auto rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-4 border border-white/10">
                                    <div className="grid grid-cols-7 gap-1 opacity-60">
                                        {Array.from({ length: 14 }).map((_, i) => (
                                            <div key={i} className={`h-8 rounded-sm ${[2, 5, 8, 12].includes(i) ? 'bg-blue-500' : 'bg-white/5'}`} />
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:border-pink-500/50 transition-all duration-300">
                            <CardContent className="p-8 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Share2 className="text-pink-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">Multi-Platform Ready</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    One-click export to YouTube Shorts, Instagram Reels, TikTok, and even personalized video emails.
                                </p>
                                <div className="mt-auto flex flex-wrap gap-3">
                                    <Badge variant="secondary" className="bg-white/5 text-slate-300">YouTube</Badge>
                                    <Badge variant="secondary" className="bg-white/5 text-slate-300">Instagram</Badge>
                                    <Badge variant="secondary" className="bg-white/5 text-slate-300">TikTok</Badge>
                                    <Badge variant="secondary" className="bg-white/5 text-slate-300">Email Marketing</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section id="how-it-works" className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Go from idea to post <br /> <span className="text-purple-400 underline decoration-purple-500/40">in 3 simple steps.</span></h2>
                            <ul className="space-y-8">
                                <li className="flex gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Input your vision</h4>
                                        <p className="text-slate-400">Paste a link, upload a script, or just describe what you want the AI to create.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Review & Customize</h4>
                                        <p className="text-slate-400">Instantly generate titles, captions, and the video itself. Make quick tweaks in our editor.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Autoschedule</h4>
                                        <p className="text-slate-400">Choose your platforms and times. We'll handle the posting while you sleep.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full shadow-inner" />
                            <div className="relative rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
                                <div className="text-center">
                                    <PlayCircle className="w-20 h-20 text-purple-500 mx-auto mb-4 animate-pulse" />
                                    <p className="text-slate-500 font-mono text-xs uppercase tracking-tighter">AI Processing Pipeline Active</p>
                                    <div className="w-48 h-1 bg-white/5 rounded-full mt-4 mx-auto overflow-hidden">
                                        <div className="w-2/3 h-full bg-purple-500 animate-[loading_2s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 -z-10" />
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to automate <br /> your video growth?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join 5,000+ creators who are saving 20+ hours a week with Easy Shorts.</p>
                    <Button size="lg" className="h-14 px-10 bg-white text-slate-950 hover:bg-slate-200 rounded-full font-bold text-lg shadow-2xl">
                        Get Started Now — It's Free
                    </Button>
                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-slate-400"><CheckCircle2 className="w-4 h-4 text-green-500" /> No credit card required</div>
                        <div className="flex items-center gap-2 text-sm text-slate-400"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cancel anytime</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 underline-offset-4">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white fill-current" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">Easy Shorts</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                The world's first AI-powered short video generator and scheduler. Built for the modern creator.
                            </p>
                            <div className="flex gap-4">
                                <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                                <Instagram className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                                <Youtube className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Product</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-white transition-colors">AI Generator</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Scheduler</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Resources</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Creators Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-600 text-xs">
                            © 2026 Easy Shorts AI Inc. All rights reserved.
                        </p>
                        <div className="flex gap-8 text-xs text-slate-600">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
