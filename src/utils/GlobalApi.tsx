import axios from "axios";

const BaseApiUrl = "http://localhost:1337";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (path: string, pop: string, lang: string) => {
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
  const data = await fetchData("/header", "logo.src,items", lang);
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
  const data = await fetchData(
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
  const data = await fetchData("/contact-us", "name,title,image.src", lang);
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
