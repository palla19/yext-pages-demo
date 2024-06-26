import "../index.css";
import {
  GetPath,
  GetSources,
  GetDestination,
  Template,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import Image from "../components/atoms/Image";
import MarkdownContent from "../components/atoms/MarkdownContent";
import HorizontalDivider from "../components/atoms/HorizontalDivider";
import Date from "../components/atoms/Date";
import Heading from "../components/atoms/Heading";
import Container from "../components/atoms/Container";
import Text from "../components/atoms/Text";
import PageWrapper from "../components/atoms/PageWrapper";
import MainContentWrapper from "../components/atoms/MainContentWrapper";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import BackButton from "../components/atoms/BackButton";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "name",
      "slug",
      "datePosted",
      "primaryPhoto",
      "blogStarter_body",
      "blogStarter_blogAuthor",
      "blogStarter_description",
      "blogStarter_metaDescription",
      "blogStarter_keywords",
    ],
    filter: {
      entityTypes: ["blogStarter_blog"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps<{ name: string }>
> = ({ document }): HeadConfig => {
  return {
    title: document.name,
  };
};

/**
 * Defines the URL to redirect the source paths to.
 */
export const getDestination: GetDestination<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};


/**
 * Defines a list of redirect source objects, which will redirect to the URL created by getDestination.
 */
export const getSources: GetSources<TemplateProps> = ({ document }) => {
  return [
     {
        "source": `alternate-source-${document.slug}`,
        "status": 301
     },
 ];
};



const Blog: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageWrapper backgroundColor="White">
      <Header logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png" />
      <MainContentWrapper>
        <Container
          layout="Column"
          maxWidth="M"
          flexGap="8"
          marginTop="32px"
          marginBottom="32px"
          marginLeft="Auto"
          marginRight="Auto"
        >
          <BackButton backToUrl="./index.html" />
          <Container layout="Row" flexGap="2" itemAlignment="Center">
            <Text
              text={document.blogStarter_blogAuthor}
              color="Light Gray"
              weight="Light"
              textSize="M"
            />
            <HorizontalDivider height="16px" color="Light Gray" />
            <Date
              color="Light Gray"
              date={document.datePosted}
              textSize="M"
              weight="Light"
            />
          </Container>
          <Heading
            text={document.name}
            align="Left"
            rank="1"
            weight="Bold"
            color="Dark Gray"
          />
          <Image
            src={document.primaryPhoto.image.url}
            alt={document.primaryPhoto.image.alternateText}
            aspect="Rectangle"
            size="Large"
          />
          <MarkdownContent content={document.blogStarter_body.markdown} />
        </Container>
      </MainContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Blog;