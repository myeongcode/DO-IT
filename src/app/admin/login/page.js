'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function AdminLogin() {
  const [admin, setAdmin] = useState({
    id: '',
    password: '',
  });
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const loginData = admin;

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      };

      const response = await fetch(`/api/admin`, options);
      const json = await response.json();
      if (response.status === 200) {
        toast.success(json.message);
        router.push('/admin');
      } else toast.error(json.message);
    } catch (e) {
      console.log('Login failed : ', e.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen font-suit">
      <form
        onSubmit={onSubmit}
        className="flex flex-col p-10 rounded-xl shadow-[0px_0px_20px_5px_#E2E2E2] text-[#14171A] w-[400px] space-y-10"
      >
        <h1 className="text-2xl font-semibold">어드민 로그인</h1>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row justify-between items-center">
            <label>아이디</label>
            <input
              type="text"
              name="id"
              value={admin.id}
              onChange={(e) => setAdmin({ ...admin, id: e.target.value })}
              className="p-2 border-b outline-none"
              placeholder="어드민 아이디"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
              className="p-2 border-b outline-none"
              placeholder="어드민 비밀번호"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="px-10 py-2 rounded-full bg-[#00B8FF]"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
