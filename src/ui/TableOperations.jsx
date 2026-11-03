import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  min-width: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default TableOperations;
