import "@/styles/globals.css"

import Nav from "@/components/Nav"
import Provider from "@/components/Provider"


export const metadata = {
    title: "Promtdunia",
    description: "Discover & share AI promts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient">

                </div>

            </div>
            <main className='app'>
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout