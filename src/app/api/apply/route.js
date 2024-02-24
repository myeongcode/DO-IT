import Applicant from '@/app/(model)/applicants';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

const moment = require('moment');

export async function GET() {
  try {
    const applicants = await Applicant.find();
    return NextResponse.json({ applicants }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Error',
        e,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (filename) {
    const blob = await put(filename, request.body, {
      access: 'public',
    });

    return NextResponse.json(blob);
  } else {
    NextResponse.json({ message: 'No filename detected' });
  }

  // try {
  //   const body = await request.json();
  //   const {
  //     field,
  //     name,
  //     std_id,
  //     major,
  //     phone_num,
  //     email,
  //     grade,
  //     semester,
  //     attend,
  //     category,
  //     question_01,
  //     question_02,
  //     question_03,
  //     question_04,
  //     question_05,
  //   } = body;
  //   const date = moment().format('YYYY-MM-DD HH:mm:ss');
  //   const newApplicant = await Applicant.create({
  //     field,
  //     name,
  //     std_id,
  //     major,
  //     phone_num,
  //     email,
  //     grade,
  //     semester,
  //     attend,
  //     category,
  //     question_01,
  //     question_02,
  //     question_03,
  //     question_04,
  //     question_05,
  //     createdAt: date,
  //   });
  //   console.log(
  //     `새로운 ${newApplicant.name} 지원자 Data 생성 - ${newApplicant._id}`
  //   );
  //   return NextResponse.json(
  //     {
  //       message: '등록 완료!',
  //     },
  //     {
  //       status: 201,
  //     }
  //   );
  // } catch (e) {
  //   return NextResponse.json(
  //     {
  //       message: 'Error',
  //       e,
  //     },
  //     { status: 500 }
  //   );
  // }
}
