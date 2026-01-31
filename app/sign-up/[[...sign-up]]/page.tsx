import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
            <SignUp
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "bg-slate-900 border border-white/10 shadow-2xl",
                        headerTitle: "text-white font-bold",
                        headerSubtitle: "text-slate-400",
                        socialButtonsBlockButton: "bg-slate-800 border-white/5 text-white hover:bg-slate-700 transition-colors text-sm",
                        formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-sm normal-case",
                        formFieldLabel: "text-slate-300",
                        formFieldInput: "bg-slate-800 border-white/5 text-white focus:border-purple-500 transition-colors",
                        footerActionText: "text-slate-400",
                        footerActionLink: "text-purple-400 hover:text-purple-300",
                        identityPreviewText: "text-white",
                        identityPreviewEditButtonIcon: "text-purple-400"
                    },
                    variables: {
                        colorPrimary: "#9333ea",
                        colorTextOnPrimaryBackground: "white"
                    }
                }}
            />
        </div>
    );
}
