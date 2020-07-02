import Head from "next/head";
import styled from "styled-components";
import useSWR from "swr";

// fetch("https://covid-19-data.p.rapidapi.com/country?format=json&name=latvia", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "86bf3463b7mshd48a8642e3877b1p14f8c5jsn8fe7a3629fb2"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

const fetcher = (...args) =>
    fetch(...args, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
                "86bf3463b7mshd48a8642e3877b1p14f8c5jsn8fe7a3629fb2",
        },
    }).then(res => res.json());

export default function Home() {
    const url = "https://covid-193.p.rapidapi.com/statistics?country=latvia";

    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    // console.log(data.response[0]);
    return (
        <Wrapper>
            <Head>
                <title>Covid-{data.response[0].country}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <h1>Covid - {data.response[0].country}</h1>
                <h2>Atjaunots - {data.response[0].day}</h2>
                <br />
                <h3>Līdz šim apstiprināti gadījumi</h3>
                <Code>{data.response[0].cases.total}</Code>
                <h3>Nomiruši</h3>
                <Code>{data.response[0].deaths.total}</Code>
                <h3>Izveseļojušies</h3>
                <Code>{data.response[0].cases.recovered}</Code>
                <h3>Vēl slimo</h3>
                <Code>{data.response[0].cases.active}</Code>
            </Main>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Main = styled.main`
    text-align: center;
`;
const Code = styled.div`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 2rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;
