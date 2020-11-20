import React, { useState, useEffect } from "react";
import InputStyled from "../../components/Input";
import HeaderStyled from "../../components/Header";
import axios from "axios";
import {
  Container,
  TableResultStyled,
  TableBodyStyled,
  TableHeaderStyled,
  TableRowStyled,
  TableColumnStyled

} from "./styles";

function Home() {
  const [searchProcess, setSearchProcess] = useState("");
  const [processes, setProcesses] = useState([]);
  // const [loading, setLoading] = useState(true);

  const searchProcessApi = async word => {
    const obj = {
      q: [word] 
    }
    await axios.post("https://challenge.seuprocesso.com/api/search/", obj, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => {
      setProcesses(response.data.processes);
    }).catch(error => {
      setProcesses([]);
    });
  }

  useEffect(() => {
    searchProcess && searchProcessApi(searchProcess);
  }, [searchProcess]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  // }, []);

  return (
    <>
      {/* {loading && <Loading show={loading} />} */}
      <HeaderStyled />
      <Container>
        <InputStyled 
            width={45}
            label="Buscar Processo"
            name="searchProcess"
            onChange={(value) => {
              setSearchProcess(value.searchProcess);
            }}
            value={searchProcess}
        />
        <TableResultStyled>
            <TableBodyStyled>
              <TableRowStyled>
                  <TableHeaderStyled>número do processo</TableHeaderStyled>
                  <TableHeaderStyled>data do processo</TableHeaderStyled>
                  <TableHeaderStyled>Tribunal</TableHeaderStyled>
              </TableRowStyled>
              {/* {data.map((item) => ( */}
                <TableRowStyled className="row-table">
                  <TableColumnStyled>00022287520138260362</TableColumnStyled>
                  <TableColumnStyled>2019-06-26</TableColumnStyled>
                  <TableColumnStyled>
                    TJSP
                  </TableColumnStyled>
                </TableRowStyled>
              {/* ))} */}
            </TableBodyStyled>
          </TableResultStyled>
      </Container>
    </>
  );
}

export default Home;
