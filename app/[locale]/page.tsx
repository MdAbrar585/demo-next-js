import {useTranslations} from 'next-intl';
import Link from "next-intl/link";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div>
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="bn">
          In Bangla
        </Link>
        <br />
        <br />
      </div>
      <h1>{t('title')}</h1>
    </div>
  )
}
