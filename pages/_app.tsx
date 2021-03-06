import Footer from '@components/custom/Footer'
import UserIdleModal from '@components/custom/modals/UserIdleModal'
import NavBar from '@components/generic/wizards/NavBar'
import useAuthentication from '@hooks/generic/useAuthentication'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/globalStyle'
import { navPublic,navPrivate } from '../constants'
import useUserInteractionTracker from '../hooks/generic/useUserInteractionTracker'
import useStore from '../redux/store'
import theme from '../theme'
import Auth from '@components/custom/Auth'
import { ApolloProvider } from '@apollo/client'
import client from '../graphQL';
export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  const [open, setOpen] = useState<boolean>(false)
  // useEffect(()=>{
  //   console.log('isActive',isActive)
  // },[isActive])
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
      <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Auth>
        <Component {...pageProps} />
        </Auth>
       <Footer/>
      </ThemeProvider>
      </PersistGate>
      </Provider>
      </ApolloProvider>
    </>
  )
}
