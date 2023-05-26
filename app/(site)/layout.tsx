"use client"
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import webTheme from '@/app/(site)/theme/theme';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from "@/public/logo.jpg"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import styles from "./styles.module.scss"
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import Footer from './component/Footer';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (

    <ThemeProvider theme={webTheme}>
      <html lang="zh-Hant">
        <body className={inter.className}>
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Link href={'/'}>
            <Image
              src={logo}
              alt="Picture of logo"
              width={250}
              height={250}
            />
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <AppBar position="static" sx={{ backgroundColor: "black", flexDirection: "row", justifyContent: "center", width: "90%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%" }}>
                <a href="#home" className={styles.text}>首頁</a>
                <a href="#home" className={styles.text}>關於我們</a>
                <a href="#home" className={styles.text}>部落格文章</a>
                <a href="#home" className={styles.text}>動作資料庫</a>
                <a href="#home" className={styles.text}>教練資料</a>
                <a href="#home" className={styles.text}>聯絡我們</a>

              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "20%" }}>
                <IconButton aria-label="instagram">
                  <InstagramIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                </IconButton>
                <IconButton aria-label="facebook">
                  <FacebookIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                </IconButton>
                <IconButton aria-label="youtube">
                  <YouTubeIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                </IconButton>
              </Box>
            </AppBar>
          </Box>

          {children}
          <Footer/>
        </body>
      </html>
    </ThemeProvider>
  )
}