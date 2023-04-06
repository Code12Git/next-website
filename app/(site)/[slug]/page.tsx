import { getPage } from "@component/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props={
    params:{
        slug:string
    }
}


export default async function Page({params}:Props){
    const page=await getPage(params.slug)

    return(
        <div><h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
       <div className="bg-gradient-to-r from-orange-600 via-red-400 to-purple-500 bg-clip-text text-transparent text-lg text-gray-700 mt-10 font-serif" >
        <PortableText value={page.content} />
        </div>

        </div>
    )
}