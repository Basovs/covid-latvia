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
        headers: {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":
                "86bf3463b7mshd48a8642e3877b1p14f8c5jsn8fe7a3629fb2",
        },
    }).then(res => res.json());

export default function Home() {
    const url =
        "https://covid-19-data.p.rapidapi.com/country?format=json&name=latvia";

    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    console.log(data[0].deaths);
    return (
        <Wrapper>
            <Head>
                <title>Covid-Latvia</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <h1>Covid Latvia</h1>
                <h2>Līdz šim apstiprināti gadījumi</h2>
                <Code>{data[0].confirmed}</Code>
                <h2>Nāves atgadījumi</h2>
                <Code>{data[0].deaths}</Code>
                <h2>Izveseļojušies</h2>
                <Code>{data[0].recovered}</Code>
                <h2>Vēl slimo</h2>
                <Code>
                    {data[0].confirmed - (data[0].recovered + data[0].deaths)}
                </Code>
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
