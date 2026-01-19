export interface DropdownProps{
  label: string; // The text to display on the dropdown
  option: string[]; // The list of options to display in the dropdown
  value: string | null; // The currently selected value
  onChange: (value: string | null) => void; // Callback function when an option is selected
}

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string; // ISO 3166-1 alpha-3 code
  capital: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: {
    [key: string]: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders?: string[];
  tld?: string[];
}

