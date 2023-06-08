import './globals.css'
import Header from './component/Naverbar'
import Footer from './component/Footer';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'weightliftingcollege',
  icons:{
    icon: 'logo.jpg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <html lang="zh-Hant">
        
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>

  )
}
