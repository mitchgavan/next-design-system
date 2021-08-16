import { useRouter } from 'next/router'

function Component() {
  const router = useRouter();
  const {slug} = router.query;

  return <p>Component: {slug}</p>
}

export default Component