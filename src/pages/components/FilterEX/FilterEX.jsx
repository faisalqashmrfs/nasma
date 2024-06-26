import { useState } from 'react'
import './FilterEX.css'
import { Link } from 'react-scroll'

export default function FilterEX() {

    const [filternumber, setfilternumber] = useState(1)

    function changfilternum(filternum) {
        setfilternumber(filternum)
    }

    const [svgColor, setsvgColor] = useState(1)

    function ChangeSvgColor(id) {
        setsvgColor(id)
    }


    return (
        <>
            <div className='FillterEX'>
                <ul className={`ul${filternumber}`}>
                    <li>
                        <Link to="RestaurantCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(1)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_1393_9792)">
                                        <path d="M19.922 7.60352C13.0834 7.60352 7.52322 13.1651 7.52322 20.0023C7.52322 26.8347 13.0833 32.3979 19.922 32.3979C26.7544 32.3979 32.3207 26.8347 32.3207 20.0038C32.3207 13.1651 26.7589 7.60352 19.922 7.60352ZM19.922 31.3208C13.6788 31.3208 8.60329 26.2453 8.60329 20.0037C8.60329 13.7621 13.6772 8.67729 19.922 8.67729C26.1667 8.67729 31.2407 13.762 31.2407 20.0037C31.2407 26.2454 26.1667 31.3208 19.922 31.3208ZM30.4469 20.0037C30.4469 25.8114 25.7345 30.5238 19.9235 30.5238C14.1111 30.5238 9.39867 25.8099 9.39867 20.0037C9.39867 14.1898 14.1126 9.47739 19.9235 9.47739C25.7345 9.47582 30.4469 14.1898 30.4469 20.0037ZM6.50471 8.93428L6.50786 15.0497H6.49857C6.437 17.0006 4.29858 17.7451 4.29858 17.7451V21.6699H4.30173L4.29858 30.6947C4.29858 30.6947 3.43392 31.8116 2.31384 30.6947V17.7467H2.33998C1.03536 17.1913 0.0707034 16.999 0.00913317 15.0513H0V8.93428L0.980084 8.92972L1.4569 14.8468H2.61398L2.76011 8.80815H3.70319L3.81704 14.8468H5.17394L5.4862 8.93428H6.50471ZM39.6978 19.3467H37.2993V31.4778H34.5284V8.5266H37.2993C37.3008 8.52502 41.0747 13.3143 39.6978 19.3467Z" fill={svgColor === 1 ? "#004E6B" : "#A3A3A3"} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1393_9792">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Link>
                        <span className={svgColor === 1 ? "span" : "span1"}>Restaurant</span>
                    </li>
                    <li>
                        <Link to="ChaletsCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(2)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <path d="M32.1668 5.00065C32.1668 4.55862 31.9912 4.1347 31.6787 3.82214C31.3661 3.50958 30.9422 3.33398 30.5002 3.33398C30.0581 3.33398 29.6342 3.50958 29.3216 3.82214C29.0091 4.1347 28.8335 4.55862 28.8335 5.00065V10.0007L20.5002 3.33398L3.8335 16.6673H7.16683V36.6673H17.1668V30.0007C17.1668 29.1166 17.518 28.2687 18.1431 27.6436C18.7683 27.0185 19.6161 26.6673 20.5002 26.6673C21.3842 26.6673 22.2321 27.0185 22.8572 27.6436C23.4823 28.2687 23.8335 29.1166 23.8335 30.0007V36.6673H33.8335V16.6673H37.1668L32.1668 12.6673V5.00065ZM13.8335 30.0007H10.5002V26.6673H13.8335V30.0007ZM13.8335 23.334H10.5002V20.0007H13.8335V23.334ZM23.8335 23.334H17.1668V20.0007H23.8335V23.334ZM30.5002 30.0007H27.1668V26.6673H30.5002V30.0007ZM30.5002 23.334H27.1668V20.0007H30.5002V23.334Z" fill={svgColor === 2 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span className={svgColor === 2 ? "span" : "span1"}>Chalet</span>
                    </li>
                    <li>
                        <Link to="ActivetiesCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(3)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M37.3985 18.6962V14.7626C37.3985 12.8222 35.8196 11.2435 33.8786 11.2435C33.229 11.2435 32.6203 11.4211 32.0974 11.7291V11.2923C32.0974 9.35086 30.5182 7.77148 28.5771 7.77148C26.636 7.77148 25.0568 9.35086 25.0568 11.2923V18.6968H14.943V11.2923C14.943 9.35086 13.3637 7.77148 11.4226 7.77148C9.48148 7.77148 7.90227 9.35086 7.90227 11.2923V11.7291C7.3793 11.4211 6.7707 11.2435 6.12109 11.2435C4.18023 11.2435 2.60117 12.8221 2.60117 14.7626V18.6968H0V21.3055H2.60109V25.238C2.60109 27.1795 4.18 28.7588 6.12102 28.7588C6.77063 28.7588 7.3793 28.5812 7.90219 28.2731V28.7093C7.90219 30.6507 9.48141 32.2301 11.4225 32.2301C13.3636 32.2301 14.9429 30.6507 14.9429 28.7093V21.3055H25.0567V28.7093C25.0567 30.6507 26.6359 32.2301 28.577 32.2301C30.5181 32.2301 32.0973 30.6507 32.0973 28.7093V28.2731C32.6203 28.5813 33.2289 28.7588 33.8785 28.7588C35.8194 28.7588 37.3984 27.1795 37.3984 25.238V21.3048L39.9992 21.3055L40 18.6968L37.3985 18.6962Z" fill={svgColor === 3 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span className={svgColor === 3 ? "span" : "span1"}>Activity</span>
                    </li>
                    <li>
                        <Link to="The_NatureCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(4)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <path d="M32.6446 27.6553L27.6514 21.9999H29.5658C30.129 21.9999 30.6271 21.6874 30.8646 21.1836C31.1021 20.6811 31.024 20.1049 30.6596 19.6806L25.7764 14.0001H27.582C28.1508 14.0001 28.6633 13.6658 28.8858 13.1495C29.1058 12.6414 29.0021 12.0502 28.6208 11.6446L21.7288 4.30233C21.3519 3.89922 20.6487 3.89922 20.2712 4.30233L13.3786 11.6446C12.9973 12.0502 12.8942 12.6414 13.1136 13.1495C13.3361 13.6658 13.8492 14.0001 14.418 14.0001H16.2236L11.3398 19.6818C10.9766 20.1055 10.8985 20.6811 11.1354 21.1843C11.3729 21.6874 11.8704 21.9999 12.4342 21.9999H14.3486L9.35536 27.6553C8.98035 28.0796 8.89534 28.6609 9.13285 29.1715C9.36723 29.6746 9.88287 29.9996 10.446 29.9996H19V31.5277L17.1068 34.5525C16.7743 35.2175 17.258 36 18.0012 36H23.9988C24.742 36 25.2257 35.2175 24.8932 34.5525L23 31.5277V29.9996H31.554C32.1171 29.9996 32.6328 29.6746 32.8672 29.1715C33.1047 28.6609 33.0197 28.0796 32.6446 27.6553Z" fill={svgColor === 4 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span className={svgColor === 4 ? "span" : "span1"}>Nature</span>
                    </li>
                    <li>
                        <Link to="PoolCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(5)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none">
                                    <g clip-path="url(#clip0_1367_10357)">
                                        <path d="M39.2013 34.2433C35.3639 34.2433 35.3639 31.642 31.5265 31.642C27.689 31.642 27.689 34.2433 23.8516 34.2433C20.0147 34.2433 20.0147 31.642 16.1778 31.642C12.3411 31.642 12.3411 34.2433 8.50436 34.2433C4.66897 34.2433 4.66896 31.642 0.833496 31.642V26.1445C4.66889 26.1445 4.66889 28.7458 8.50436 28.7458C12.3411 28.7458 12.3411 26.1445 16.1778 26.1445C20.0147 26.1445 20.0147 28.7458 23.8516 28.7458C27.689 28.7458 27.689 26.1445 31.5265 26.1445C35.3639 26.1445 35.3639 28.7458 39.2013 28.7458" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M39.2013 34.2433C35.3639 34.2433 35.3639 31.642 31.5265 31.642C27.689 31.642 27.689 34.2433 23.8516 34.2433C20.0147 34.2433 20.0147 31.642 16.1778 31.642C12.3411 31.642 12.3411 34.2433 8.50436 34.2433C4.66897 34.2433 4.66896 31.642 0.833496 31.642V26.1445C4.66889 26.1445 4.66889 28.7458 8.50436 28.7458C12.3411 28.7458 12.3411 26.1445 16.1778 26.1445C20.0147 26.1445 20.0147 28.7458 23.8516 28.7458C27.689 28.7458 27.689 26.1445 31.5265 26.1445C35.3639 26.1445 35.3639 28.7458 39.2013 28.7458" stroke={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke-width="1.5625" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M39.2013 39.7394C35.3639 39.7394 35.3639 37.1381 31.5265 37.1381C27.689 37.1381 27.689 39.7394 23.8516 39.7394C20.0147 39.7394 20.0147 37.1381 16.1778 37.1381C12.3411 37.1381 12.3411 39.7394 8.50436 39.7394C4.66897 39.7394 4.66896 37.1381 0.833496 37.1381V31.6406C4.66889 31.6406 4.66889 34.2419 8.50436 34.2419C12.3411 34.2419 12.3411 31.6406 16.1778 31.6406C20.0147 31.6406 20.0147 34.2419 23.8516 34.2419C27.689 34.2419 27.689 31.6406 31.5265 31.6406C35.3639 31.6406 35.3639 34.2419 39.2013 34.2419" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M39.2013 39.7394C35.3639 39.7394 35.3639 37.1381 31.5265 37.1381C27.689 37.1381 27.689 39.7394 23.8516 39.7394C20.0147 39.7394 20.0147 37.1381 16.1778 37.1381C12.3411 37.1381 12.3411 39.7394 8.50436 39.7394C4.66897 39.7394 4.66896 37.1381 0.833496 37.1381V31.6406C4.66889 31.6406 4.66889 34.2419 8.50436 34.2419C12.3411 34.2419 12.3411 31.6406 16.1778 31.6406C20.0147 31.6406 20.0147 34.2419 23.8516 34.2419C27.689 34.2419 27.689 31.6406 31.5265 31.6406C35.3639 31.6406 35.3639 34.2419 39.2013 34.2419" stroke={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke-width="1.5625" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M33.8769 0.259766C32.0196 0.259766 30.2729 0.983047 28.9582 2.29656C27.6441 3.61063 26.9204 5.3575 26.9204 7.21531V12.7615H9.83504V7.21531C9.83504 5.94703 10.3291 4.75445 11.226 3.85766C12.1237 2.96086 13.3164 2.46695 14.5845 2.46695C17.2034 2.46695 19.3339 4.59703 19.3339 7.21531H21.5411C21.5411 3.38 18.4204 0.259766 14.5845 0.259766C12.7273 0.259766 10.9806 0.982891 9.66574 2.29656C8.3516 3.61063 7.62793 5.3575 7.62793 7.21531V33.7322H9.83512V30.4272H26.9205V33.7322L29.1277 32.099V7.21531C29.1277 5.94703 29.6218 4.75445 30.5186 3.85766C31.4162 2.96086 32.609 2.46695 33.8771 2.46695C36.4961 2.46695 38.6265 4.59703 38.6265 7.21531H40.8335C40.8335 3.38008 37.7128 0.259766 33.8769 0.259766ZM26.9204 14.9687V20.4908H9.83504V14.9687H26.9204ZM9.83504 28.2201V22.698H26.9204V28.2201H9.83504Z" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke-width="1.5625" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1367_10357">
                                            <rect width="40" height="40" fill="white" transform="translate(0.833496)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Link>
                        <span className={svgColor === 5 ? "span" : "span1"}>POOL</span>
                    </li>
                    <li>
                        <Link to="ConferencesCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(6)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M5.5 32.9551C5.5 34.6113 6.87574 35.9551 8.57143 35.9551H31.0952C32.7909 35.9551 34.1667 34.6113 34.1667 32.9551V15.9551H5.5V32.9551ZM25.9762 20.7051C25.9762 20.2926 26.3217 19.9551 26.744 19.9551H29.3036C29.7259 19.9551 30.0714 20.2926 30.0714 20.7051V23.2051C30.0714 23.6176 29.7259 23.9551 29.3036 23.9551H26.744C26.3217 23.9551 25.9762 23.6176 25.9762 23.2051V20.7051ZM25.9762 28.7051C25.9762 28.2926 26.3217 27.9551 26.744 27.9551H29.3036C29.7259 27.9551 30.0714 28.2926 30.0714 28.7051V31.2051C30.0714 31.6176 29.7259 31.9551 29.3036 31.9551H26.744C26.3217 31.9551 25.9762 31.6176 25.9762 31.2051V28.7051ZM17.7857 20.7051C17.7857 20.2926 18.1313 19.9551 18.5536 19.9551H21.1131C21.5354 19.9551 21.881 20.2926 21.881 20.7051V23.2051C21.881 23.6176 21.5354 23.9551 21.1131 23.9551H18.5536C18.1313 23.9551 17.7857 23.6176 17.7857 23.2051V20.7051ZM17.7857 28.7051C17.7857 28.2926 18.1313 27.9551 18.5536 27.9551H21.1131C21.5354 27.9551 21.881 28.2926 21.881 28.7051V31.2051C21.881 31.6176 21.5354 31.9551 21.1131 31.9551H18.5536C18.1313 31.9551 17.7857 31.6176 17.7857 31.2051V28.7051ZM9.59524 20.7051C9.59524 20.2926 9.94077 19.9551 10.3631 19.9551H12.9226C13.3449 19.9551 13.6905 20.2926 13.6905 20.7051V23.2051C13.6905 23.6176 13.3449 23.9551 12.9226 23.9551H10.3631C9.94077 23.9551 9.59524 23.6176 9.59524 23.2051V20.7051ZM9.59524 28.7051C9.59524 28.2926 9.94077 27.9551 10.3631 27.9551H12.9226C13.3449 27.9551 13.6905 28.2926 13.6905 28.7051V31.2051C13.6905 31.6176 13.3449 31.9551 12.9226 31.9551H10.3631C9.94077 31.9551 9.59524 31.6176 9.59524 31.2051V28.7051ZM31.0952 7.95508H28.0238V4.95508C28.0238 4.40508 27.5631 3.95508 27 3.95508H24.9524C24.3893 3.95508 23.9286 4.40508 23.9286 4.95508V7.95508H15.7381V4.95508C15.7381 4.40508 15.2774 3.95508 14.7143 3.95508H12.6667C12.1036 3.95508 11.6429 4.40508 11.6429 4.95508V7.95508H8.57143C6.87574 7.95508 5.5 9.29883 5.5 10.9551V13.9551H34.1667V10.9551C34.1667 9.29883 32.7909 7.95508 31.0952 7.95508Z" fill={svgColor === 6 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span className={svgColor === 6 ? "span" : "span1"}>EVENTS</span>
                    </li>
                </ul>
                <div className='FilterBtns'>
                    <Link
                        onClick={() => changfilternum(1)}
                        className={filternumber === 1 ? "btnFilterActil" : "btnFilterDis"}
                    ></Link>
                    <Link
                        onClick={() => changfilternum(2)}
                        className={filternumber === 2 ? "btnFilterActil" : "btnFilterDis"}
                    ></Link>
                    <Link
                        onClick={() => changfilternum(3)}
                        className={filternumber === 3 ? "btnFilterActil" : "btnFilterDis"}
                    ></Link>
                    <Link
                        onClick={() => changfilternum(4)}
                        className={filternumber === 4 ? "btnFilterActil" : "btnFilterDis"}
                    ></Link>
                    <Link
                        onClick={() => changfilternum(5)}
                        className={filternumber === 5 ? "btnFilterActil" : "btnFilterDis"}
                    ></Link>
                    <Link
                        onClick={() => changfilternum(6)}
                        className={filternumber === 6 ? "btnFilterActil" : "btnFilterDis"}
                    ></Link>

                </div>
            </div>
            <div className='FillterEX1'>
                <ul className={`ul${filternumber}`}>
                    <li>
                        <Link to="RestaurantCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(1)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_1393_9792)">
                                        <path d="M19.922 7.60352C13.0834 7.60352 7.52322 13.1651 7.52322 20.0023C7.52322 26.8347 13.0833 32.3979 19.922 32.3979C26.7544 32.3979 32.3207 26.8347 32.3207 20.0038C32.3207 13.1651 26.7589 7.60352 19.922 7.60352ZM19.922 31.3208C13.6788 31.3208 8.60329 26.2453 8.60329 20.0037C8.60329 13.7621 13.6772 8.67729 19.922 8.67729C26.1667 8.67729 31.2407 13.762 31.2407 20.0037C31.2407 26.2454 26.1667 31.3208 19.922 31.3208ZM30.4469 20.0037C30.4469 25.8114 25.7345 30.5238 19.9235 30.5238C14.1111 30.5238 9.39867 25.8099 9.39867 20.0037C9.39867 14.1898 14.1126 9.47739 19.9235 9.47739C25.7345 9.47582 30.4469 14.1898 30.4469 20.0037ZM6.50471 8.93428L6.50786 15.0497H6.49857C6.437 17.0006 4.29858 17.7451 4.29858 17.7451V21.6699H4.30173L4.29858 30.6947C4.29858 30.6947 3.43392 31.8116 2.31384 30.6947V17.7467H2.33998C1.03536 17.1913 0.0707034 16.999 0.00913317 15.0513H0V8.93428L0.980084 8.92972L1.4569 14.8468H2.61398L2.76011 8.80815H3.70319L3.81704 14.8468H5.17394L5.4862 8.93428H6.50471ZM39.6978 19.3467H37.2993V31.4778H34.5284V8.5266H37.2993C37.3008 8.52502 41.0747 13.3143 39.6978 19.3467Z" fill={svgColor === 1 ? "#004E6B" : "#A3A3A3"} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1393_9792">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Link>
                        <span>Restaurant</span>
                    </li>
                    <li>
                        <Link to="ChaletsCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(2)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <path d="M32.1668 5.00065C32.1668 4.55862 31.9912 4.1347 31.6787 3.82214C31.3661 3.50958 30.9422 3.33398 30.5002 3.33398C30.0581 3.33398 29.6342 3.50958 29.3216 3.82214C29.0091 4.1347 28.8335 4.55862 28.8335 5.00065V10.0007L20.5002 3.33398L3.8335 16.6673H7.16683V36.6673H17.1668V30.0007C17.1668 29.1166 17.518 28.2687 18.1431 27.6436C18.7683 27.0185 19.6161 26.6673 20.5002 26.6673C21.3842 26.6673 22.2321 27.0185 22.8572 27.6436C23.4823 28.2687 23.8335 29.1166 23.8335 30.0007V36.6673H33.8335V16.6673H37.1668L32.1668 12.6673V5.00065ZM13.8335 30.0007H10.5002V26.6673H13.8335V30.0007ZM13.8335 23.334H10.5002V20.0007H13.8335V23.334ZM23.8335 23.334H17.1668V20.0007H23.8335V23.334ZM30.5002 30.0007H27.1668V26.6673H30.5002V30.0007ZM30.5002 23.334H27.1668V20.0007H30.5002V23.334Z" fill={svgColor === 2 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span>Chalet</span>
                    </li>
                    <li>
                        <Link to="ActivetiesCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(3)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M37.3985 18.6962V14.7626C37.3985 12.8222 35.8196 11.2435 33.8786 11.2435C33.229 11.2435 32.6203 11.4211 32.0974 11.7291V11.2923C32.0974 9.35086 30.5182 7.77148 28.5771 7.77148C26.636 7.77148 25.0568 9.35086 25.0568 11.2923V18.6968H14.943V11.2923C14.943 9.35086 13.3637 7.77148 11.4226 7.77148C9.48148 7.77148 7.90227 9.35086 7.90227 11.2923V11.7291C7.3793 11.4211 6.7707 11.2435 6.12109 11.2435C4.18023 11.2435 2.60117 12.8221 2.60117 14.7626V18.6968H0V21.3055H2.60109V25.238C2.60109 27.1795 4.18 28.7588 6.12102 28.7588C6.77063 28.7588 7.3793 28.5812 7.90219 28.2731V28.7093C7.90219 30.6507 9.48141 32.2301 11.4225 32.2301C13.3636 32.2301 14.9429 30.6507 14.9429 28.7093V21.3055H25.0567V28.7093C25.0567 30.6507 26.6359 32.2301 28.577 32.2301C30.5181 32.2301 32.0973 30.6507 32.0973 28.7093V28.2731C32.6203 28.5813 33.2289 28.7588 33.8785 28.7588C35.8194 28.7588 37.3984 27.1795 37.3984 25.238V21.3048L39.9992 21.3055L40 18.6968L37.3985 18.6962Z" fill={svgColor === 3 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span>Activity</span>
                    </li>
                    <li>
                        <Link to="The_NatureCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(4)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <path d="M32.6446 27.6553L27.6514 21.9999H29.5658C30.129 21.9999 30.6271 21.6874 30.8646 21.1836C31.1021 20.6811 31.024 20.1049 30.6596 19.6806L25.7764 14.0001H27.582C28.1508 14.0001 28.6633 13.6658 28.8858 13.1495C29.1058 12.6414 29.0021 12.0502 28.6208 11.6446L21.7288 4.30233C21.3519 3.89922 20.6487 3.89922 20.2712 4.30233L13.3786 11.6446C12.9973 12.0502 12.8942 12.6414 13.1136 13.1495C13.3361 13.6658 13.8492 14.0001 14.418 14.0001H16.2236L11.3398 19.6818C10.9766 20.1055 10.8985 20.6811 11.1354 21.1843C11.3729 21.6874 11.8704 21.9999 12.4342 21.9999H14.3486L9.35536 27.6553C8.98035 28.0796 8.89534 28.6609 9.13285 29.1715C9.36723 29.6746 9.88287 29.9996 10.446 29.9996H19V31.5277L17.1068 34.5525C16.7743 35.2175 17.258 36 18.0012 36H23.9988C24.742 36 25.2257 35.2175 24.8932 34.5525L23 31.5277V29.9996H31.554C32.1171 29.9996 32.6328 29.6746 32.8672 29.1715C33.1047 28.6609 33.0197 28.0796 32.6446 27.6553Z" fill={svgColor === 4 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span>Nature</span>
                    </li>
                    <li>
                        <Link to="PoolCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(5)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none">
                                    <g clip-path="url(#clip0_1367_10357)">
                                        <path d="M39.2013 34.2433C35.3639 34.2433 35.3639 31.642 31.5265 31.642C27.689 31.642 27.689 34.2433 23.8516 34.2433C20.0147 34.2433 20.0147 31.642 16.1778 31.642C12.3411 31.642 12.3411 34.2433 8.50436 34.2433C4.66897 34.2433 4.66896 31.642 0.833496 31.642V26.1445C4.66889 26.1445 4.66889 28.7458 8.50436 28.7458C12.3411 28.7458 12.3411 26.1445 16.1778 26.1445C20.0147 26.1445 20.0147 28.7458 23.8516 28.7458C27.689 28.7458 27.689 26.1445 31.5265 26.1445C35.3639 26.1445 35.3639 28.7458 39.2013 28.7458" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M39.2013 34.2433C35.3639 34.2433 35.3639 31.642 31.5265 31.642C27.689 31.642 27.689 34.2433 23.8516 34.2433C20.0147 34.2433 20.0147 31.642 16.1778 31.642C12.3411 31.642 12.3411 34.2433 8.50436 34.2433C4.66897 34.2433 4.66896 31.642 0.833496 31.642V26.1445C4.66889 26.1445 4.66889 28.7458 8.50436 28.7458C12.3411 28.7458 12.3411 26.1445 16.1778 26.1445C20.0147 26.1445 20.0147 28.7458 23.8516 28.7458C27.689 28.7458 27.689 26.1445 31.5265 26.1445C35.3639 26.1445 35.3639 28.7458 39.2013 28.7458" stroke={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke-width="1.5625" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M39.2013 39.7394C35.3639 39.7394 35.3639 37.1381 31.5265 37.1381C27.689 37.1381 27.689 39.7394 23.8516 39.7394C20.0147 39.7394 20.0147 37.1381 16.1778 37.1381C12.3411 37.1381 12.3411 39.7394 8.50436 39.7394C4.66897 39.7394 4.66896 37.1381 0.833496 37.1381V31.6406C4.66889 31.6406 4.66889 34.2419 8.50436 34.2419C12.3411 34.2419 12.3411 31.6406 16.1778 31.6406C20.0147 31.6406 20.0147 34.2419 23.8516 34.2419C27.689 34.2419 27.689 31.6406 31.5265 31.6406C35.3639 31.6406 35.3639 34.2419 39.2013 34.2419" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M39.2013 39.7394C35.3639 39.7394 35.3639 37.1381 31.5265 37.1381C27.689 37.1381 27.689 39.7394 23.8516 39.7394C20.0147 39.7394 20.0147 37.1381 16.1778 37.1381C12.3411 37.1381 12.3411 39.7394 8.50436 39.7394C4.66897 39.7394 4.66896 37.1381 0.833496 37.1381V31.6406C4.66889 31.6406 4.66889 34.2419 8.50436 34.2419C12.3411 34.2419 12.3411 31.6406 16.1778 31.6406C20.0147 31.6406 20.0147 34.2419 23.8516 34.2419C27.689 34.2419 27.689 31.6406 31.5265 31.6406C35.3639 31.6406 35.3639 34.2419 39.2013 34.2419" stroke={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke-width="1.5625" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} />
                                        <path d="M33.8769 0.259766C32.0196 0.259766 30.2729 0.983047 28.9582 2.29656C27.6441 3.61063 26.9204 5.3575 26.9204 7.21531V12.7615H9.83504V7.21531C9.83504 5.94703 10.3291 4.75445 11.226 3.85766C12.1237 2.96086 13.3164 2.46695 14.5845 2.46695C17.2034 2.46695 19.3339 4.59703 19.3339 7.21531H21.5411C21.5411 3.38 18.4204 0.259766 14.5845 0.259766C12.7273 0.259766 10.9806 0.982891 9.66574 2.29656C8.3516 3.61063 7.62793 5.3575 7.62793 7.21531V33.7322H9.83512V30.4272H26.9205V33.7322L29.1277 32.099V7.21531C29.1277 5.94703 29.6218 4.75445 30.5186 3.85766C31.4162 2.96086 32.609 2.46695 33.8771 2.46695C36.4961 2.46695 38.6265 4.59703 38.6265 7.21531H40.8335C40.8335 3.38008 37.7128 0.259766 33.8769 0.259766ZM26.9204 14.9687V20.4908H9.83504V14.9687H26.9204ZM9.83504 28.2201V22.698H26.9204V28.2201H9.83504Z" fill={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke={svgColor === 5 ? "#004E6B" : "#A3A3A3"} stroke-width="1.5625" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1367_10357">
                                            <rect width="40" height="40" fill="white" transform="translate(0.833496)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Link>
                        <span>POOL</span>
                    </li>
                    <li>
                        <Link to="ConferencesCate" smooth={true} duration={500} onClick={() => ChangeSvgColor(6)} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M5.5 32.9551C5.5 34.6113 6.87574 35.9551 8.57143 35.9551H31.0952C32.7909 35.9551 34.1667 34.6113 34.1667 32.9551V15.9551H5.5V32.9551ZM25.9762 20.7051C25.9762 20.2926 26.3217 19.9551 26.744 19.9551H29.3036C29.7259 19.9551 30.0714 20.2926 30.0714 20.7051V23.2051C30.0714 23.6176 29.7259 23.9551 29.3036 23.9551H26.744C26.3217 23.9551 25.9762 23.6176 25.9762 23.2051V20.7051ZM25.9762 28.7051C25.9762 28.2926 26.3217 27.9551 26.744 27.9551H29.3036C29.7259 27.9551 30.0714 28.2926 30.0714 28.7051V31.2051C30.0714 31.6176 29.7259 31.9551 29.3036 31.9551H26.744C26.3217 31.9551 25.9762 31.6176 25.9762 31.2051V28.7051ZM17.7857 20.7051C17.7857 20.2926 18.1313 19.9551 18.5536 19.9551H21.1131C21.5354 19.9551 21.881 20.2926 21.881 20.7051V23.2051C21.881 23.6176 21.5354 23.9551 21.1131 23.9551H18.5536C18.1313 23.9551 17.7857 23.6176 17.7857 23.2051V20.7051ZM17.7857 28.7051C17.7857 28.2926 18.1313 27.9551 18.5536 27.9551H21.1131C21.5354 27.9551 21.881 28.2926 21.881 28.7051V31.2051C21.881 31.6176 21.5354 31.9551 21.1131 31.9551H18.5536C18.1313 31.9551 17.7857 31.6176 17.7857 31.2051V28.7051ZM9.59524 20.7051C9.59524 20.2926 9.94077 19.9551 10.3631 19.9551H12.9226C13.3449 19.9551 13.6905 20.2926 13.6905 20.7051V23.2051C13.6905 23.6176 13.3449 23.9551 12.9226 23.9551H10.3631C9.94077 23.9551 9.59524 23.6176 9.59524 23.2051V20.7051ZM9.59524 28.7051C9.59524 28.2926 9.94077 27.9551 10.3631 27.9551H12.9226C13.3449 27.9551 13.6905 28.2926 13.6905 28.7051V31.2051C13.6905 31.6176 13.3449 31.9551 12.9226 31.9551H10.3631C9.94077 31.9551 9.59524 31.6176 9.59524 31.2051V28.7051ZM31.0952 7.95508H28.0238V4.95508C28.0238 4.40508 27.5631 3.95508 27 3.95508H24.9524C24.3893 3.95508 23.9286 4.40508 23.9286 4.95508V7.95508H15.7381V4.95508C15.7381 4.40508 15.2774 3.95508 14.7143 3.95508H12.6667C12.1036 3.95508 11.6429 4.40508 11.6429 4.95508V7.95508H8.57143C6.87574 7.95508 5.5 9.29883 5.5 10.9551V13.9551H34.1667V10.9551C34.1667 9.29883 32.7909 7.95508 31.0952 7.95508Z" fill={svgColor === 6 ? "#004E6B" : "#A3A3A3"} />
                                </svg>
                            </div>
                        </Link>
                        <span>EVENTS</span>
                    </li>
                </ul>
                <div className='FilterBtns'>
                    <button
                        onClick={() => changfilternum(1)}
                        className={filternumber === 1 ? "btnFilterActil" : "btnFilterDis"}
                    ></button>
                    <button
                        onClick={() => changfilternum(2)}
                        className={filternumber === 2 ? "btnFilterActil" : "btnFilterDis"}
                    ></button>
                    <button
                        onClick={() => changfilternum(3)}
                        className={filternumber === 3 ? "btnFilterActil" : "btnFilterDis"}
                    ></button>
                    <button
                        onClick={() => changfilternum(4)}
                        className={filternumber === 4 ? "btnFilterActil" : "btnFilterDis"}
                    ></button>
                    <button
                        onClick={() => changfilternum(5)}
                        className={filternumber === 5 ? "btnFilterActil" : "btnFilterDis"}
                    ></button>
                    <button
                        onClick={() => changfilternum(6)}
                        className={filternumber === 6 ? "btnFilterActil" : "btnFilterDis"}
                    ></button>

                </div>
            </div>
        </>
    )
}
