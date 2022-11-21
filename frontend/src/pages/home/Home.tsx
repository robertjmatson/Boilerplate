import React from 'react';
import { Button, Typography } from "@mui/material"
import { CustomButton } from "../../design/components/buttons"
import { useState, useEffect } from 'react'


import { useQuery, useMutation } from '@tanstack/react-query'

import NewsService from "../../utils/services/newsapi"
import News from '../../utils/types/news';

export function Home() {

    return (
    <>
        <Typography variant="h2">
            Home
        </Typography>
        <Notelist3 />
    </>
    );
}


class connectionExample extends React.Component {
    componentDidMount() {
        const apiURL = 'http://127.0.0.1:8000/api/';
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    render() {
        return <h1>hello</h1>;
    }
}



function Notelist3() {
    const [getId, setGetId] = useState("");
    const [getTitle, setGetTitle] = useState("");
  
    const [getResult, setGetResult] = useState<string | null>(null);
  
    const fortmatResponse = (res: any) => {
      return JSON.stringify(res, null, 2);
    };
  
    const { isLoading: isLoadingNews, refetch: getAllNews } = useQuery<News[], Error>(
      ['query-tutorials'],
      async () => {
        return await NewsService.findAll();
      },
      {
        enabled: false,
        onSuccess: (res) => {
          setGetResult(fortmatResponse(res));
        },
        onError: (err: any) => {
          setGetResult(fortmatResponse(err.response?.data || err));
        },
      }
    );
  
    useEffect(() => {
      if (isLoadingNews) setGetResult("loading...");
    }, [isLoadingNews]);
  
    function getAllData() {
      try {
        getAllNews();
      } catch (err) {
        setGetResult(fortmatResponse(err));
      }
    }
  
    return (
      <>
      {getResult && (
              <div className="alert alert-secondary mt-2" role="alert">
                <pre>{getResult}</pre>
              </div>
            )}
  
  
      </>
    )
  }