"use client"

import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { supabase } from "@/lib/supabase"

export function SyncUser() {
    const { isLoaded, isSignedIn, user } = useUser()

    useEffect(() => {
        const syncUserToSupabase = async () => {
            if (isLoaded && isSignedIn && user) {
                const { id, emailAddresses, fullName } = user
                const email = emailAddresses[0]?.emailAddress

                if (email) {
                    const { error } = await supabase
                        .from("users")
                        .upsert(
                            {
                                id: id,
                                email: email,
                                name: fullName || "User",
                            },
                            { onConflict: "id" }
                        )

                    if (error) {
                        console.error("Error syncing user to Supabase:", error.message)
                    } else {
                        console.log("User synced to Supabase successfully")
                    }
                }
            }
        }

        syncUserToSupabase()
    }, [isLoaded, isSignedIn, user])

    return null
}
