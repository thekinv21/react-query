import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		//* FOR HTTP GET REQUESTS

		queries: {
			// don't refetch when i change tab and come again
			refetchOnWindowFocus: false,
		},

		//* FOR HTTP POST PUT PATCH DELETE REQUESTS

		mutations: {},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
)
