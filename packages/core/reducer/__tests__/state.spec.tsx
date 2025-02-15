import { defaultAppState } from "../../components/Puck/context";
import { SetStateAction, createReducer } from "../../reducer";
import { AppState, Config, Data, UiState } from "../../types/Config";

type Props = {
  Comp: {
    prop: string;
  };
};

describe("State reducer", () => {
  const config: Config<Props> = {
    components: {
      Comp: {
        defaultProps: { prop: "example" },
        render: () => <div />,
      },
    },
  };

  const reducer = createReducer({ config });

  describe("setUi action", () => {
    it("should insert data into the state", () => {
      const state: AppState = defaultAppState;

      const action: SetStateAction = {
        type: "setUi",
        ui: { leftSideBarVisible: false },
      };

      const newState = reducer(state, action);
      expect(newState.ui.leftSideBarVisible).toEqual(false);
    });
  });
});
