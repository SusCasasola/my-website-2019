import Link from 'next/link';

import translate from 'utils/translate';
import { navigation, activeLink } from 'styles/components/navigation.scss';

const Navigation = ({ currentUrl, currentLang }) => {
  const isActiveClass = path =>
    currentUrl === path || 
    currentUrl === `/${currentLang}${path}` ||
    currentUrl === `/${currentLang}` && path === '/'
    ? activeLink : null;

  return (
    <nav className={navigation}>
      <Link as={`/${currentLang}`} href={`/${currentLang}/home`}>
        <a className={isActiveClass('/')}>
          {translate(currentLang, 'navigation_home')}
        </a>
      </Link>
      <Link href={`/${currentLang}/about`}>
        <a className={isActiveClass('/about')}>
          {translate(currentLang, 'navigation_about')}
        </a>
      </Link>
      <Link href={`/${currentLang}/blog`}>
        <a className={isActiveClass('/blog')}>
          {translate(currentLang, 'navigation_blog')}
        </a>
      </Link>
    </nav>
  );
}

export default Navigation;