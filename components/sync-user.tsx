"use client"

import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { supabase } from "@/lib/supabase"

export function SyncUser() {
    const { isLoaded, isSignedIn, user } = useUser()

    useEffect(() => {
        const syncUser = async () => {
            if (isLoaded && isSignedIn && user) {
                const { id, fullName, primaryEmailAddress } = user
                const email = primaryEmailAddress?.emailAddress

                // Matching exactly with the "users" table columns:
                // id, name, email, credits
                const { error } = await supabase
                    .from("users")
                    .upsert(
                        {
                            id: id,
                            name: fullName || "User",
                            email: email || "",
                            credits: "0", // Defaulting to 0 as string per table definition
                        },
                        { onConflict: "id" }
                    )

                if (error) {
                    console.error("User Sync Status: Failed", error.message)
                } else {
                    console.log("User Sync Status: Success")
                }
            }
        }

        syncUser()
    }, [isLoaded, isSignedIn, user])

    return null
}
