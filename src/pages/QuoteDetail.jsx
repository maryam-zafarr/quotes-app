import React, { useEffect } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  const { id } = params;

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (!quote.text) {
    return <p>No quote found.</p>
  }

  return (
    <div>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Routes>
        <Route path='/'element= {
          <div className="centered">
            <Link className="btn--flat" to='comments' >
              Load Comments
            </Link>
          </div>
       } />
      </Routes>
      <Outlet />
    </div>
  );
};

export default QuoteDetail;
