import Head from "next/head"
import styled from "styled-components"
import useSWR from "swr"

import Country from "../components/Country"

let url = "https://covid-193.p.rapidapi.com/statistics"

// Fetching data from a API - with useSWR
const fetcher = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "86bf3463b7mshd48a8642e3877b1p14f8c5jsn8fe7a3629fb2",
    },
  }).then((res) => res.json())

// Components
const Index = () => {
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <Wrapper>
        <div>loading...</div>
      </Wrapper>
    )

  //   console.log(data.response[67]) /* Latvia */
  // console.log(data.response[14]); /* Sweden */
  //   console.log(data.response[3]) /* USA */
  console.log(data.response) /* USA */

  return (
    <Wrapper>
      <Head>
        <title>Covid19 - Statistics</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="COVID19 statistics COVID-19 statistics"
        />
        <meta
          name="keywords"
          content="COVID19, COVID-19, covid19, covid-19, Covid19, Covid-19, Statistics, statistics, Sweden, sweden, Latvia, latvia, Latvija, latvija, Sverige, sverige, USA, usa"
        />
        <meta name="author" content="Janis Basis Basovs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
      </Head>

      <Main>
        <Country data={data.response} />
      </Main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Main = styled.main``
