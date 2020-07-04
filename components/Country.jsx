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
            <title>Covid-{data[67].country}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>Covid - {data[67].country}</h1>
          <h2>Atjaunots - {data[67].day}</h2>
          <p>Statistika atjaunojas 1x dienā.</p>
          <h3>Līdz šim apstiprināti gadījumi</h3>
          <Code>{data[67].cases.total}</Code>
          <h3>Miruši</h3>
          <Code>{data[67].deaths.total}</Code>
          <h3>Izveseļojušies</h3>
          <Code>{data[67].cases.recovered}</Code>
          <h3>Vēl slimo</h3>
          <Code>{data[67].cases.active}</Code>
        </div>
      );
    } else if (this.state.country === "sweden") {
      statistics = (
        <div>
          <Head>
            <title>Covid-{data[14].country}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>Covid - {data[14].country}</h1>
          <h2>Atjaunots - {data[14].day}</h2>
          <p>Statistika atjaunojas 1x dienā.</p>
          <h3>Līdz šim apstiprināti gadījumi</h3>
          <Code>{data[14].cases.total}</Code>
          <h3>Miruši</h3>
          <Code>{data[14].deaths.total}</Code>
          <h3>Izveseļojušies</h3>
          <Code>{data[14].cases.recovered}</Code>
          <h3>Vēl slimo</h3>
          <Code>{data[14].cases.active}</Code>
        </div>
      );
    } else if (this.state.country === "usa") {
      statistics = (
        <div>
          <Head>
            <title>Covid-{data[3].country}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>Covid - {data[3].country}</h1>
          <h2>Atjaunots - {data[3].day}</h2>
          <p>Statistika atjaunojas 1x dienā.</p>
          <h3>Līdz šim apstiprināti gadījumi</h3>
          <Code>{data[3].cases.total}</Code>
          <h3>Miruši</h3>
          <Code>{data[3].deaths.total}</Code>
          <h3>Izveseļojušies</h3>
          <Code>{data[3].cases.recovered}</Code>
          <h3>Vēl slimo</h3>
          <Code>{data[3].cases.active}</Code>
        </div>
      );
    }

    return (
      <div state={this.state}>
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
        {statistics}
      </div>
    );
  }
}

export default Country;

const Code = styled.div`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.5rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Select = styled.select`
  inline-size: 100%;
  background: #fafafa;
  border-radius: 5px;
  border: none;
  padding: 0.75rem;
  font-size: 1.5rem;
  cursor: pointer;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  option {
    cursor: pointer;
    border: none;
  }
`;
