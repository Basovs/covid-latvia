import Head from "next/head";
import styled from "styled-components";
import useSWR from "swr";

// Fetching data from a API - with useSWR
// const fetcher = (...args) =>
//     fetch(...args, {
//         method: "GET",
//         headers: {
//             "x-rapidapi-host": "covid-193.p.rapidapi.com",
//             "x-rapidapi-key":
//                 "86bf3463b7mshd48a8642e3877b1p14f8c5jsn8fe7a3629fb2",
//         },
//     }).then(res => res.json());

// Logic
let choosenCountry = "latvia";
let url =
    "https://covid-193.p.rapidapi.com/statistics?country=" + choosenCountry;
const changeCountry = e => {
    const myValue = e.target.value;
    console.log("Country picked " + myValue);
    choosenCountry = myValue;
    url =
        "https://covid-193.p.rapidapi.com/statistics?country=" + choosenCountry;
    console.log("Your New url " + url);
};

export async function getServerSideProps() {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
                "86bf3463b7mshd48a8642e3877b1p14f8c5jsn8fe7a3629fb2",
        },
    });
    const data = await res.json();

    return {
        props: data,
    };
}

// Components
export default function Home({ data }) {
    // const { data, error } = useSWR(url, fetcher);
    // if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <Wrapper>
                <div>loading...</div>
            </Wrapper>
        );
    // console.log(props.data); <<<<<--------------------------------------------------------------------------- console.log()
    // console.log(data);
    return (
        <Wrapper>
            <Head>
                <title>Covid-{data.country}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <h1>Covid - {data.country}</h1>
                <h2>Atjaunots - {data.day}</h2>
                <br />
                <select
                    name="pickCountry"
                    id="pickCountry"
                    onChange={changeCountry}
                >
                    <option value="latvia">Latvia</option>
                    <option value="sweden">Sweden</option>
                    <option value="usa">USA</option>
                </select>
                <h3>Līdz šim apstiprināti gadījumi</h3>
                <Code>{data.cases.total}</Code>
                <h3>Nomiruši</h3>
                <Code>{data.deaths.total}</Code>
                <h3>Izveseļojušies</h3>
                <Code>{data.cases.recovered}</Code>
                <h3>Vēl slimo</h3>
                <Code>{data.cases.active}</Code>
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
    font-size: 1.5rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;
