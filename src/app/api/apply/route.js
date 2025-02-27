import Applicant from '@/app/(model)/applicants';
import { NextResponse } from 'next/server';
import moment from 'moment-timezone';
// import { jwtDecode } from 'jwt-decode';
import jwt from 'jsonwebtoken';
import dbConnect from '@/app/lib/dbConnect';

export async function GET(request) {
  const token = request.cookies.get('AccessToken')?.value;

  if (!token) {
    return NextResponse.json(
      { message: '토큰이 존재하지 않습니다.' },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decoded.length < 0) {
      return;
    }
    const applicants = await Applicant.find();
    return NextResponse.json({ applicants }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: '토큰이 유효하지 않음',
        e,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
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

    const date = moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
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
