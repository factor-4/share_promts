import "@/styles/globals.css"

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