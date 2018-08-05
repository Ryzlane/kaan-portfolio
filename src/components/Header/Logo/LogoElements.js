import React from 'react'

const LogoText = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="16" viewBox="0 0 60 16">
        <g fill="#323232" fill-opacity="0" fill-rule="evenodd" stroke="#323232" stroke-width="1" font-family="Muli-Black, Muli" font-size="20" font-weight="700" letter-spacing="1.667" transform="translate(0 -5)">
          <text>
            <tspan x="0" y="20">K</tspan>
          </text>
          <text>
            <tspan x="18" y="20">A</tspan>
          </text>
          <text>
            <tspan x="28" y="20">A</tspan> <tspan x="45.047" y="20">N</tspan>
          </text>
        </g>
      </svg>
    )
}

const LogoFrame = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="31" viewBox="0 0 72 31">
      <path fill="none" stroke="#192DFB" d="M1,14.5 C0.723857625,14.5 0.5,14.7238576 0.5,15 L0.5,44 C0.5,44.2761424 0.723857625,44.5 1,44.5 L71,44.5 C71.2761424,44.5 71.5,44.2761424 71.5,44 L71.5,15 C71.5,14.7238576 71.2761424,14.5 71,14.5 L1,14.5 Z" transform="translate(0 -14)"/>
    </svg>
  )
}

const LogoCrown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12">
      <path fill="#192DFB" d="M13.4447572,9.3132 L3.52932238,9.3132 L1.80160498,4.7718 C2.54535498,5.2587 3.43600716,5.5332 4.37932238,5.5332 C6.25671368,5.5332 7.74975716,3.8052 8.48703977,2.0754 C9.22432238,3.8052 10.7173659,5.5332 12.5938332,5.5332 C13.5325289,5.5332 14.4259528,5.2551 15.1743224,4.7628 L13.4447572,9.3132 Z M13.6951376,11.0907 L3.26138759,11.0907 C3.01747455,11.0907 2.81975716,10.8972 2.81975716,10.6434 C2.81975716,10.4058 3.01747455,10.2132 3.26138759,10.2132 L13.6951376,10.2132 C13.9390506,10.2132 14.136768,10.4058 14.136768,10.6605 C14.136768,10.8972 13.9390506,11.0907 13.6951376,11.0907 Z M16.6701376,2.313 C16.6673659,2.3121 16.6063876,2.2806 16.6036159,2.2788 C16.4899745,2.2203 16.3569311,2.2113 16.2377463,2.2527 C16.1176376,2.2932 16.0197028,2.3805 15.9670398,2.4948 C15.3748115,3.7944 14.0499202,4.6332 12.5938332,4.6332 C10.7506267,4.6332 9.20030064,2.1177 8.94437672,0.3861 C8.91111585,0.1638 8.7161702,0 8.48703977,0 C8.25790933,0 8.06296368,0.1638 8.02970281,0.3861 C7.77285498,2.1177 6.22345281,4.6332 4.37932238,4.6332 C2.85948542,4.6332 1.5124202,3.7422 0.949757158,2.3625 C0.863833245,2.1546 0.58019194,2.0529 0.352909332,2.1051 C0.224485419,2.1357 0.116387593,2.2176 0.0544854188,2.331 C-0.0083406682,2.4444 -0.0166558856,2.5785 0.0286158535,2.6991 L2.60818107,9.4824 C2.18595281,9.7101 1.89584411,10.1466 1.89584411,10.6605 C1.89584411,11.394 2.50839846,11.9907 3.26138759,11.9907 L13.6951376,11.9907 C14.4481267,11.9907 15.0606811,11.394 15.0606811,10.6434 C15.0606811,10.1466 14.7770398,9.7182 14.3622028,9.4896 L16.8817137,2.8638 C16.9611702,2.655 16.8715506,2.4201 16.6701376,2.313 Z"/>
    </svg>
  )
}



export { LogoText, LogoFrame, LogoCrown }