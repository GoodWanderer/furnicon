import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
	fontFamily: 'Inter',
	minWidth: '320px',
	maxWidthContainer: '1264px',
	media: {
		md1: 1670,
		md2: 1438,
		md3: 1024,
		md4: 768,
		md5: 360,
	},
	background: '#393E46',
}

const Global = createGlobalStyle`
	/* .btn { */
		/* padding: 6px 12px; */
		/* border-radius: 4px; */
		/* background: #00adb5; */

		/* width: 69px;
    height: 32px; */
    /* font-family: 'Inter'; */
    /* font-weight: 700; */
    /* font-size: 14px; */
    /* line-height: 14px; */
    /* color: #fff; */
    /* cursor: pointer; */
	/* } */
`

const UI = createGlobalStyle`

`

const StyledGlobal = ({children}) => {
  return (
		<ThemeProvider theme={theme}>
			<Global/>
			{children}
		</ThemeProvider>
  );
}

export default StyledGlobal;