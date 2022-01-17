import { OptionBase } from "chakra-react-select";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { readString } from "react-papaparse";

export type CurrencyPair = [string, string];

export interface GroupedOption extends OptionBase {
  label: string;
  value: string;
}

export enum CurrencyType {
  digital = "digital",
  physical = "physical",
}

export type CurrencyDataProps = {
  currencyTypes: {
    label?: string;
    options: GroupedOption[];
  }[];
  isLoaded: boolean;
  getCurrencyList: () => void;
  getFilteredCurrencies: (filter: CurrencyType) => {
    label?: string;
    options: GroupedOption[];
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

type ParseResult<T> = {
  data: T[];
  errors: any[];
  meta: any;
};

export const CurrencyDataContext = createContext<CurrencyDataProps>({
  currencyTypes: [],
  isLoaded: false,
  getCurrencyList: () => undefined,
  getFilteredCurrencies: () => [],
});

const parseCurrencyData = (
  textData: string,
  callBack: (value: any) => void
) => {
  readString(textData, {
    worker: true,
    header: false,
    complete: (results: ParseResult<CurrencyPair[]>) => {
      if (results.data && results.errors.length === 0) {
        const mappedValues = results.data.map((v, i) => {
          return {
            value: v[0],
            label: v[1],
          };
        });
        callBack(mappedValues);
      }
    },
  });
};

export const CurrencyDataProvider = ({ children }: ProviderProps) => {
  const [physicalList, setPhysicalList] = useState([]);
  const [digitalList, setDigitalList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!!digitalList && !!physicalList) {
      setIsLoaded(true);
    }
  }, [digitalList, physicalList]);

  useEffect(() => {
    getCurrencyList();
  });

  const getCurrencyList = useCallback(() => {
    if (!isLoaded) {
      fetch(`/physicalCurrencyList.csv`)
        .then((r) => r.text())
        .then((text) => {
          parseCurrencyData(text, setPhysicalList);
        });
      fetch(`/digitalCurrencyList.csv`)
        .then((r) => r.text())
        .then((text) => {
          parseCurrencyData(text, setDigitalList);
        });
    } else {
      return [
        {
          label: "Physical",
          options: physicalList,
        },
        {
          label: "Digital",
          options: digitalList,
        },
      ];
    }
  }, [isLoaded, physicalList, digitalList]);

  const getFilteredCurrencies = useCallback(
    (filter: CurrencyType) => {
      if (filter === "digital")
        return [
          {
            label: "Digital",
            options: digitalList,
          },
        ];
      return [
        {
          label: "Physical",
          options: physicalList,
        },
      ];
    },
    [digitalList, physicalList]
  );

  return (
    <CurrencyDataContext.Provider
      value={{
        currencyTypes: [
          {
            label: "Physical",
            options: physicalList,
          },
          {
            label: "Digital",
            options: digitalList,
          },
        ],
        isLoaded,
        getCurrencyList,
        getFilteredCurrencies,
      }}
    >
      {children}
    </CurrencyDataContext.Provider>
  );
};

export const useCurrencyList = () =>
  useContext<CurrencyDataProps>(CurrencyDataContext);
