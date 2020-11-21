import React, { useState, useEffect } from "react";
import 'date-fns';
import { format } from "date-fns";
import InputStyled from "../../components/Input";
import HeaderStyled from "../../components/Header";
import LoadingStyled from "../../components/Loading";
import axios from "axios";
import {
  Container,
  CountProcessTitleStyled,
  ContainerResultStyled,
  TableResultStyled,
  TableBodyStyled,
  TableHeaderStyled,
  TableRowStyled,
  TableColumnStyled

} from "./styles";

function Home() {
  const [searchProcess, setSearchProcess] = useState("");
  const [processes, setProcesses] = useState([]);
  const [processesCount, setProcessesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const searchProcessApi = async word => {
    setLoading(true);
    const obj = {
      q: [word] 
    }
    await axios.post("https://challenge.seuprocesso.com/api/search/", obj).then(response => {
      setProcesses(response.data.processes);
      setProcessesCount(response.data.processes.length)
    }).catch(error => {
      setProcesses([]);
    });
    setLoading(false);
  }

  useEffect(() => {
    searchProcess ? searchProcessApi(searchProcess) : setProcesses([]);
  }, [searchProcess]);
  
  return (
    <>
      <HeaderStyled />
      <Container>
        <InputStyled 
            width={50}
            label="Buscar Processo"
            name="searchProcess"
            onChange={(value) => {
              setSearchProcess(value.searchProcess);
            }}
            value={searchProcess}
        />
        <CountProcessTitleStyled loading={loading} processesCount={processesCount}>
          {processesCount} processos encontrados
        </CountProcessTitleStyled>
        <ContainerResultStyled>
          {loading ? <LoadingStyled show={loading} /> : (
            <TableResultStyled>
              <TableBodyStyled>
                <TableRowStyled>
                    <TableHeaderStyled>Número do processo</TableHeaderStyled>
                    <TableHeaderStyled>Data (última publicação)</TableHeaderStyled>
                    <TableHeaderStyled>Tribunal</TableHeaderStyled>
                </TableRowStyled>
                {processes.map((process) => (
                  <TableRowStyled key={process.nup} onClick={() => alert("teste")}>
                    <TableColumnStyled>{process.nup}</TableColumnStyled>
                    <TableColumnStyled>{format(new Date(process.last_pub), 'dd/MM/yyyy')}</TableColumnStyled>
                    <TableColumnStyled>{process.tribunal}</TableColumnStyled>
                  </TableRowStyled>
                ))}
              </TableBodyStyled>
            </TableResultStyled>
          )} 
        </ContainerResultStyled>
      </Container>
    </>
  );
}

export default Home;
