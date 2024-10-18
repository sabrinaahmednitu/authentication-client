import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <Image
            src={session?.user?.image}
            width={200}
            height={200}
            className="rounded-full mx-auto mt-11"
            alt="user image"
          ></Image>
          <h1 className="text-4xl text-center mt-5">
            Welcome {session?.user?.name}
          </h1>
          <h4 className="text-2xl text-center mt-3">{session?.user?.email}</h4>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
