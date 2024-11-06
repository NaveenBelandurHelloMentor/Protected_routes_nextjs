export const metadata = {
  title: 'Protected Routes',
  description: 'Protected Routes',
}

import NavBar from "./Component/NavBar/NavBar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}
