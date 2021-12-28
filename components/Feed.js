import Stories from "./Stories"
import Posts from "./Posts"
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"
import {SessionProvider, signOut, useSession} from "next-auth/react"


function Feed() {


    const {data: session} = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 
        md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            

            {/*Content*/}
            <section className="col-span-2">
                {/*Stories*/}
                <div className={`${!session && "!hidden"}`}>
                    <Stories />
                </div>
                


                {/*Posts*/}
                <Posts />
            </section>
                


            {/*Side Bar*/}
            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                    <div className=" fixed top-20">
                        {/*Mini Profile*/}
                        <MiniProfile/>
                        {/*Suggestions*/}
                        <Suggestions/>
                    </div>
                </section>
            )}
            

        </main>
    )
}

export default Feed
