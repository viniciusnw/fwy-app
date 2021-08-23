
import styled from 'styled-components/native';

export const PageContainer = styled.View<any>`
  flex: 1;
  background-color: ${({ theme, color }: any) => theme.color[!color ? 'default' : color]};
`;