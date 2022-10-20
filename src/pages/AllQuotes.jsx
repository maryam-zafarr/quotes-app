import { useEffect } from 'react'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

const AllQuotes = () => {
  const {sendRequest, status, data: quotes, error} = useHttp(getAllQuotes, true)

  useEffect(() => {
   sendRequest()
  },[sendRequest])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (status === 'completed' && (!quotes || quotes.length === 0)) {
    return <NoQuotesFound />
  }

  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  )

}

export default AllQuotes