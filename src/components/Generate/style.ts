import styled from "@emotion/styled";

export const Base = styled.div`
  display: inline-flex;
  height: 1.5rem;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  color: var(--Text-text-muted, #64748B);
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;

  border-radius: var(--XS, 0.5rem);
  border: 1px solid var(--Natural-natural-200, #E7EBEE);
  background: var(--white, #FFF);
  transition: 0.3s;

  &:hover {
    background: var(--Natural-natural-100, #F3F6F8);
    cursor: pointer;
    transition: 0.3s;
  }

  &:active {
    background: var(--Natural-natural-200, #E7EBEE);
  }
`;