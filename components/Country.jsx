import styled from "styled-components"
import Head from "next/head"

class Country extends React.Component {
  state = {
    country: "latvia",
  }

  render() {
    // const dataObj = JSON.parse(this.props.data.response)
    const data = this.props.data

    // console.log("Before data")
    // console.log(data[112].country) /* Latvia */
    // console.log(data[25].country) /* Sweden */
    // console.log(data[1].country) /* USA */
    // console.log(data[19].country) /* Visaa pasaulee */

    let statistics = ""
    if (this.state.country === "latvia") {
      statistics = (
        <div>
          <Head>
            <title>Covid19 - {data[112].country}</title>
          </Head>
          <h1>Covid19 - {data[112].country}</h1>
          <p>Atjaunots - {data[112].day}. Statistika atjaunojas 1x dienā.</p>
          <article></article>

          <Article>
            <h2>Līdz šim apstiprināti gadījumi</h2>
            <Code>{data[112].cases.total}</Code>
          </Article>

          <Article>
            <h2>Miruši</h2>
            <Code>{data[112].deaths.total}</Code>
          </Article>

          <Article>
            <h2>Izveseļojušies</h2>
            <Code>{data[112].cases.recovered}</Code>
          </Article>

          <Article>
            <h2>Vēl slimo</h2>
            <Code>{data[112].cases.active}</Code>
          </Article>

          <Article>
            <h2>Miruši</h2>
            <Code>{data[112].deaths.new}</Code>
          </Article>
        </div>
      )
    } else if (this.state.country === "sweden") {
      statistics = (
        <div>
          <Head>
            <title>Covid19 - {data[25].country}</title>
          </Head>
          <h1>Covid19 - {data[25].country}</h1>
          <p>Atjaunots - {data[25].day}. Statistika atjaunojas 1x dienā.</p>

          <Article>
            <h2>Līdz šim apstiprināti gadījumi</h2>
            <Code>{data[25].cases.total}</Code>
          </Article>
          <Article>
            <h2>Miruši</h2>
            <Code>{data[25].deaths.total}</Code>
          </Article>
          <Article>
            <h2>Izveseļojušies</h2>
            <Code>{data[25].cases.recovered}</Code>
          </Article>
          <Article>
            <h2>Vēl slimo</h2>
            <Code>{data[25].cases.active}</Code>
          </Article>
          <Article>
            <h2>Miruši</h2>
            <Code>{data[25].deaths.new}</Code>
          </Article>
        </div>
      )
    } else if (this.state.country === "usa") {
      statistics = (
        <div>
          <Head>
            <title>Covid19 - {data[1].country}</title>
          </Head>
          <h1>Covid19 - {data[1].country}</h1>
          <p>Atjaunots - {data[1].day}. Statistika atjaunojas 1x dienā.</p>

          <Article>
            <h2>Līdz šim apstiprināti gadījumi</h2>
            <Code>{data[1].cases.total}</Code>
          </Article>
          <Article>
            <h2>Miruši</h2>
            <Code>{data[1].deaths.total}</Code>
          </Article>
          <Article>
            <h2>Izveseļojušies</h2>
            <Code>{data[1].cases.recovered}</Code>
          </Article>
          <Article>
            <h2>Vēl slimo</h2>
            <Code>{data[1].cases.active}</Code>
          </Article>
          <Article>
            <h2>Miruši</h2>
            <Code>{data[1].deaths.new}</Code>
          </Article>
        </div>
      )
    }

    return (
      <Statistics state={this.state}>
        {statistics}
        <Label htmlFor="pickCountry">Izvēlies valsti</Label>
        <Select
          name="pickCountry"
          id="pickCountry"
          onChange={(e) => {
            this.setState(
              { country: e.target.value }
              // console.log(e.target.value)
            )
          }}
        >
          <option value="latvia">Latvia</option>
          <option value="sweden">Sweden</option>
          <option value="usa">USA</option>
        </Select>
      </Statistics>
    )
  }
}

export default Country
const Statistics = styled.div`
  p {
    color: #4b4b4b;
  }
`
const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 10px 0 18px 0.75rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`

const Code = styled.div`
  display: inline-block;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.3rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`
const Label = styled.label`
  font-weight: 500;
`
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
`
