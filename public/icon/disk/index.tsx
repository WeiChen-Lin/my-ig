interface Props {
  fill?: string
  className?: string
}

export const SearchIcon = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 53.627 53.627'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M53.627 49.385 37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21zm33.567 15.093c.178-.172.353-.347.525-.525.146-.151.304-.29.445-.445l14.262 14.262-1.415 1.415-14.261-14.263c.155-.141.293-.299.444-.444z' />
  </svg>
)

export const ArrowIcon = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 384.923 384.923'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M321.337 122.567 201.046 3.479c-4.776-4.728-12.391-4.547-17.179 0l-120.291 119.1c-4.74 4.704-4.74 12.319 0 17.011 4.752 4.704 12.439 4.704 17.191 0l99.551-98.552v331.856c0 6.641 5.438 12.03 12.151 12.03s12.151-5.39 12.151-12.03V41.025l99.551 98.552c4.74 4.704 12.439 4.704 17.179 0a11.941 11.941 0 0 0-.013-17.01z' />
  </svg>
)

export const Lattice = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 48 48'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M46.504 0H2.338A2.337 2.337 0 0 0 0 2.337v44.167a2.337 2.337 0 0 0 2.338 2.337h44.166a2.336 2.336 0 0 0 2.336-2.337V2.337A2.336 2.336 0 0 0 46.504 0zM20.395 28.928v-8.049h8.051v8.049h-8.051zm8.051 4.674v10.564h-8.051V33.602h8.051zM4.674 20.878h11.047v8.05H4.674v-8.05zm15.721-4.674V4.674h8.051v11.53h-8.051zm12.725 4.674h11.047v8.05H33.12v-8.05zm11.047-4.674H33.12V4.674h11.047v11.53zM15.72 4.674v11.53H4.674V4.674H15.72zM4.674 33.602h11.047v10.564H4.674V33.602zM33.12 44.166V33.602h11.047v10.564H33.12z' />
  </svg>
)

export const List = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 183.199 183.199'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M35.069 5.875H3.897A3.896 3.896 0 0 0 0 9.772v23.379a3.896 3.896 0 0 0 3.897 3.897h31.172a3.896 3.896 0 0 0 3.897-3.897V9.772a3.896 3.896 0 0 0-3.897-3.897zm-3.897 23.38H7.793V13.668h23.379v15.587zM35.069 76.013H3.897A3.896 3.896 0 0 0 0 79.91v23.379a3.896 3.896 0 0 0 3.897 3.897h31.172a3.896 3.896 0 0 0 3.897-3.897V79.91a3.896 3.896 0 0 0-3.897-3.897zm-3.897 23.379H7.793V83.806h23.379v15.586zM35.069 146.151H3.897A3.896 3.896 0 0 0 0 150.048v23.379a3.896 3.896 0 0 0 3.897 3.897h31.172a3.896 3.896 0 0 0 3.897-3.897v-23.379a3.896 3.896 0 0 0-3.897-3.897zm-3.897 23.379H7.793v-15.586h23.379v15.586zM50.655 17.565h132.544v7.793H50.655zM50.655 87.703h132.544v7.793H50.655zM50.655 157.841h132.544v7.793H50.655z' />
  </svg>
)

export const Folder = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 309.267 309.267'
    xmlSpace='preserve'
    {...props}
  >
    <path
      style={{
        fill: '#d0994b'
      }}
      d='M260.944 43.491H125.64s-18.324-28.994-28.994-28.994H48.323c-10.67 0-19.329 8.65-19.329 19.329v222.286c0 10.67 8.659 19.329 19.329 19.329h212.621c10.67 0 19.329-8.659 19.329-19.329V62.82c0-10.67-8.659-19.329-19.329-19.329z'
    />
    <path
      style={{
        fill: '#e4e7e7'
      }}
      d='M28.994 72.484h251.279v77.317H28.994V72.484z'
    />
    <path
      style={{
        fill: '#f4b459'
      }}
      d='M19.329 91.814h270.609c10.67 0 19.329 8.65 19.329 19.329l-19.329 164.298c0 10.67-8.659 19.329-19.329 19.329H38.658c-10.67 0-19.329-8.659-19.329-19.329L0 111.143c0-10.68 8.659-19.329 19.329-19.329z'
    />
  </svg>
)

export const Dots = (props: Props) => (
  <svg
    viewBox='0 0 32 32'
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zM13 26c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zM13 6c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z' />
  </svg>
)

export const Plus = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M490.667 234.667H277.333V21.333C277.333 9.551 267.782 0 256 0s-21.333 9.551-21.333 21.333v213.333H21.333C9.551 234.667 0 244.218 0 256s9.551 21.333 21.333 21.333h213.333v213.333c0 11.782 9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333V277.333h213.333c11.782 0 21.333-9.551 21.333-21.333s-9.549-21.333-21.331-21.333z' />
  </svg>
)
