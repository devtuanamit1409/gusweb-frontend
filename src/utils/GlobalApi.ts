import axios from "axios";

const BaseApiUrl = process.env.NEXT_PUBLIC_BASE_URL_BACKEND;
// console.log("day la base url nè", process.env.NEXT_PUBLIC_BASE_URL_BACKEND);

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api`,
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

export const postItem = async (path: string, data: any) => {
  try {
    const response = await api.post(path, { data });
    return response.data;
  } catch (error) {
    console.error(`Error posting to ${path}:`, error);
    throw error;
  }
};

/////////////////////////////////GET/////////////////////////////////////////////

//fetch api get filter subcategory
export const fetchSubCategoryByCategoryId = async (
  lang: string,
  categoryId: number
) => {
  const data = await getAllItem(`/categories/${categoryId}`, "*", lang);
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    subCategories: res?.sub_categories?.data?.map((item: any) => ({
      id: item.id,
      slug: item.attributes.slug,
      title: item.attributes.title,
      articleCount: item.attributes.articleCount,
    })),
  };

  return formattedData;
};

//get api filter articles
export const getFilteredArticles = async (
  path: string,
  populate: string,
  lang: string,
  page: number = 1,
  pageSize: number,
  idCategory: number,
  idSubCategories?: number,
  isOutstanding?: boolean
) => {
  try {
    const params: { [key: string]: any } = {
      locale: lang,
      populate: populate,
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
      "sort[0]": "createdAt:desc",
      "filters[sub_category][category][id][$eq]": idCategory,
      "filters[isOutstanding][$eq]": isOutstanding,
    };

    if (idSubCategories && idSubCategories !== 0) {
      params["filters[sub_category][id][$eq]"] = idSubCategories;
    }

    const response = await api.get(path, { params });

    return response.data;
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
};

//fetch api filter articles
export const fetchFilteredArticles = async (
  lang: string,
  page: number = 1,
  pageSize: number,
  idCategory: number,
  idSubCategories?: number,
  isOutstanding?: boolean
) => {
  const data = await getFilteredArticles(
    "/articles",
    "image.src,sub_category.category",
    lang,
    page,
    pageSize,
    idCategory,
    idSubCategories,
    isOutstanding
  );

  const formattedData = {
    articles: data.data.map((item: any) => ({
      id: item.id,
      sub_category: item?.attributes.sub_category.data?.attributes?.title,
      category:
        item?.attributes.sub_category?.data?.attributes?.category?.data
          ?.attributes?.title,
      description: item.attributes.description,
      createdAt: item.attributes.createdAt,
      slug: item.attributes.slug,
      detail: item.attributes.detail,
      title: item.attributes.title,
      locale: item.attributes.locale,
      url: BaseApiUrl + item.attributes.image?.src.data?.attributes?.url || "",
      alt: item.attributes.image?.alt || "",
      outStanding: item.attributes.isOutstanding,
    })),
    pagination: {
      page: data.meta.pagination.page,
      pageSize: data.meta.pagination.pageSize,
      pageCount: data.meta.pagination.pageCount,
      total: data.meta.pagination.total,
    },
  };

  return formattedData;
};

//get filter article detail
export const getFilteredArticleDetail = async (
  path: string,
  populate: string,
  lang: string,
  slug: string
) => {
  try {
    const params: { [key: string]: any } = {
      locale: lang,
      populate: populate,
      "filters[slug]": slug,
    };

    const response = await api.get(path, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
};

export const fetchFilteredArticleDetail = async (
  lang: string,
  slug: string
) => {
  const data = await getFilteredArticleDetail(
    "/articles",
    "sub_category.banner.src,sub_category.category,image.src,detail,typeEbook.intro,typeEbook.ebook.src,typeEbook.ebook.pdfFile, seo.images.src",
    lang,
    slug
  );

  const formattedData = {
    articles: data.data.map((item: any) => ({
      id: item.id,
      sub_category: {
        title: item?.attributes.sub_category?.data?.attributes?.title || "",
        alt: item?.attributes.sub_category?.data?.attributes?.banner.alt || "",
        url:
          BaseApiUrl +
            item?.attributes?.sub_category?.data?.attributes?.banner?.src?.data
              ?.attributes?.url || "",
      },
      categoryId:
        item?.attributes.sub_category?.data?.attributes?.category?.data?.id,
      createdAt: item.attributes.createdAt,
      slug: item.attributes.slug,
      title: item.attributes.title,
      locale: item.attributes.locale,
      url: BaseApiUrl + item.attributes.image?.src?.data?.attributes?.url || "",
      alt: item.attributes.image?.alt || "",
      outStanding: item.attributes.isOutstanding,

      detail: item?.attributes?.detail || "",

      typeEbook: {
        intro: {
          title: item.attributes.typeEbook?.intro?.title || "",
          description: item.attributes.typeEbook?.intro?.description || "",
        },
        ebook: {
          alt: item.attributes.typeEbook?.ebook?.alt || "",
          src: item.attributes.typeEbook?.ebook?.src?.data?.attributes?.url
            ? BaseApiUrl +
              item.attributes.typeEbook?.ebook?.src?.data?.attributes?.url
            : "",
          titleBook: item.attributes.typeEbook?.ebook?.titleBook || "",
          descBook: item.attributes.typeEbook?.ebook?.descBook || "",
          note: item.attributes.typeEbook?.ebook?.note || "",
          option: item.attributes.typeEbook?.ebook?.option || "",
          pdfFile: item.attributes.typeEbook?.ebook?.pdfFile?.data?.attributes
            ?.url
            ? BaseApiUrl +
              item.attributes.typeEbook?.ebook?.pdfFile?.data?.attributes?.url
            : "",
        },
      },
      seo: {
        title: item.attributes.seo?.title || "",
        description: item.attributes.seo?.description || "",
        url: item.attributes.seo?.url || "",
        type: item.attributes.seo?.type || "website",
        image: item.attributes.seo?.images
          ? {
              url:
                BaseApiUrl +
                  item.attributes.image?.src?.data?.attributes?.url || "",
              width: 800,
              height: 600,
              alt: item.attributes.seo?.images?.alt || "",
            }
          : "",
      },
    })),
  };

  return formattedData;
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
    "main.banner.src,main.color,main.order.src,main.subImg.src,main.text,main.icons.src,main.card.src,whoUs.src,webUs.intro.src,webUs.items.src,about.image.src,whyUs.items.src,work.items,project.items.src,project.items.customer.src,project.items.technology.src,project.items.system.src,project.image.src,project.items.file,customer.images.src,chats.image.src, seo.images.src",
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
      items: res.project.items?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        title: item.title,
        description: item.description,
        url: BaseApiUrl + item.src?.data?.attributes?.url,
        customer: item.customer.map((customerItem: any) => ({
          id: customerItem.id,
          alt: customerItem.alt,
          url: BaseApiUrl + customerItem.src?.data?.attributes?.url,
        })),
        technology: item.technology.map((technologyItem: any) => ({
          id: technologyItem.id,
          alt: technologyItem.alt,
          url: BaseApiUrl + technologyItem.src?.data?.attributes?.url,
        })),
        system: item.system.map((systemItem: any) => ({
          id: systemItem.id,
          alt: systemItem.alt,
          url: BaseApiUrl + systemItem.src?.data?.attributes?.url,
        })),
        challenge: item.challenge,
        solution: item.solution,
        file: BaseApiUrl + item.file.data[0].attributes?.url,
      })),
    },
    customer: {
      id: res.customer.id,
      title: res.customer.title,
      text1: res.customer.text1,
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
    seo: {
      title: res.seo?.title || "",
      description: res.seo?.description || "",
      url: res.seo?.url || "",
      type: res.seo?.type || "website",
      image: BaseApiUrl + res.seo?.images?.src?.data?.attributes?.url || "",
    },
  };

  return formattedData;
};

//fetch api service page
export const fetchServicePage = async (lang: string) => {
  const data = await getAllItem(
    "/service-page",
    "intro.image.src,brands.src,slogans.src,help.items.icon.src,help.items.bg.src,customerVips.src,whyUs.items.src,solution.items, seo.images.src",
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
      items: res.help.items.map((item: any) => {
        return {
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
        };
      }),
    },
    customerVips: res?.customerVips?.map((item: any) => ({
      id: item.id,
      alt: item.alt,
      url: BaseApiUrl + item.src?.data?.attributes?.url,
    })),
    whyUs: {
      id: res.whyUs.id,
      title: res.whyUs.title,
      description: res.whyUs.description,
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
    seo: {
      title: res.seo?.title || "",
      description: res.seo?.description || "",
      url: res.seo?.url || "",
      type: res.seo?.type || "website",
      image: BaseApiUrl + res.seo?.images?.src?.data?.attributes?.url || "",
    },
  };

  return formattedData;
};

//fetch api case-studies page
export const fetchCaseStudies = async (lang: string) => {
  const data = await getAllItem("/case-studies-page", "*", lang);
  const res = data?.data?.attributes;

  const formattedData = {
    id: res.id,
    locale: res?.locale,
    title: res?.intro.title,
    description: res?.intro.description,
    categoryId: res?.category.data.id,
    seo: {
      title: res.seo?.title || "",
      description: res.seo?.description || "",
      url: res.seo?.url || "",
      type: res.seo?.type || "website",
      image: BaseApiUrl + res.seo?.images?.src?.data?.attributes?.url || "",
    },
  };

  return formattedData;
};

//fetch api blog page
export const fetchBlogPage = async (lang: string) => {
  const data = await getAllItem(
    "/blog-page",
    "intro.src,category, seo.images.src",
    lang
  );
  const res = data?.data?.attributes;

  const formattedData = {
    locale: res?.locale,
    title: res?.intro.title,
    description: res?.intro.description,
    categoryId: res?.category.data.id,
    url: BaseApiUrl + res.intro.src.data?.attributes?.url,
    alt: res.intro.alt,
    seo: {
      title: res.seo?.title || "",
      description: res.seo?.description || "",
      url: res.seo?.url || "",
      type: res.seo?.type || "website",
      image: BaseApiUrl + res.seo?.images?.src?.data?.attributes?.url || "",
    },
  };

  return formattedData;
};

//fetch api aboutus page
export const fetchAboutUsPage = async (lang: string) => {
  const data = await getAllItem(
    "/about-us-page",
    "intro.image.src,about.src,taget.banner.src,taget.items,work.items,exp.src,meet.members.src,team.items.src, seo.images.src",
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
      url: BaseApiUrl + res.intro.image.src.data?.attributes?.url,
      alt: res.intro.image.alt,
    },
    about: {
      id: res.about.id,
      alt: res.about.alt,
      title: res.about.title,
      description: res.about.description,
      url: BaseApiUrl + res.about.src.data?.attributes?.url,
    },
    taget: {
      id: res.taget.id,
      items: res?.taget.items?.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
      })),
      banner: {
        id: res.taget.banner.id,
        title: res.taget.banner.title,
        alt: res.taget.banner.alt,
        url: BaseApiUrl + res.taget.banner.src.data?.attributes?.url,
      },
    },
    work: {
      id: res.work.id,
      title: res.work.title,
      description: res.work.description,
      items: res?.work.items?.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
      })),
    },
    exp: {
      id: res.exp.id,
      alt: res.exp.alt,
      title: res.exp.title,
      description: res.exp.description,
      url: BaseApiUrl + res.exp.src.data?.attributes?.url,
    },
    meet: {
      id: res.meet.id,
      title: res.meet.title,
      name: res.meet.name,
      members: res?.meet.members?.map((item: any) => ({
        id: item.id,
        name: item.name,
        position: item.position,
        role: item.role,
        description: item.description,
        alt: item.alt,
        url: BaseApiUrl + item.src.data?.attributes?.url,
        male: item.sex,
      })),
    },
    team: {
      id: res.team.id,
      name: res.team.name,
      title: res.team.title,
      description: res.team.description,
      items: res?.team.items?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        url: BaseApiUrl + item.src.data?.attributes?.url,
      })),
    },
    seo: {
      title: res.seo?.title || "",
      description: res.seo?.description || "",
      url: res.seo?.url || "",
      type: res.seo?.type || "website",
      image: BaseApiUrl + res.seo.images?.src?.data?.attributes?.url || "",
    },
  };

  return formattedData;
};

//fetch api contact us page
export const fetchContactUsPage = async (lang: string) => {
  const data = await getAllItem(
    "/contact-us-page",
    "intro.src,map.logo.src,folow.image.src,folow.icons.src, seo.images.src",
    lang
  );
  const res = data?.data?.attributes;
  // console.log(res);

  const formattedData = {
    locale: res?.locale,
    intro: {
      id: res.intro.id,
      title: res.intro.title,
      description: res.intro.description,
      url: BaseApiUrl + res.intro.src.data?.attributes?.url,
      alt: res.intro.alt,
    },
    map: {
      id: res.map.id,
      urlMap: res.map.urlMap,
      alt: res.map.logo.alt,
      url: BaseApiUrl + res.map.logo.src.data?.attributes?.url,
      address: res.map.address,
      phone: res.map.phone,
      time: res.map.time,
    },
    folow: {
      id: res.folow.id,
      alt: res.folow.image.alt,
      url: BaseApiUrl + res.folow.image.src.data?.attributes?.url,
      icons: res?.folow?.icons?.map((item: any) => ({
        id: item.id,
        alt: item.alt,
        url: BaseApiUrl + item.src.data?.attributes?.url,
        slug: item.slug,
      })),
    },
    seo: {
      title: res.seo?.title || "",
      description: res.seo?.description || "",
      url: res.seo?.url || "",
      type: res.seo?.type || "website",
      image: BaseApiUrl + res.seo.images?.src?.data?.attributes?.url || "",
    },
  };

  return formattedData;
};

////////////////////////////POST///////////////////////////////////////

//post data user contact
export const postContactUser = async (contactData: any) => {
  const formattedData = {
    name: contactData.name,
    phoneNumber: contactData.phoneNumber,
    email: contactData.email,
    companyName: contactData.companyName,
    content: contactData.content,
    minPrice: contactData.value[0],
    maxPrice: contactData.value[1],
  };
  const response = await postItem("/contact-users", formattedData);

  return response;
};

export const postEmailUser = async (gmailUser: any) => {
  const response = await postItem("/gmail-users", gmailUser);

  return response;
};
