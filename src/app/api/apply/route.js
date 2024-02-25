import Applicant from '@/app/(model)/applicants';
import { NextResponse } from 'next/server';

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
  try {
    const body = await request.json();
    const {
      field,
      category,
      name,
      stdID,
      major,
      phone,
      email,
      grade,
      semester,
      attend,
      q1,
      q2,
      q3,
      q4Exp,
      q4,
      q5,
      q6Link,
      q6File,
      informTerm,
      portfolioTerm,
    } = body;

    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const newApplicant = await Applicant.create({
      field,
      category,
      name,
      stdID,
      major,
      phone,
      email,
      grade,
      semester,
      attend,
      q1,
      q2,
      q3,
      q4Exp,
      q4,
      q5,
      q6Link,
      q6File,
      informTerm,
      portfolioTerm,
      createdAt: date,
    });
    console.log(
      `새로운 ${newApplicant.name} 지원자 Data 생성 - ${newApplicant._id}`
    );
    return NextResponse.json(
      {
        message: '등록 완료!',
      },
      {
        status: 201,
      }
    );
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
