import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Section = styled.section`
  width: 80%;
  max-width: 600px;
  margin: 1rem auto;
`;

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  background-color: #f7f7f7;
  color: #777;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  margin: 1.5rem 0 0.6rem;

  & button{
    padding: .4rem 1.5rem;
    background-color: #f8f8f8;
    color: #777;
    border-radius: 8px;

    &.primary{
      background-color: var(--primary-color);
      color: var(--white);
    }
  }
}

`;

export const NewContext = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;

  & .top {
    display: flex;
    justify-content: space-between;
    color: #555;
    font-size: 0.9rem;

    & button {
      font-size: 1.25rem;
    }
  }

  & .context-form {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.5rem;
    height: 0;
    overflow: hidden;
    transition: height 4s ease-in-out;
  }

  & .context-form.show {
    height: auto;
  }
  & input {
    width: 60%;
    height: 40px;
    border-radius: 4px;
    background-color: #f7f7f7;
    font-size: 14px;
    display: block;
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid var(--primary-color);

    &:focus {
      outline: none;
      border-bottom: 2px solid var(--primary-color);
    }
  }

  & button {
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 0.9rem;
    border-radius: 4px;
  }
`;

export const FilterContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  column-gap: 0.5rem;
  padding: 1rem 0;
`;

export const FilterChip = styled.div`
  border: 2px solid #888;
  font-size: 14px;
  background-color: #f7f7f7;
  color: #444;
  padding: 4px 10px;
  display: grid;
  grid-template-columns: auto 1.2rem;
  align-items: center;
  column-gap: 8px;
  border-radius: 1.5rem;

  & svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;

  & label {
    font-size: 0.9rem;
  }
  & select {
    background-color: #f7f7f7;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    color: #555;
    font-size: 0.9rem;
  }
`;

export const ContextWrapper = styled.div`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  & div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 0.5rem;
  }
`;

export const ContextInput = styled.div`
  display: grid;
  grid-template-columns: auto 1rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 5px 12px;
  font-size: 0.9rem;
`;

export const NextItemContainer = styled.div`
  background-color: var(--white);
  margin: 1rem 0;
  border: 1px solid #efefef;
  box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.15),
    2px 0 3px -2px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 0.7rem 1rem;
`;

export const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 1rem;
  margin-bottom: 0.2rem;
`;

export const Name = styled.h2`
  font-size: 0.975rem;
  color: #444;
  font-weight: 600;
  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-size: 0.925rem;
  color: #555;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const Priority = styled.div`
  font-size: 0.6rem;
`;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 0.3rem;
  font-size: 0.8rem;
  padding: 1px 8px;
  & .dot {
    background-color: #ddd;
    width: 4px;
    height: 4px;
    border-radius: 6px;
  }
  &.completed {
    background-color: var(--completed-light);
    color: var(--completed);

    & .dot {
      background-color: var(--completed);
    }
  }

  &.inprogress {
    background-color: var(--in-progress-light);
    color: var(--in-progress);

    & .dot {
      background-color: var(--in-progress);
    }
  }

  &.pending {
    background-color: var(--pending-light);
    color: var(--pending);

    & .dot {
      background-color: var(--pending);
    }
  }
`;

export const DueDate = styled.div`
  margin-top: 0.7rem;
  display: inline-flex;
  align-items: center;
  column-gap: 0.3rem;
  font-size: 0.725rem;
  background-color: var(--pending-light);
  padding: 2px 8px;
  border-radius: 1rem;
  color: #555;
`;
