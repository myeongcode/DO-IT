'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { upload } from '@vercel/blob/client';
import { motion } from 'framer-motion';
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
import { getSignedURL } from '@/app/(model)/actions';

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
  const [activeBtn, setActiveBtn] = useState(false);
  const [response, setResponse] = useState();
  const [file, setFile] = useState(undefined);
  const [fileUrl, setFileUrl] = useState(undefined);

  useEffect(() => {
    setActiveBtn(isPageValid(page));
  }, [page, formData]);

  function isPageValid(page) {
    switch (page) {
      case 0:
        return formData.field !== '';
      case 1:
        return formData.category !== '';
      case 2:
        return (
          formData.name !== '' &&
          formData.stdID !== '' &&
          formData.major !== '' &&
          formData.phone !== '' &&
          formData.email !== ''
        );
      case 3:
        return (
          formData.grade !== '' &&
          formData.semester !== '' &&
          formData.attend !== null
        );
      case 4:
        return formData.q1 !== '';
      case 5:
        return formData.q2 !== '';
      case 6:
        return formData.q3 !== '';
      case 7:
        return formData.q4Exp !== null && formData.q4 !== '';
      case 8:
        return formData.q5 !== '';
      case 9:
        return true;
      case 10:
        return formData.informTerm === true && formData.portfolioTerm === true;
      default:
        return false;
    }
  }

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
      return (
        <Q6Form
          setFormData={setFormData}
          formData={formData}
          setFile={setFile}
          file={file}
          setFileUrl={setFileUrl}
          fileUrl={fileUrl}
        />
      );
    } else if (page === 10) {
      return <TermForm setFormData={setFormData} formData={formData} />;
    } else if (page === 11) {
      return <CompleteForm response={response} />;
    }
  }

  async function computeSHA256(file) {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const jsonData = formData;
    try {
      if (file) {
        const checksum = await computeSHA256(file);
        const signedURLResult = await getSignedURL(
          file.type,
          file.size,
          checksum,
          formData.name
        );
        const url = signedURLResult.success.url;
        jsonData.q6File = url.split('?')[0];
        await fetch(url, {
          method: 'PUT',
          body: file,
          headers: {
            'Content-Type': file?.type,
          },
        });
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      };

      await fetch(`/api/apply`, options)
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setResponse(result);
          }
        });
    } catch (e) {
      console.error(e);
    }
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
                  className="py-3 px-14 rounded-full bg-[#00B8FF] text-[#FFFFFF] disabled:opacity-45"
                  disabled={!activeBtn}
                >
                  제출
                </motion.button>
              ) : (
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveBtn(false);
                    setCurrentStep((currStep) => currStep + 100 / 12);
                    setPage((currPage) => currPage + 1);
                  }}
                  whileHover={{
                    backgroundColor: '#00ADF2',
                  }}
                  className={`py-3 px-14 rounded-full bg-[#00B8FF] text-[#FFFFFF] disabled:opacity-45 ${
                    page === 11 ? 'hidden' : 'block'
                  }`}
                  disabled={!activeBtn}
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
