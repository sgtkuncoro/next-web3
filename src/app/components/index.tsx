import styled from 'styled-components';

type TextProps = React.HTMLAttributes<HTMLElement>;

const StyledText = styled.div``;

const Text = (props: TextProps) => (
  <StyledText {...props}>{props?.children}</StyledText>
);

export default Text;
