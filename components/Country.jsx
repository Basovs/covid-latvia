import styled from "styled-components";
import Head from "next/head";

class Country extends React.Component {
  state = {
    country: "latvia",
  };

  render() {
    // const dataObj = JSON.parse(this.props.data.response)
    const data = this.props.data;

    // console.log("Before data")
    // console.log(data[67].country) /* Latvia */
    // console.log(data[14].country) /* Sweden */
    // console.log(data[3].country) /* USA */

    let statistics = "";
    if (this.state.country === "latvia") {
      statistics = (
        <div>
          <Head>
            <title>Covid19 - {data[67].country}</title>
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="robots" content="index" />
          </Head>
          <h1>Covid19 - {data[67].country}</h1>
          <p>Atjaunots - {data[67].day}. Statistika atjaunojas 1x dienā.</p>
          <article></article>

          <Article>
            <h2>Līdz šim apstiprināti gadījumi</h2>
            <Code>{data[67].cases.total}</Code>
          </Article>

          <Article>
            <h2>Miruši</h2>
            <Code>{data[67].deaths.total}</Code>
          </Article>

          <Article>
            <h2>Izveseļojušies</h2>
            <Code>{data[67].cases.recovered}</Code>
          </Article>

          <Article>
            <h2>Vēl slimo</h2>
            <Code>{data[67].cases.active}</Code>
          </Article>
        </div>
      );
    } else if (this.state.country === "sweden") {
      statistics = (
        <div>
          <Head>
            <title>Covid19 - {data[14].country}</title>
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="robots" content="index" />
          </Head>
          <h1>Covid19 - {data[14].country}</h1>
          <p>Atjaunots - {data[14].day}. Statistika atjaunojas 1x dienā.</p>

          <Article>
            <h2>Līdz šim apstiprināti gadījumi</h2>
            <Code>{data[14].cases.total}</Code>
          </Article>
          <Article>
            <h2>Miruši</h2>
            <Code>{data[14].deaths.total}</Code>
          </Article>
          <Article>
            <h2>Izveseļojušies</h2>
            <Code>{data[14].cases.recovered}</Code>
          </Article>
          <Article>
            <h2>Vēl slimo</h2>
            <Code>{data[14].cases.active}</Code>
          </Article>
        </div>
      );
    } else if (this.state.country === "usa") {
      statistics = (
        <div>
          <Head>
            <title>Covid19 - {data[3].country}</title>
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="robots" content="index" />
          </Head>
          <h1>Covid19 - {data[3].country}</h1>
          <p>Atjaunots - {data[3].day}. Statistika atjaunojas 1x dienā.</p>

          <Article>
            <h2>Līdz šim apstiprināti gadījumi</h2>
            <Code>{data[3].cases.total}</Code>
          </Article>
          <Article>
            <h2>Miruši</h2>
            <Code>{data[3].deaths.total}</Code>
          </Article>
          <Article>
            <h2>Izveseļojušies</h2>
            <Code>{data[3].cases.recovered}</Code>
          </Article>
          <Article>
            <h2>Vēl slimo</h2>
            <Code>{data[3].cases.active}</Code>
          </Article>
        </div>
      );
    }

    return (
      <Statistics state={this.state}>
        {statistics}
        <Label htmlFor="pickCountry">Izvēlies valsti</Label>
        <Select
          name="pickCountry"
          id="pickCountry"
          onChange={e => {
            this.setState(
              { country: e.target.value }
              // console.log(e.target.value)
            );
          }}
        >
          <option value="latvia">Latvia</option>
          <option value="sweden">Sweden</option>
          <option value="usa">USA</option>
        </Select>
      </Statistics>
    );
  }
}

export default Country;
const Statistics = styled.div`
  p {
    color: #4b4b4b;
  }
`;
const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 10px 0 18px 0.75rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Code = styled.div`
  display: inline-block;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.3rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
const Label = styled.label`
  font-weight: 500;
`;
const Select = styled.select`
  outline: none;
  inline-size: 100%;
  background: #f3f3f3;
  border-radius: 5px;
  border: none;
  padding: 0.75rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  option {
    cursor: pointer;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
