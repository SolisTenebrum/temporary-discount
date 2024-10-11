import App from '@/components/App';
import { IPlan } from '@/types/types';
import { fetchData } from '@/utils/data';

export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }: { data: IPlan[] }) {
  return (
    <>
      <App initialData={data}/>
    </>
  );
}
