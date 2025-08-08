import React from "react";
import "./home.scss";
import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from "devextreme-react/responsive-box";
import { Link } from "react-router-dom";
import settingsIcon from "../../assets/images/icons/setting.svg";
import cardIcon from "../../assets/images/icons/card.svg";
import searchIcon from "../../assets/images/icons/search-normal-2.svg";
import exposureIcon from "../../assets/images/icons/svgexport-17 1.svg";
import importManagerIcon from "../../assets/images/icons/svgexport-18 1.svg";
import logisticsIcon from "../../assets/images/icons/location.svg";
import positionIcon from "../../assets/images/icons/svgexport-20 1.svg";
import snapshotIcon from "../../assets/images/icons/setting-3.svg";
import varIcon from "../../assets/images/icons/svgexport-22 1.svg";

import systemUpgradeIcon from "../../assets/images/icons/fi_1672594.svg";
import priceAlertIcon from "../../assets/images/icons/fi_3239957.svg";
import dataSyncIcon from "../../assets/images/icons/Frame.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import PNLSection from "../../components/PNL/PNL";
import DonutChart from "../../components/DonutChart/DonutChart";
import LineChart from "../../components/LineChart/LineChart";
const screen = (width) => {
  if (width < 768) return "sm"; // Small: phones
  if (width < 1200) return "md"; // Medium: tablets
  return "xl"; // Large: desktops
};

