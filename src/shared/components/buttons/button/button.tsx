import type { ButtonProps } from 'antd';

import { ButtonAntd } from './button.style';

interface ButtonCurrentPropos extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentPropos) => {
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
