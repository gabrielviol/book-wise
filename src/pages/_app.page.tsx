import { wrapper } from "@/store";
import { globalStyles } from "@/styles/global";
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app";

globalStyles()

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default wrapper.withRedux(MyApp);