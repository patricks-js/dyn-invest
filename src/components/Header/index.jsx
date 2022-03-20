import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Switch from "react-switch";
import { shade } from "polished";
import { Container } from "./styles";
import { Logo } from "./Logo";

export const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <Logo />
        <div>
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.background}
            offHandleColor={colors.secondary}
            onHandleColor="#08f"
          />
        </div>
      </div>
    </Container>
  );
};
