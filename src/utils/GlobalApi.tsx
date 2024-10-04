import axios from "axios";

const BaseApiUrl = "http://localhost:1337";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllItem = async (path: string, pop: string, lang: string) => {
  try {
    const response = await api.get(path, {
      params: {
        locale: lang,
        populate: pop,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
};

//fetch api header custom
export const fetchHeader = async (lang: string) => {
  const data = await getAllItem("/header", "logo.src,items", lang);
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    logo: {
      id: res?.logo?.id,
      alt: res?.logo?.alt,
      src: BaseApiUrl + res?.logo?.src?.data?.attributes?.url,
    },
    items: res?.items?.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
    })),
  };

  return formattedData;
};

//fetch api footer
export const fetchFooter = async (lang: string) => {
  const data = await getAllItem(
    "/footer",
    "logo.src,gmail.image.src,address.image.src,aboutUs,doings,icons.src",
    lang
  );
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    logo: {
      id: res?.logo?.id,
      alt: res?.logo?.alt,
      src: BaseApiUrl + res?.logo?.src?.data?.attributes?.url,
    },
    gmail: {
      id: res?.gmail?.id,
      content: res?.gmail?.content,
      tel: res?.gmail?.tel,
      alt: res?.gmail?.image?.alt,
      src: BaseApiUrl + res?.gmail?.image?.src?.data?.attributes?.url,
    },
    address: {
      id: res?.address?.id,
      title: res?.address?.title,
      description: res?.address?.description,
      alt: res?.gmail?.image?.alt,
      src: BaseApiUrl + res?.address?.image?.src?.data?.attributes?.url,
    },
    aboutUs: res?.aboutUs?.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
    })),
    doings: res?.doings?.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
    })),
    icons: res?.icons?.map((icon: any) => ({
      id: icon.id,
      alt: icon.alt,
      slug: icon.slug,
      src: BaseApiUrl + icon.src?.data?.attributes?.url,
    })),
  };

  return formattedData;
};

//fetch api contact us component
export const fetchContactUsComp = async (lang: string) => {
  const data = await getAllItem("/contact-us", "name,title,image.src", lang);
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    name: res?.name,
    title: res?.title,
    alt: res?.image?.alt,
    src: BaseApiUrl + res?.image?.src?.data?.attributes?.url,
  };

  return formattedData;
};

