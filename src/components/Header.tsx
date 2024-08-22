import React from "react";

const Header = () => {
  return (
    <header className="px-10 flex flex-row justify-between py-8">
      <div>
        {/* Logo */}
        <svg
          width="142"
          height="27"
          viewBox="0 0 142 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00579759 13.3654L17.1181 7.9939C17.8838 7.75026 18.7481 8.15051 18.7539 8.74799L18.8177 12.9478L0 18.8066V13.3654H0.00579759Z"
            fill="black"
          />
          <path
            d="M0.00585938 5.52285L17.414 0.0585286C18.0405 -0.138698 18.7482 0.18615 18.754 0.679216L18.8236 5.10521L0.00585938 10.964V5.52285Z"
            fill="black"
          />
          <path
            d="M10.6966 21.481L0 18.1514V22.5484C0 23.1865 0.527869 23.7607 1.33998 24.0159L10.6966 26.9511V21.481Z"
            fill="black"
          />
          <path
            d="M31.5852 19.2328H34.0505V14.83H40.298V12.6373H34.0505V10.0328H41.4001V7.71826H31.5852V19.2328Z"
            fill="black"
          />
          <path
            d="M53.2859 9.19159C52.7407 8.67532 52.0736 8.26927 51.3137 7.99083C50.5538 7.70659 49.7011 7.56738 48.7903 7.56738C47.8796 7.56738 47.0211 7.71239 46.2612 7.99083C45.5013 8.27507 44.84 8.67532 44.2889 9.19159C43.7437 9.70786 43.3144 10.3344 43.0128 11.0537C42.7111 11.773 42.5603 12.5735 42.5603 13.4378C42.5603 14.3021 42.7111 15.1142 43.0128 15.8393C43.3144 16.5644 43.7437 17.2025 44.2889 17.7246C44.8342 18.2466 45.4955 18.6585 46.2612 18.9485C47.0211 19.2385 47.8738 19.3836 48.7961 19.3836C49.7185 19.3836 50.5654 19.2385 51.3253 18.9485C52.0852 18.6585 52.7523 18.2466 53.2975 17.7246C53.8428 17.2025 54.2721 16.5644 54.5737 15.8393C54.8754 15.1142 55.0262 14.3079 55.0262 13.4378C55.0262 12.5677 54.8754 11.773 54.5737 11.0537C54.2721 10.3344 53.8428 9.70786 53.2975 9.19159H53.2917H53.2859ZM48.7845 17.0459C48.2393 17.0459 47.7346 16.9589 47.2763 16.7906C46.8181 16.6224 46.4178 16.3788 46.0814 16.0655C45.7507 15.7523 45.4839 15.3752 45.2983 14.9344C45.1126 14.4935 45.014 13.9946 45.014 13.4378C45.014 12.8809 45.1068 12.3878 45.2983 11.947C45.4839 11.5119 45.7507 11.1407 46.0814 10.839C46.4178 10.5374 46.8181 10.2996 47.2763 10.1429C47.7346 9.98051 48.2451 9.89931 48.7903 9.89931C49.3356 9.89931 49.8403 9.98051 50.3043 10.1429C50.7626 10.2996 51.1629 10.5374 51.4935 10.839C51.8241 11.1407 52.0852 11.5119 52.2766 11.947C52.468 12.382 52.5608 12.8809 52.5608 13.4378C52.5608 13.9946 52.468 14.4935 52.2766 14.9344C52.0852 15.3752 51.8241 15.7581 51.4877 16.0655C51.1571 16.3788 50.7568 16.6224 50.2985 16.7906C49.8403 16.9589 49.3298 17.0459 48.7903 17.0459H48.7845Z"
            fill="black"
          />
          <path
            d="M66.2217 15.004C66.5349 14.7488 66.7959 14.453 66.999 14.1223C67.2078 13.7975 67.3586 13.432 67.4572 13.0434C67.5558 12.6547 67.6022 12.2429 67.6022 11.8194C67.6022 11.1871 67.5036 10.607 67.3006 10.1024C67.0976 9.5919 66.7901 9.15685 66.3783 8.7972C65.9722 8.44335 65.4502 8.17651 64.8353 7.99088C64.2262 7.81106 63.5011 7.71826 62.6716 7.71826H57.1086V19.2328H59.574V16.0482H62.6658L64.6671 19.2328H67.6777L65.3109 15.5667C65.6532 15.4101 65.9606 15.2245 66.2275 15.0098L66.2217 15.004ZM65.0267 11.8136C65.0267 12.1094 64.9803 12.3821 64.8875 12.6199C64.7947 12.8578 64.6554 13.055 64.4698 13.2174C64.2784 13.3856 64.0406 13.5133 63.7563 13.6061C63.4663 13.6989 63.1182 13.7511 62.7296 13.7511H59.574V10.0096H62.7296C63.5127 10.0096 64.0986 10.172 64.4756 10.4852C64.8469 10.7985 65.0267 11.2277 65.0267 11.8078V11.8136Z"
            fill="black"
          />
          <path
            d="M83.2758 7.71235L80.329 15.0793L79.9519 16.3613L79.4589 15.091L78.4031 12.4632L80.3812 7.70654H77.8231L77.1966 9.58022L76.5237 7.70654H73.9655L75.9436 12.4632L74.8995 15.0503L74.505 16.3671L73.9946 15.0387L71.071 7.71235H68.3794L73.2114 19.2269H75.5434L76.5469 16.9066L77.1734 15.1548L77.7999 16.9124L78.786 19.2269H81.1237L85.95 7.71235H83.2584H83.2758Z"
            fill="black"
          />
          <path
            d="M109.043 15.004C109.356 14.7488 109.617 14.453 109.82 14.1223C110.029 13.7975 110.18 13.432 110.279 13.0434C110.377 12.6547 110.424 12.2429 110.424 11.8194C110.424 11.1871 110.325 10.607 110.122 10.1024C109.919 9.5919 109.611 9.15685 109.2 8.7972C108.794 8.44335 108.271 8.17651 107.657 7.99088C107.047 7.81106 106.322 7.71826 105.493 7.71826H99.9299V19.2328H102.395V16.0482H105.487L107.488 19.2328H110.499L108.132 15.5667C108.474 15.4101 108.782 15.2245 109.049 15.0098L109.043 15.004ZM107.848 11.8136C107.848 12.1094 107.802 12.3821 107.709 12.6199C107.616 12.8578 107.477 13.055 107.291 13.2174C107.1 13.3856 106.862 13.5133 106.578 13.6061C106.288 13.6989 105.94 13.7511 105.551 13.7511H102.395V10.0096H105.551C106.334 10.0096 106.92 10.172 107.297 10.4852C107.668 10.7985 107.848 11.2277 107.848 11.8078V11.8136Z"
            fill="black"
          />
          <path
            d="M121.874 9.24382C121.312 8.75075 120.592 8.36789 119.734 8.10685C118.887 7.84582 117.872 7.7124 116.723 7.7124H112.674V19.227H116.741C117.889 19.2328 118.904 19.0877 119.751 18.7977C120.604 18.5076 121.323 18.1016 121.886 17.5853C122.449 17.0691 122.878 16.4426 123.151 15.7349C123.423 15.0272 123.562 14.2499 123.562 13.4204C123.562 12.5503 123.423 11.7497 123.145 11.0479C122.866 10.3402 122.437 9.73108 121.869 9.23801L121.874 9.24382ZM117.257 16.9415H115.14V10.0153H117.257C117.883 10.0153 118.434 10.0965 118.904 10.259C119.363 10.4156 119.757 10.6476 120.065 10.9376C120.366 11.2277 120.604 11.5873 120.755 11.9992C120.911 12.4168 120.987 12.9041 120.987 13.4262C120.987 13.9483 120.906 14.4529 120.755 14.888C120.604 15.3172 120.366 15.6885 120.065 15.9901C119.757 16.2918 119.368 16.5296 118.904 16.6978C118.434 16.866 117.883 16.9472 117.263 16.9472L117.257 16.9415Z"
            fill="black"
          />
          <path
            d="M128.168 7.56738H125.691V19.082H128.168V7.56738Z"
            fill="black"
          />
          <path
            d="M139.375 7.56738V11.1175L132.942 7.56738H130.593V19.082H133.052V10.4214L139.369 13.8844V19.082H141.835V7.56738H139.369H139.375Z"
            fill="black"
          />
          <path
            d="M90.904 7.7124L85.7703 19.227H88.3806L92.1685 10.6128L96.0725 19.227H98.677L93.3867 7.7124H90.904Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Hambuger */}
      <div>
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.834961"
            y="0.463379"
            width="22.9054"
            height="4.40488"
            rx="2.20244"
            fill="#3366FF"
          />
          <rect
            x="0.834961"
            y="9.27295"
            width="22.9054"
            height="4.40488"
            rx="2.20244"
            fill="#3366FF"
          />
          <rect
            x="0.834961"
            y="18.083"
            width="22.9054"
            height="4.40488"
            rx="2.20244"
            fill="#3366FF"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
