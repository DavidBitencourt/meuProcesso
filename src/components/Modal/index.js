import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import 'date-fns';
import { format } from "date-fns";
import { MdClose } from "react-icons/md";
import LoadingStyled from "../Loading";
import {
  CardBoxStyled,
  ContainerStyled,
  Header,
  Title,
  ModalContent,
  OverflowStyled,
  PublicationContainerStyled,
  PublicationItemStyled,
  PublicationHeaderStyled,
  PublicationHeaderTextStyled,
  PublicationTextStyled
} from "./styles";

function Modal({ visibility, modalHandler, lastSnippets, resetLastSnippets }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(lastSnippets.length > 0) setLoading(false);
  }, [lastSnippets]);

  return (
    <ContainerStyled visibility={visibility}>
      <OverflowStyled
        onClick={() => {
          modalHandler(false);
          resetLastSnippets([]);
        }}
      />
      <CardBoxStyled>
        <Header>
          <Title>últimas publicações</Title>
          <MdClose
            onClick={() => { modalHandler(false); resetLastSnippets([]); }}
            style={{ fontSize: 25, color: "#707070", cursor: "pointer" }}
          />
        </Header>
        <ModalContent>
          <PublicationContainerStyled loading={loading}>
            {loading ? <LoadingStyled show={loading} label="Carregando..." center /> : (
              lastSnippets.map((process, index) => (
                  <PublicationItemStyled key={index}>
                    <PublicationHeaderStyled>
                      <PublicationHeaderTextStyled>
                        data de publicação: {format(new Date(process.data_publicacao), 'dd/MM/yyyy')}
                      </PublicationHeaderTextStyled>
                      <PublicationHeaderTextStyled>
                        código diário: {process.codigo_diario}
                      </PublicationHeaderTextStyled>
                    </PublicationHeaderStyled>
                    <PublicationTextStyled>
                      {process.recorte}
                    </PublicationTextStyled>
                </PublicationItemStyled>
                ))
              )}
            </PublicationContainerStyled>
        </ModalContent>
      </CardBoxStyled>
    </ContainerStyled>
  );
}

Modal.defaultProps = {
  visibility: false,
  modalHandler: false,
};

Modal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
};

export default Modal;
