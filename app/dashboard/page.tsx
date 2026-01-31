import { Zap, Calendar, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back!</h1>
                <p className="text-slate-500 text-lg">Manage your AI video generations and schedules below.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/dashboard/create" className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-purple-600/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col items-start cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="text-purple-600 w-6 h-6 fill-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Create New Short</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">Generate a viral video from text or script in seconds using our advanced AI.</p>
                    <div className="mt-auto flex items-center gap-2 text-purple-600 font-semibold group-hover:translate-x-1 transition-transform">
                        Get started <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>

                <div className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start cursor-pointer">
                    {/* ... (Calendar content) */}
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Calendar className="text-blue-600 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Content Calendar</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">Manage your scheduled posts and maintain a consistent presence across platforms.</p>
                    <div className="mt-auto flex items-center gap-2 text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                        View calendar <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                <div className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-pink-600/50 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 flex flex-col items-start cursor-pointer">
                    {/* ... (Mail content) */}
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Mail className="text-pink-600 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Email Campaigns</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">Track and manage your personalized video email distributions at scale.</p>
                    <div className="mt-auto flex items-center gap-2 text-pink-600 font-semibold group-hover:translate-x-1 transition-transform">
                        Campaign settings <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden relative shadow-2xl shadow-indigo-500/20">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Ready to go viral?</h2>
                        <p className="text-indigo-100/80 max-w-md">Our AI engine has been updated with the latest trends. Start generating shorts that capture attention.</p>
                    </div>
                    <Link href="/dashboard/create">
                        <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-indigo-900/20 whitespace-nowrap">
                            New Series +
                        </button>
                    </Link>
                </div>
                {/* Decorative background circle */}
                <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />
            </div>
        </div>
    )
}

