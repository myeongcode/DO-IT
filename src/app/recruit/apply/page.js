'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { upload } from '@vercel/blob/client';
import { AnimatePresence, motion } from 'framer-motion';
import FieldsForm from '@/app/(components)/(apply)/FieldsForm';
import CategoriesForm from '@/app/(components)/(apply)/CategoriesForm';
import InformForm from '@/app/(components)/(apply)/InformForm';
import AttendForm from '@/app/(components)/(apply)/AttendForm';
import Q1Form from '@/app/(components)/(apply)/Q1Form';
import Q2Form from '@/app/(components)/(apply)/Q2Form';
import Q3Form from '@/app/(components)/(apply)/Q3Form';
import Q4Form from '@/app/(components)/(apply)/Q4Form';
import Q5Form from '@/app/(components)/(apply)/Q5Form';
import Q6Form from '@/app/(components)/(apply)/Q6Form';
import TermForm from '@/app/(components)/(apply)/TermForm';
import CompleteForm from '@/app/(components)/(apply)/CompleteForm';
import Link from 'next/link';

export default function Apply() {
  const [formData, setFormData] = useState({
    field: '',
    category: '',
    name: '',
    stdID: '',
    major: '',
    phone: '',
    email: '',
    grade: '',
    semester: '',
    attend: null,
    q1: '',
    q2: '',
    q3: '',
    q4Exp: null,
    q4: '',
    q5: '',
    q6Link: '',
    q6File: '',
    informTerm: null,
    portfolioTerm: null,
  });

  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(100 / 12);
  const [page, setPage] = useState(0);

  function PageDisplay() {
    if (page === 0) {
      return <FieldsForm setFormData={setFormData} formData={formData} />;
    } else if (page === 1) {
      return <CategoriesForm setFormData={setFormData} formData={formData} />;
    } else if (page === 2) {
      return <InformForm setFormData={setFormData} formData={formData} />;
    } else if (page === 3) {
      return <AttendForm setFormData={setFormData} formData={formData} />;
    } else if (page === 4) {
      return <Q1Form setFormData={setFormData} formData={formData} />;
    } else if (page === 5) {
      return <Q2Form setFormData={setFormData} formData={formData} />;
    } else if (page === 6) {
      return <Q3Form setFormData={setFormData} formData={formData} />;
    } else if (page === 7) {
      return <Q4Form setFormData={setFormData} formData={formData} />;
    } else if (page === 8) {
      return <Q5Form setFormData={setFormData} formData={formData} />;
    } else if (page === 9) {
      return <Q6Form setFormData={setFormData} formData={formData} />;
    } else if (page === 10) {
      return <TermForm setFormData={setFormData} formData={formData} />;
    } else if (page === 11) {
      return <CompleteForm setFormData={setFormData} formData={formData} />;
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    const jsonData = formData;
    console.log(jsonData);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    // const response = await fetch(`/api/apply`, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result) {
    //       return result;
    //     }
    //   });

    //console.log(response);

    // const formData = new FormData(e.target);
    // const jsonData = {};
    // const file = inputFileRef.current.files[0];

    // const newBlob = await upload(file.name, file, {
    //   access: 'public',
    //   handleUploadUrl: '/api/apply/uploads',
    // });

    // setBlob(newBlob);

    // formData.forEach((value, key) => {
    //   jsonData[key] = value;
    // });

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(jsonData),
    // };

    // fetch(`/api/apply`, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result) router.replace('/');
    //   });
  }

  function onChange(e) {
    setExpProject(JSON.parse(e.target.value));
  }

  return (
    <div className="flex pt-[105px] w-full justify-center py-20">
      <div className="flex flex-col w-[60%] font-suit font-bold">
        <div className="text-5xl pt-20 leading-snug">
          <span className="text-[#00B8FF]">DO IT.</span>
          <br />
          <span>신규부원 모집신청</span>
        </div>

        {/* Form Step */}
        <div className="py-10">
          <div className="w-full h-[8px] bg-[#D9D9D9]">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${currentStep}%`,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-full bg-[#00B8FF]"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} action="/">
          {PageDisplay()}
          <div
            className={`flex w-full  ${
              page === 11 ? 'justify-center' : 'justify-end'
            } font-pretend pt-20`}
          >
            <div
              className={`flex flex-row text-2xl ${
                page === 11 ? 'space-x-0' : 'space-x-4'
              }`}
            >
              {page === 0 || page === 11 ? null : (
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentStep((currStep) => currStep - 100 / 12);
                    setPage((currPage) => currPage - 1);
                  }}
                  whileHover={{
                    backgroundColor: '#D6DBDF',
                  }}
                  className="py-3 px-14 rounded-full bg-[#E1E8ED] text-[#657786]"
                >
                  이전
                </motion.button>
              )}
              {page === 10 ? (
                <motion.button
                  type="submit"
                  onClick={(e) => {
                    setCurrentStep((currStep) => currStep + 100 / 12);
                    setPage((currPage) => currPage + 1);
                  }}
                  whileHover={{
                    backgroundColor: '#00ADF2',
                  }}
                  className="py-3 px-14 rounded-full bg-[#00B8FF] text-[#FFFFFF]"
                >
                  제출
                </motion.button>
              ) : (
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentStep((currStep) => currStep + 100 / 12);
                    setPage((currPage) => currPage + 1);
                  }}
                  whileHover={{
                    backgroundColor: '#00ADF2',
                  }}
                  className={`py-3 px-14 rounded-full bg-[#00B8FF] text-[#FFFFFF] ${
                    page === 11 ? 'hidden' : 'block'
                  }`}
                >
                  다음
                </motion.button>
              )}
              {page === 11 && (
                <Link href="/">
                  <motion.button
                    whileHover={{
                      backgroundColor: '#00ADF2',
                    }}
                    className="py-3 px-14 rounded-full bg-[#00B8FF] text-[#FFFFFF]"
                  >
                    완료
                  </motion.button>
                </Link>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
