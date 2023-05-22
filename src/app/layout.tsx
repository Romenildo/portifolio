import './globals.css'

export const metadata = {
  title: 'Romenildo',
  description: 'Portifolio Romenildo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
