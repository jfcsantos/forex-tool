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

export type CurrencyDataProps = {
  currencyTypes: {
    label?: string;
    options: GroupedOption[];
  }[];
  loading: boolean;
  getCurrencyList: () => void;
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
  loading: false,
  getCurrencyList: () => undefined,
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
  const [currencyList, setcurrencyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrencyList();
  }, []);

  useEffect(() => {
    if (!!currencyList.length) {
      setLoading(false);
    }
  }, [currencyList]);

  const getCurrencyList = useCallback(() => {
    fetch(`/physicalCurrencyList.csv`)
      .then((r) => r.text())
      .then((text) => {
        parseCurrencyData(text, setcurrencyList);
      });
  }, []);

  return (
    <CurrencyDataContext.Provider
      value={{
        currencyTypes: [
          {
            label: "Currencies",
            options: currencyList,
          },
        ],
        loading,
        getCurrencyList,
      }}
    >
      {children}
    </CurrencyDataContext.Provider>
  );
};

export const useCurrencyList = () =>
  useContext<CurrencyDataProps>(CurrencyDataContext);
