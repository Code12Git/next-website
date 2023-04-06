import '../globals.css'

export const metadata = {
  title: 'My Site!',
  description: 'Generated using Nextjs and sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}