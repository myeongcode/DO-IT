import Admin from '@/app/(model)/admin';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const moment = require('moment');

export async function GET() {
  try {
    const admins = await Admin.find();
    return NextResponse.json({ admins }, { status: 200 });
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
    const admins = await Admin.find();
    const data = await request.json();

    if (data.id === admins[0].id && data.password === admins[0].password) {
      const tokenData = {
        id: data.id,
      };

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: '1h',
      });

      if (!token) {
        return NextResponse.json(
          {
            message: '토큰 만료',
          },
          {
            status: 404,
          }
        );
      }

      const response = NextResponse.json(
        {
          message: '로그인 완료!',
        },
        { status: 200 }
      );
      response.cookies.set('AccessToken', token);

      return response;
    } else {
      return NextResponse.json(
        {
          message: '아이디 또는 비밀번호가 잘못되었습니다.',
        },
        {
          status: 401,
        }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: e.message,
      },
      {
        status: 500,
      }
    );
  }
}
