import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

.sr-only {
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;  /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;            /* 3 */
}

/*
	Use in conjunction with .sr-only to only display content when it's focused.
	@note Useful for skip links 
	@see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
	@note Based on a HTML5 Boilerplate technique, included in Bootstrap
	@note Fixed a bug with position: static on iOS 10.0.2 + VoiceOver
		@author Sylvain Pigeard
		@see https://github.com/twbs/bootstrap/issues/20732
*/
.sr-only-focusable:focus,
.sr-only-focusable:active {
	clip: auto !important;
	-webkit-clip-path: none !important;
		clip-path: none !important;
	height: auto !important;
	margin: auto !important;
	overflow: visible !important;
	width: auto !important;
	white-space: normal !important;
}
`;
