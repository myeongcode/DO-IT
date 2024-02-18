import Image from 'next/image';

export default function ActivityLayout() {
  return (
    <div className="flex flex-col pt-40 w-[70%]">
      <span className="text-left text-6xl">
        WHAT DO {"'"}DO IT{"'"}
      </span>
      <div className="w-full py-20">
        <Image
          src="/project-img.jpg"
          width={2400}
          height={0}
          alt="projectImage"
          className="max-h-64 object-cover mb-10 brightness-50"
        />
        <div className="flex w-full">
          <div className="w-1/2 leading-[2.2]">
            <span className="text-4xl font-light">PROJECT</span> <br />
            <span className="text-xl">프로젝트</span>
          </div>
          <div className="w-1/2">
            <span className="text-[#657786] leading-[1.8]">
              모든 동아리 구성원이 한 학기동안 팀빌딩을 통해 프로젝트를
              진행하고, 중간발표를 통해 각 팀들의 진행상황을 공유하는 시간을
              가집니다.
            </span>
            <br />
            <br />
            <span className="text-[#657786] leading-[1.8]">
              또한 성과 공유회 Dev IT. 에서 한학기에 진행한 프로젝트를 체험할 수
              있는 부스 행사와 프로젝트 진행 중 직면했던 문제점을 공유하고 원인
              분석과 해결 방안을 도출합니다.
            </span>
          </div>
        </div>
      </div>
      <div className="flex space-x-5 w-full">
        <div className="w-1/2">
          <Image
            src="/networking-img.jpg"
            width={2400}
            height={0}
            alt="projectImage"
            className="max-h-64 object-cover mb-10 brightness-50"
          />
          <div className="flex flex-col w-full">
            <div className="leading-[2.2]">
              <span className="text-4xl font-light">NETWORKING DAY</span> <br />
              <span className="text-xl">네트워킹 데이</span>
            </div>
            <div className="py-10 pb-14">
              <span className="text-[#657786] leading-[1.8]">
                구성원 모두가 참여해 서로 교류하며 친목을 도모하는 네트워킹
                데이를 진행합니다.
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/seminar-img.jpg"
            width={2400}
            height={0}
            alt="projectImage"
            className="max-h-64 object-cover mb-10 brightness-50"
          />
          <div className="flex flex-col w-full">
            <div className="leading-[2.2]">
              <span className="text-4xl font-light">SEMINAR</span> <br />
              <span className="text-xl">세미나</span>
            </div>
            <div className="py-10 pb-14">
              <span className="text-[#657786] leading-[1.8]">
                선배/현직자 등을 초청해 직무, 업계 현황, 조언 등 동아리
                구성원에게 도움이 되는 주제로 세미나를 개최합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
