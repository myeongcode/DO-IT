import Image from 'next/image';

export default function CompleteForm({ response }) {
  return (
    <div className="flex flex-col w-full font-suit">
      <div className="flex flex-row w-full justify-center">
        {response ? (
          <div className="flex flex-col pt-10 items-center space-y-20">
            <span className="text-5xl">지원서 제출이 완료되었습니다!</span>
            <span className="text-xl text-center">
              1기 모집에 지원해주셔서 감사합니다.
              <br /> 추후 자세한 면접일정은 이메일로 공지드리도록 하겠습니다.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="50"
              viewBox="0 0 100 25"
              fill="none"
            >
              <path
                d="M86.9326 9.92935H81.2217V24.9074H86.9326V9.92935Z"
                fill="#14171A"
              />
              <path
                d="M94.2907 -0.00787354H73.8628V4.93887H94.2907V-0.00787354Z"
                fill="#14171A"
              />
              <path
                d="M71.0437 0.0513458H65.3418V24.9268H71.0437V0.0513458Z"
                fill="#14171A"
              />
              <path
                d="M22.0934 7.11853C21.4717 5.56752 20.6042 4.25998 19.4947 3.19849C18.3839 2.13572 17.0595 1.33573 15.5227 0.798549C13.9846 0.261363 12.2997 -0.00787354 10.4694 -0.00787354H0V4.97494H10.2133C12.3602 4.97494 14.0515 5.61003 15.2833 6.88021C16.515 8.15039 17.1316 10.0067 17.1316 12.4492C17.1316 14.8916 16.515 16.7479 15.2833 18.0181C14.0502 19.2883 12.3602 19.9234 10.2133 19.9234H5.71096V9.92942H0V24.9075H10.4694C12.2997 24.9075 13.9833 24.6395 15.5214 24.1011C17.0595 23.5639 18.3827 22.7639 19.4934 21.7011C20.6042 20.6384 21.4705 19.3385 22.0921 17.7991C22.7151 16.2597 23.0253 14.4781 23.0253 12.4492C23.0253 10.4202 22.7138 8.66954 22.0921 7.11853H22.0934Z"
                fill="#14171A"
              />
              <path
                d="M100.001 19.9724H94.2896V24.9269H100.001V19.9724Z"
                fill="#14171A"
              />
              <path
                d="M39.5773 24.9075L31.3912 12.4505L39.576 -0.00787354H32.6899L27.9636 7.23318L26.0201 10.2102C25.132 11.5706 25.132 13.329 26.0201 14.6894L27.9624 17.6652L32.6887 24.9075H39.5773Z"
                fill="#00B8FF"
              />
              <path
                d="M42.897 24.9075L51.0831 12.4505L42.8983 -0.00787354H49.7844L54.5107 7.23318L56.4542 10.2102C57.3423 11.5706 57.3423 13.329 56.4542 14.6894L54.512 17.6652L49.7856 24.9075H42.897Z"
                fill="#00B8FF"
              />
            </svg>
          </div>
        ) : (
          <div className="my-40" role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}
