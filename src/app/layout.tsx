import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Semana Cliff',
  description: 'Where Nature Embraces You, and Hospitality Feels Like Home',
}

export default function HomeLayout ({
  children,
}:{
  children: React.ReactNode
}){

  return (
    <html lang="en">
      <body className="font-cormorant">
          <main>{children}</main>
      </body>
    </html>
  );
}