//fetch api homepage
export const fetchHomePage = async (lang: string) => {
  const data = await getAllItem(
    "/home-page",
    "main.banner.src,main.color,main.order.src,main.subImg.src,main.text,main.icons.src,main.card.src,whoUs.src,webUs.intro.src,webUs.items.src,about.image.src,whyUs.items.src,work.items,project.items.src,project.image.src,customer.images.src,chats.image.src",
    lang
  );
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    main: {
      id: res?.main?.id,
      actor: res.main.actor,
      order: {
        id: res.main.order.id,
        alt: res.main.order.alt,
        title: res.main.order.title,
        description: res.main.order.description,
        price: res.main.order.price,
        percent: res.main.order.percent,
        url: BaseApiUrl + res?.main.order.src?.data?.attributes?.url,
      },
      url: res?.main?.url,
      card: {
        id: res.main.card.id,
        alt: res.main.card.alt,
        title: res.main.card.title,
        price: res.main.card.price,
        description: res.main.card.description,
        url: BaseApiUrl + res?.main.card.src?.data?.attributes?.url,
      },
      icons: res?.main?.icons?.map((icon: any) => ({
        id: icon.id,
        alt: icon.alt,
        url: BaseApiUrl + icon.src?.data?.attributes?.url,
      })),
      text: {
        id: res.main.text.id,
        title: res.main.text.title,
        subTitle: res.main.text.subTitle,
        content: res.main.text.content,
        description: res.main.text.description,
      },
      subImg: {
        id: res.main.subImg.id,
        alt: res.main.subImg.alt,
        url: BaseApiUrl + res.main.subImg.src?.data?.attributes?.url,
      },
      color: {
        id: res.main.color.id,
        title: res.main.color.title,
        description: res.main.color.description,
      },
      banner: {
        id: res.main.banner.id,
        alt: res.main.banner.alt,
        title: res.main.banner.title,
        description: res.main.banner.description,
        url: BaseApiUrl + res.main.banner.src?.data?.attributes?.url,
      },
    },
    whoUs: {
      id: res.whoUs.id,
      alt: res.whoUs.alt,
      title: res.whoUs.title,
      description: res.whoUs.description,
      url: BaseApiUrl + res.whoUs.src?.data?.attributes?.url,
    },
    webUs: {
      id: res.webUs.id,
      items: res?.webUs?.items?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        title: item.title,
        description: item.description,
        url: BaseApiUrl + item.src?.data?.attributes?.url,
      })),
      intro: {
        id: res.webUs.intro.id,
        alt: res.webUs.intro.alt,
        title: res.webUs.intro.title,
        description: res.webUs.intro.description,
        url: BaseApiUrl + res.webUs.intro.src?.data?.attributes?.url,
      },
    },
    about: {
      id: res.about.id,
      title: res.about.title,
      alt: res.about.image.alt,
      url: BaseApiUrl + res.about.image.src?.data?.attributes?.url,
    },
    whyUs: {
      id: res.whyUs.id,
      name: res.whyUs.name,
      title: res.whyUs.title,
      items: res?.whyUs?.items?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        title: item.title,
        description: item.description,
        url: BaseApiUrl + item.src?.data?.attributes?.url,
      })),
    },
    work: {
      id: res.work.id,
      title: res.work.title,
      description: res.work.description,
      items: res?.work?.items?.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
      })),
    },
    project: {
      id: res.project.id,
      alt: res.project.image.alt,
      url: BaseApiUrl + res.project.image.src?.data?.attributes?.url,
      items: res?.project.items?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        title: item.title,
        description: item.description,
        url: BaseApiUrl + item.src?.data?.attributes?.url,
      })),
    },
    customer: {
      id: res.customer.id,
      title: res.customer.title,
      description: res.customer.description,
      images: res?.customer?.images?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        url: BaseApiUrl + item.src?.data?.attributes?.url,
      })),
    },
    chats: res?.chats?.map((item: any) => ({
      id: item.id,
      name: item.name,
      position: item.position,
      rating: item.rating,
      content: item.content,
      alt: item.image.alt,
      url: BaseApiUrl + item.image.src?.data?.attributes?.url,
    })),
  };

  return formattedData;
};

//fetch api service page
export const fetchServicePage = async (lang: string) => {
  const data = await getAllItem(
    "/service-page",
    "intro.image.src,brands.src,slogans.src,help.items.icon.src,help.items.bg.src,customerVips.src,whyUs.items.src,solution.items",
    lang
  );
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    intro: {
      id: res.intro.id,
      title: res.intro.title,
      subTitle: res.intro.subTitle,
      description: res.intro.description,
      alt: res.intro.image.alt,
      url: BaseApiUrl + res.intro.image.src?.data?.attributes?.url,
    },
    brands: res?.brands?.map((item: any) => ({
      id: item.id,
      alt: item.alt,
      url: BaseApiUrl + item.src?.data?.attributes?.url,
    })),
    slogans: res?.slogans?.map((item: any) => ({
      id: item.id,
      alt: item.alt,
      title: item.title,
      description: item.description,
      url: BaseApiUrl + item.src?.data?.attributes?.url,
    })),
    help: {
      id: res.help.id,
      title: res.help.title,
      description: res.help.description,
      items: res?.help?.items.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: {
          id: item.icon.id,
          alt: item.icon.alt,
          url: BaseApiUrl + item.icon.src?.data?.attributes?.url,
        },
        bg: {
          id: item.bg.id,
          alt: item.bg.alt,
          url: BaseApiUrl + item.bg.src?.data?.attributes?.url,
        },
      })),
    },
    customerVips: res?.customerVips?.map((item: any) => ({
      id: item.id,
      alt: item.alt,
      url: BaseApiUrl + item.src?.data?.attributes?.url,
    })),
    whyUs: {
      id: res.whyUs.id,
      title: res.whyUs.title,
      description: res.whyUs,
      items: res?.whyUs.items?.map((item: any) => ({
        id: item.id,
        title: item.title,
        url: BaseApiUrl + item.src?.data?.attributes?.url,
      })),
    },
    solution: {
      id: res.solution.id,
      title: res.solution.title,
      items: res?.solution.items?.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
      })),
    },
  };

  return formattedData;
};