export default function Home() {
  return (
    <React.Fragment>
      <ResponsiveBox screenByWidth={screen} singleColumnScreen='sm'>
        {/* Main Layout */}
        <Row />
        <Row />
        <Row />
        <Row />

        <Col ratio={9} screen='xl' />
        <Col ratio={3} screen='xl' />
        <Col ratio={1} screen='md' />
        <Col ratio={1} screen='sm' />

        {/* Left Side: col-xl-9 with nested layout */}
        <Item>
          <Location row={0} col={0} screen='xl' />
          <Location row={0} col={0} screen='md' />
          <Location row={0} col={0} screen='sm' />
          <div style={{}}>
            <ResponsiveBox screenByWidth={screen} singleColumnScreen='sm'>
              {/* Two rows for nested layout */}
              <Row /> {/* Row 0: for two col-xl-6 */}
              <Row /> {/* Row 1: for col-xl-12 */}
              <Row /> {/* Row 1: for col-xl-12 */}
              <Col ratio={1} screen='sm' />
              <Col ratio={1} screen='md' />
              <Col ratio={1} screen='md' />
              <Col ratio={1} screen='xl' />
              <Col ratio={1} screen='xl' />
              {/* Nested col-xl-6 (1) */}
              <Item>
                <Location row={0} col={0} screen='sm' />
                <Location row={0} col={0} screen='md' />
                <Location row={0} col={0} screen='xl' />
                <div style={{ height: "100%" }}>
                  <div class='chart-card w-100'>
                    <div class='chart-header'>
                      <h3>Distribution by Mode</h3>
                      <div class='chart-icons'>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='12'
                            viewBox='0 0 14 12'
                            fill='none'
                          >
                            <path
                              d='M1.75 7.625V8.9375C1.75 9.2856 1.88828 9.61944 2.13442 9.86558C2.38056 10.1117 2.7144 10.25 3.0625 10.25H10.9375C11.2856 10.25 11.6194 10.1117 11.8656 9.86558C12.1117 9.61944 12.25 9.2856 12.25 8.9375V7.625M9.625 5L7 7.625M7 7.625L4.375 5M7 7.625V1'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                          >
                            <path
                              d='M8.48758 12.6408C10.9901 11.9817 12.8334 9.70667 12.8334 7C12.8334 3.78001 10.2434 1.16667 7.00008 1.16667C3.10925 1.16667 1.16675 4.41 1.16675 4.41M1.16675 4.41V1.75001M1.16675 4.41H2.33925H3.75675'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M1.16675 7C1.16675 10.22 3.78008 12.8333 7.00008 12.8333'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-dasharray='3 3'
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                          >
                            <path
                              d='M1.75 5.31417V8.68C1.75 9.91667 1.75 9.91667 2.91667 10.7042L6.125 12.5592C6.60917 12.8392 7.39667 12.8392 7.875 12.5592L11.0833 10.7042C12.25 9.91667 12.25 9.91667 12.25 8.68584V5.31417C12.25 4.08333 12.25 4.08333 11.0833 3.29583L7.875 1.44083C7.39667 1.16083 6.60917 1.16083 6.125 1.44083L2.91667 3.29583C1.75 4.08333 1.75 4.08333 1.75 5.31417Z'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <DonutChart />
                  </div>
                </div>
              </Item>
              {/* Nested col-xl-6 (2) */}
              <Item>
                <Location row={0} col={1} screen='xl' />
                <Location row={0} col={1} screen='md' />
                <Location row={1} col={0} screen='sm' />
                <div className='linechart-container' style={{}}>
                  <div class='chart-card w-100'>
                    <div class='chart-header'>
                      <h3>Price Trend Analysis</h3>
                      <div class='chart-icons'>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='12'
                            viewBox='0 0 14 12'
                            fill='none'
                          >
                            <path
                              d='M1.75 7.625V8.9375C1.75 9.2856 1.88828 9.61944 2.13442 9.86558C2.38056 10.1117 2.7144 10.25 3.0625 10.25H10.9375C11.2856 10.25 11.6194 10.1117 11.8656 9.86558C12.1117 9.61944 12.25 9.2856 12.25 8.9375V7.625M9.625 5L7 7.625M7 7.625L4.375 5M7 7.625V1'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                          >
                            <path
                              d='M8.48758 12.6408C10.9901 11.9817 12.8334 9.70667 12.8334 7C12.8334 3.78001 10.2434 1.16667 7.00008 1.16667C3.10925 1.16667 1.16675 4.41 1.16675 4.41M1.16675 4.41V1.75001M1.16675 4.41H2.33925H3.75675'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M1.16675 7C1.16675 10.22 3.78008 12.8333 7.00008 12.8333'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-dasharray='3 3'
                            />
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                          >
                            <path
                              d='M1.75 5.31417V8.68C1.75 9.91667 1.75 9.91667 2.91667 10.7042L6.125 12.5592C6.60917 12.8392 7.39667 12.8392 7.875 12.5592L11.0833 10.7042C12.25 9.91667 12.25 9.91667 12.25 8.68584V5.31417C12.25 4.08333 12.25 4.08333 11.0833 3.29583L7.875 1.44083C7.39667 1.16083 6.60917 1.16083 6.125 1.44083L2.91667 3.29583C1.75 4.08333 1.75 4.08333 1.75 5.31417Z'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z'
                              stroke='#C0C4CF'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class='d-flex justify-content-end align-items-center year'>
                      <button>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                        >
                          <path
                            d='M7.02023 9.64645C6.82496 9.84171 6.82496 10.1583 7.02023 10.3536L10.8131 14.1464C11.1281 14.4614 11.6667 14.2383 11.6667 13.7929V6.20711C11.6667 5.76165 11.1281 5.53857 10.8131 5.85355L7.02023 9.64645Z'
                            fill='#C0C4CF'
                          ></path>
                        </svg>
                      </button>
                      <p>Year 2025</p>
                      <button>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                        >
                          <path
                            d='M12.9798 9.64645C13.1751 9.84171 13.1751 10.1583 12.9798 10.3536L9.1869 14.1464C8.87192 14.4614 8.33334 14.2383 8.33334 13.7929V6.20711C8.33334 5.76165 8.87191 5.53857 9.1869 5.85355L12.9798 9.64645Z'
                            fill='#C0C4CF'
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <LineChart />
                  </div>
                </div>
              </Item>
              {/* Nested col-xl-12 */}
              <Item>
                <Location row={1} col={0} colspan={2} screen='xl' />
                <Location row={2} col={0} colspan={2} screen='md' />
                <Location row={2} col={0} screen='sm' />

                <PNLSection />
              </Item>
            </ResponsiveBox>
          </div>
        </Item>

        {/* Right Side: col-xl-3 */}
        <Item>
          <Location row={0} col={1} screen='xl' />
          <Location row={1} col={0} screen='md' />
          <Location row={0} col={0} screen='sm' />
          <div style={{}}>
            <div class='quick-links'>
              <h4>Quick Links</h4>
              <ul class='list__unstyled'>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={settingsIcon} alt='' />
                      Bulk Operations
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={cardIcon} alt='' />
                      Credit Exposure
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={searchIcon} alt='' />
                      Dynamic Query
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={exposureIcon} alt='' />
                      Exposure Detail
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={importManagerIcon} alt='' />
                      Import Manager
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={logisticsIcon} alt='' />
                      Logistics
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={positionIcon} alt='' />
                      Position Detail
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={snapshotIcon} alt='' />
                      System Snapshots
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={varIcon} alt='' />
                      VaR
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div class='notifications'>
              <div class='notifications-header'>
                <h3 class='sec-title__title'>Notifications</h3>
                <p>12</p>
              </div>
              <div class='notification-cards'>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={systemUpgradeIcon} alt='' />
                      System Upgrade
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src='/assets/images/icons/fi_3239957.svg' alt='' />
                      Price Alert
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={dataSyncIcon} alt='' />
                      Data Sync Complete
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={priceAlertIcon} alt='' />
                      Price Alert
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={priceAlertIcon} alt='' />
                      Price Alert
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Item>
      </ResponsiveBox>
    </React.Fragment>
  );
}
