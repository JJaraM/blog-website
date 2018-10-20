/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';


import './style/loader.css';

interface Props {
  width?: number;
  height?: number;
  logoWidth?:number;
  logoHeight?:number;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
  color6?: string;
  color7?: string;
  color8?: string;
  id?: string;
}

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const CircleAnimation: React.StatelessComponent<Props> = (props) => {

  const heroLogoCirclelStyle = {
    height: props.height,
    width: props.width
  };

  const heroLogoStyle = {
    height: props.height,
  }



  return (
    <div className="hero-container" id={props.id}>
      <div style={heroLogoStyle}>

        <div className="hero-logo-container ">
          <svg className="svg-logo" xmlns="http://www.w3.org/2000/svg" width={props.logoWidth} height={props.logoHeight} viewBox="0 0 1600.000000 1600.000000">
            <g transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)" stroke="#EED9B7">
              <path d="M8756 15924 c208 -572 52 -1133 -489 -1759 -122 -142 -439 -453 -637       -626 -85 -74 -344 -292 -575 -484 -231 -192 -490 -409 -575 -484 -665 -583       -987 -1008 -1096 -1445 -49 -198 -43 -474 17 -702 167 -642 714 -1380 1584       -2139 194 -169 653 -530 662 -521 2 2 -55 100 -127 219 -182 304 -290 501       -443 807 -205 408 -486 1058 -537 1240 -70 252 -12 545 170 855 164 278 368       520 946 1120 153 160 337 353 408 430 692 746 1027 1328 1110 1923 32 227 16       533 -38 757 -56 229 -184 531 -320 755 -76 125 -90 138 -60 54z" fill="#EED9B7"/>
              <path d="M11170 13213 c-268 -28 -683 -103 -950 -172 -1345 -347 -2191 -1011       -2414 -1896 -49 -197 -60 -280 -60 -475 -1 -208 12 -290 70 -468 71 -218 165       -383 502 -884 156 -232 255 -419 299 -563 24 -82 27 -105 27 -250 0 -145 -3       -168 -27 -250 -32 -105 -105 -260 -169 -360 -68 -107 -195 -260 -292 -352 -47       -46 -80 -83 -72 -83 26 0 229 61 318 96 338 131 636 333 824 557 98 116 153       202 214 330 94 199 125 330 124 537 0 305 -70 508 -362 1048 -267 492 -316       630 -317 887 0 171 7 202 83 347 217 417 955 1067 2007 1770 149 99 272 182       274 184 5 4 -20 3 -79 -3z" fill="#EED9B7"/>
              <path d="M11890 8084 c-205 -24 -421 -89 -605 -182 -112 -56 -296 -169 -308         -189 -3 -5 29 -3 71 5 115 20 372 11 481 -18 419 -110 698 -406 718 -760 33         -572 -422 -1297 -1242 -1980 -105 -87 -293 -232 -325 -250 -36 -20 6 -19 136         5 528 98 1050 299 1419 548 175 118 375 296 489 436 324 397 466 932 380 1435         -84 494 -411 844 -872 932 -78 15 -280 25 -342 18z" fill="#EED9B7"/>
              <path d="M5390 8063 c-951 -46 -1666 -175 -2061 -374 -232 -116 -359 -249           -389 -409 -87 -451 703 -758 2185 -850 482 -30 1306 -30 1865 0 927 50 1855           159 2643 310 87 16 163 30 167 30 11 0 538 395 695 521 189 152 280 232 267           237 -6 2 -84 -10 -174 -27 -725 -135 -1669 -225 -2928 -282 -383 -17 -1443           -23 -1785 -10 -644 24 -1041 74 -1187 147 -58 29 -70 50 -58 96 45 163 489           373 1180 558 85 23 164 45 175 50 19 8 -440 10 -595 3z" fill="#EED9B7"/>
              <path d="M5033 6299 c-283 -59 -602 -220 -771 -387 -185 -184 -221 -353 -106             -502 305 -396 1565 -671 2964 -646 840 14 1610 120 2340 322 282 78 770 248             777 270 1 5 -201 135 -449 290 l-450 280 -112 -33 c-651 -198 -1473 -306             -2331 -306 -1010 0 -1676 150 -1787 401 -36 80 -7 164 95 269 l60 63 -69 -1             c-38 0 -110 -9 -161 -20z" fill="#EED9B7"/>
              <path d="M5553 4670 c-422 -45 -792 -289 -893 -590 -30 -88 -25 -191 13 -274               34 -74 136 -176 240 -240 287 -178 781 -296 1457 -348 211 -16 874 -16 1090 0               714 54 1309 161 1808 328 220 73 357 130 542 225 175 90 200 106 184 117 -7 4               -224 148 -483 321 -463 309 -472 314 -504 303 -17 -6 -97 -34 -175 -61 -808               -286 -2244 -398 -2890 -226 -167 45 -266 99 -308 170 -41 72 -27 163 39 241               15 18 27 35 27 38 0 7 -51 6 -147 -4z" fill="#EED9B7"/>
              <path d="M3288 3819 c-530 -32 -1003 -206 -1269 -469 -141 -139 -199 -258                 -199 -410 0 -200 84 -368 276 -549 426 -403 1368 -712 2684 -880 1016 -130                 2239 -165 3355 -96 2077 129 3627 549 4190 1136 160 166 233 315 251 505 23                 242 -130 440 -490 634 -75 40 -79 41 -72 19 42 -144 48 -187 43 -274 -6 -96                 -30 -179 -74 -254 -286 -496 -1344 -850 -2988 -1001 -1046 -95 -2309 -91                 -3350 11 -1105 108 -1919 311 -2249 561 -128 96 -193 218 -167 314 45 166 290                 315 646 390 159 34 449 44 600 21 55 -9 101 -14 103 -13 1 2 -125 75 -281 163                 -325 185 -294 175 -634 193 -195 10 -192 10 -375 -1z" fill="#EED9B7"/>
              <path d="M13620 2298 c-1442 -1349 -4716 -1930 -8160 -1447 -479 67 -1101 181                   -1519 278 -96 23 -176 39 -178 37 -2 -2 87 -40 199 -84 523 -208 1067 -377                   1628 -506 1266 -290 2627 -395 3915 -301 2216 162 3841 861 4138 1780 35 108                   67 306 49 305 -4 -1 -36 -28 -72 -62z" fill="#EED9B7"/>
            </g>
          </svg>
        </div>
        <div className="hero-logo-circles" style={heroLogoCirclelStyle} >

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 366 366">
              <circle stroke={props.color1} stroke-width="2" cx="183" cy="183" r="130" fill="none" fill-rule="evenodd" stroke-dasharray="35,7,10,80"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
            <circle stroke={props.color2} stroke-width="2" cx="183" cy="183" r="130" fill="none" fill-rule="evenodd" opacity=".278" stroke-dasharray="35,7,10,80"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <circle stroke={props.color3} stroke-width="2" cx="183" cy="183" r="130" fill="none" fill-rule="evenodd" stroke-dasharray="35,7,10,80"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <path d="M251.346 306.299c68.096-37.746 92.7-123.549 54.953-191.645-37.746-68.096-123.549-92.7-191.645-54.953-68.096 37.746-92.7 123.549-54.953 191.645 37.746 68.096 123.549 92.7 191.645 54.953z" stroke="#D36E2D" stroke-width="4" fill="none" fill-rule="evenodd" stroke-dasharray="140,4,10,80" opacity=".441"/>
          </svg>


          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <circle stroke={props.color4} stroke-width="4" cx="183" cy="183" r="141" fill="none" fill-rule="evenodd" stroke-dasharray="51,4,10,80"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <path d="M92.733 302.788c66.157 49.854 160.202 36.636 210.055-29.52 49.854-66.158 36.636-160.203-29.52-210.056-66.158-49.854-160.203-36.636-210.056 29.52-49.854 66.158-36.636 160.203 29.52 210.056z" stroke="#DDA032" stroke-width="8" fill="none" fill-rule="evenodd" stroke-dasharray="56,2,4" opacity=".688"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <circle stroke={props.color5} stroke-width="8" cx="183" cy="183" r="150" fill="none" fill-rule="evenodd" stroke-dasharray="76,2,40,180"/>
          </svg>


          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <circle stroke={props.color6} stroke-width="4" cx="183" cy="183" r="159" fill="none" fill-rule="evenodd" opacity=".278" stroke-dasharray="46,2,12"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <circle stroke={props.color7} stroke-width="4" cx="183" cy="183" r="159" fill="none" fill-rule="evenodd" stroke-dasharray="76,4,70"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <path d="M18.997 106.524c-42.236 90.576-3.049 198.242 87.527 240.479 90.576 42.236 198.242 3.049 240.479-87.527 42.236-90.576 3.049-198.242-87.527-240.479C168.9-23.239 61.234 15.948 18.997 106.524z" stroke="#659CC8" stroke-width="2" fill="none" fill-rule="evenodd" stroke-dasharray="76,4,70" opacity=".191"/>
          </svg>

          <svg className="hero-logo-circle" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 366 366">
              <circle stroke={props.color8} stroke-width="2" cx="183" cy="183" r="181" fill="none" fill-rule="evenodd" stroke-dasharray="2,45,161"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

CircleAnimation.defaultProps = {
  width: 366,
  height: 366,
  logoWidth:366,
  logoHeight:206,
  color1: "#C13F21",
  color2: "#C13F21",
  color3: "#C13F21",
  color4: "#D36E2D",
  color5: "#DDA032",
  color6: "#78AF9F",
  color7: "#78AF9F",
  color8: "#659CC8",
  id: "circle"
};
