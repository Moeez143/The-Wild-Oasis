import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  min-width: 0;

  @media (max-width: 1100px) {
    overflow-x: auto;
  }

  @media (max-width: 700px) {
    overflow: visible;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (min-width: 701px) and (max-width: 1100px) {
    min-width: 80rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (min-width: 701px) and (max-width: 1100px) {
    min-width: 80rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.2rem;
    padding: 1.6rem;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-md);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;

  @media (min-width: 701px) and (max-width: 1100px) {
    min-width: 80rem;
  }

  @media (max-width: 700px) {
    display: grid;
    gap: 1rem;
    margin: 0;
    padding: 1rem;
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const Cell = styled.div`
  min-width: 0;
  overflow-wrap: anywhere;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: minmax(7rem, 30%) minmax(0, 1fr);
    gap: 0.8rem;
    align-items: center;

    &::before {
      content: attr(data-label);
      color: var(--color-grey-500);
      font-weight: 600;
    }

    &[data-label=""] {
      display: block;
    }

    &[data-label=""]::before {
      display: none;
    }

    &[data-label="Actions"] {
      justify-items: end;
    }
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

// render props approach
function Body({ data, render }) {
  if (!data.length) return <Empty>No Data to show at moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

// children approach
// function Body({children}){
//   return <StyledBody>{children}</StyledBody>
// }

Table.Header = Header;
Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
