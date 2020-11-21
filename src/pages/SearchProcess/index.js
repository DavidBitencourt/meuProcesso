import React, { useState, useEffect } from "react";
import 'date-fns';
import { format } from "date-fns";
import InputStyled from "../../components/Input";
import InputSelectStyled from "../../components/InputSelect";
import HeaderStyled from "../../components/Header";
import LoadingStyled from "../../components/Loading";
import AnimationLottie from "../../components/AnimationLottie";
import emptyAnimation from "../../assets/animations/empty.json";
import errorAnimation from "../../assets/animations/error.json";
import axios from "axios";
import dataTribunals from "../../utils/data.json";
import {
  Container,
  ContainerSearchStyled,
  CountProcessTitleStyled,
  ContainerResultStyled,
  TableResultStyled,
  TableBodyStyled,
  TableHeaderStyled,
  TableRowStyled,
  TableColumnStyled,
  EmptyBoxStyled,
  TextEmptyStyled

} from "./styles";

function Home() {
  const [searchMessage, setSearchMessage] = useState("Nenhum resultado.");
  const [searchProcess, setSearchProcess] = useState("");
  const [tribunals, setTribunals] = useState(dataTribunals[0].label);
  const [processes, setProcesses] = useState([]);
  const [processesCount, setProcessesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchProcessApi = async (processWord, tribunal) => {
    if(!processWord) {
      setSearchMessage("Nenhum resultado.");
      setProcessesCount(0);
      setProcesses([]);
      return false;
    }

    setLoading(true);

    const obj = {
      q: [processWord],
      tribunals: [tribunal]
    }

    tribunal === "Todos" && delete obj.tribunals;

    await axios.post("https://challenge.seuprocesso.com/api/search/", obj).then(response => {
      setProcesses(response.data.processes);
      setProcessesCount(response.data.processes.length);
      setError(false);
      if(response.data.processes.length < 1) setSearchMessage("Nenhum resultado.");
    }).catch(error => {
      setProcessesCount(0);
      setProcesses([]);
      setError(true);
      setSearchMessage("No momento não foi possível procurar o seu processo, tente mais tarde.")
    });
    setLoading(false);
  }

  useEffect(() => {
    searchProcessApi(searchProcess, tribunals);
  }, [searchProcess, tribunals]);

  return (
    <>
      <HeaderStyled backPage/>
      <Container>
      <ContainerSearchStyled>
          <InputStyled 
              width={58}
              label="Buscar Processo"
              name="searchProcess"
              onChange={(value) => {
                setSearchProcess(value.searchProcess);
              }}
              value={searchProcess}
          />
          <InputSelectStyled
            width={40}
            label="Filtrar por tribunal"
            name="tribunals"
            values={dataTribunals}
            valueChange={(value) => {
              setTribunals(value.tribunals);
            }}
            changeValue={tribunals}
          />
        </ContainerSearchStyled>
        <CountProcessTitleStyled loading={loading} processesCount={processesCount}>
          {processesCount > 1 ? processesCount + " processos encontrados" : processesCount + " processo encontrado"} 
        </CountProcessTitleStyled>
        <ContainerResultStyled>
          {loading ? <LoadingStyled show={loading} /> : (
            processes.length > 0 ? (
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
            ) : (
              <EmptyBoxStyled>
                <AnimationLottie
                  height={error ? 80 : 120}
                  width={error ? 80 : 120}
                  animationData={error ? errorAnimation : emptyAnimation}
                  borderRadius={100}
                />
                <TextEmptyStyled>{searchMessage}</TextEmptyStyled>
              </EmptyBoxStyled>
            )
          )} 
        </ContainerResultStyled>
      </Container>
    </>
  );
}

export default Home;
