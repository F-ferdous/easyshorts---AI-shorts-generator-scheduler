import { UserButton, SignedIn } from "@clerk/nextjs"
import { Layout, Zap, Calendar, Mail } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
            <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl h-16 flex items-center justify-between px-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white fill-current" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Easy Shorts Dashboard</span>
                </div>
                <UserButton afterSignOutUrl="/" />
            </nav>

            <main className="container mx-auto px-4 py-12">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-2 text-white">Welcome back!</h1>
                    <p className="text-slate-400">Manage your AI video generations and schedules below.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                            <Zap className="text-purple-500 w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Create New Short</h3>
                        <p className="text-slate-500 text-sm">Generate a viral video from text or script in seconds.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                            <Calendar className="text-blue-500 w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Content Calendar</h3>
                        <p className="text-slate-500 text-sm">Manage your scheduled posts across all platforms.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                            <Mail className="text-pink-500 w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Email Campaigns</h3>
                        <p className="text-slate-500 text-sm">Track your personalized video email distributions.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
