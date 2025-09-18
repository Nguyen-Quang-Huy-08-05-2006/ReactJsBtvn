interface CompanyState {
  name: string;
}

type Action = { type: "CHANGE_COMPANY" };

const initialState: CompanyState = {
  name: "Rikkei Academy",
};

function companyReducer(
  state: CompanyState = initialState,
  action: Action
): CompanyState {
  switch (action.type) {
    case "CHANGE_COMPANY":
      return { ...state, name: "RikkeiSoft" };
    default:
      return state;
  }
}

export default companyReducer;
export type { CompanyState, Action };
