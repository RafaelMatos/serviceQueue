import { AppointmentContextProvider } from '@/context/AppointmentContext'
import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin'] })
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppointmentContextProvider>
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      </AppointmentContextProvider>
    </QueryClientProvider>
  )
}
