import React from 'react';
import ThemedButton from './components/context/themed-button';
import { themes, ThemeContext } from './components/context/theme-context';

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
         state.theme === themes.dark
         ? themes.light
         : themes.dark,
      }));
    }
  }

  render() {
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

export default App;