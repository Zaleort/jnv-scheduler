import {
  computed,
  onBeforeMount,
  onUnmounted,
  ref,
} from 'vue';
import Media from '@/constants/MediaQueries';

const useMedia = () => {
  const mediaQuery = ref<Media>(0);
  const getMediaQuery = () => {
    const width = window.innerWidth;
    if (width < Media.MobileL) mediaQuery.value = Media.Mobile;
    else if (width >= Media.MobileL && width < Media.Tablet) mediaQuery.value = Media.MobileL;
    else if (width >= Media.Tablet && width < Media.Desktop) mediaQuery.value = Media.Tablet;
    else if (width >= Media.Desktop && width < Media.DesktopL) mediaQuery.value = Media.Desktop;
    else if (width >= Media.DesktopL && width < Media.DesktopXl) mediaQuery.value = Media.DesktopL;
    else if (width >= Media.DesktopXl) mediaQuery.value = Media.DesktopXl;
  };

  const isMobile = computed(() => mediaQuery.value === Media.Mobile);
  const isMobileL = computed(() => mediaQuery.value === Media.MobileL);
  const isTablet = computed(() => mediaQuery.value === Media.Tablet);
  const isDesktop = computed(() => mediaQuery.value === Media.Desktop);
  const isDesktopL = computed(() => mediaQuery.value === Media.DesktopL);
  const isDesktopXl = computed(() => mediaQuery.value === Media.DesktopXl);

  const isMinMobile = computed(() => mediaQuery.value >= Media.Mobile);
  const isMinMobileL = computed(() => mediaQuery.value >= Media.MobileL);
  const isMinTablet = computed(() => mediaQuery.value >= Media.Tablet);
  const isMinDesktop = computed(() => mediaQuery.value >= Media.Desktop);
  const isMinDesktopL = computed(() => mediaQuery.value >= Media.DesktopL);
  const isMinDesktopXl = computed(() => mediaQuery.value >= Media.DesktopXl);

  const isMaxMobile = computed(() => mediaQuery.value <= Media.Mobile);
  const isMaxMobileL = computed(() => mediaQuery.value <= Media.MobileL);
  const isMaxTablet = computed(() => mediaQuery.value <= Media.Tablet);
  const isMaxDesktop = computed(() => mediaQuery.value <= Media.Desktop);
  const isMaxDesktopL = computed(() => mediaQuery.value <= Media.DesktopL);
  const isMaxDesktopXl = computed(() => mediaQuery.value <= Media.DesktopXl);

  onBeforeMount(() => {
    getMediaQuery();
    window.addEventListener('resize', getMediaQuery);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', getMediaQuery);
  });

  return {
    mediaQuery,
    isMobile,
    isMobileL,
    isTablet,
    isDesktop,
    isDesktopL,
    isDesktopXl,

    isMinMobile,
    isMinMobileL,
    isMinTablet,
    isMinDesktop,
    isMinDesktopL,
    isMinDesktopXl,

    isMaxMobile,
    isMaxMobileL,
    isMaxTablet,
    isMaxDesktop,
    isMaxDesktopL,
    isMaxDesktopXl,
  };
};

export default useMedia;
