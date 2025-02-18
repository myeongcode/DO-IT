import Admin from '@/app/(model)/admin';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// GET요청이 따로 필요없음
// export async function GET(request) {
//   const token = request.cookies.get('AccessToken')?.value;

//   if (!token) {
//     return NextResponse.json(
//       { message: '토큰이 존재하지 않습니다.' },
//       { status: 401 }
//     );
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//     return NextResponse.json(
//       { message: '토큰 검증 완료', decoded },
//       { status: 200 }
//     );
//   } catch (e) {
//     return NextResponse.json(
//       {
//         message: '유효하지 않은 토큰',
//         e,
//       },
//       { status: 500 }
//     );
//   }
// }

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
