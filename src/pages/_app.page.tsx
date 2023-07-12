import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${nunito.variable}`}
    >
      <Component {...pageProps} />
    </div>
  )
}