'use client';
import { useEffect } from 'react';

const KAKAO_MAP_API_KEY = 'e5b220157079995c894fbc9f1f293d2b';

export default function Contact() {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            37.28185499701476,
            127.90055002771852
          ),
          level: 2,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(
          37.28185499701476,
          127.90055002771852
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center pt-[105px] text-[#14171A] font-suit">
      <div className="flex flex-col py-20 w-[90%] md:w-[56%]">
        <div>
          <h1 className="text-[7.6vw] md:text-4xl font-semibold pb-20">
            CONTACT US
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between py-10 space-x-5">
            <span className="text-[4.4vw] md:text-3xl">E-MAIL</span>
            <span className="text-[4vw] md:text-xl font-pretend text-[#657786]">
              yonsei.do.it@gmail.com
            </span>
          </div>
          <hr />
          <div className="flex flex-row items-center justify-between py-10 space-x-10">
            <span className="text-[4.4vw] md:text-3xl">LOCATION</span>
            <span className="text-[3vw] md:text-xl font-pretend text-[#657786]">
              연세대학교 미래캠퍼스 컨버전스홀 201호 학생창업보육실
            </span>
          </div>
          <div id="map" className="w-full h-96"></div>
        </div>
      </div>
    </div>
  );
}
