interface ThemeState {
  darkMode: boolean;
}

type Action = { type: "TOGGLE_THEME" };

const loadState = (): ThemeState => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {}
  return { darkMode: false }; 
};

const initialState: ThemeState = loadState();

function themeReducer(
  state: ThemeState = initialState,
  action: Action
): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":{
        const newState = { darkMode: !state.darkMode };
        localStorage.setItem("theme", JSON.stringify(newState));
        return newState;
    }
    default:
      return state;
  }
}

export default themeReducer;
export type { ThemeState, Action };
