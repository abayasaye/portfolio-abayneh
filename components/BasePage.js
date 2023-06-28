import React from "react";
import { Container } from "reactstrap";
import Head from "next/head"
import { useRouter } from "next/router";

const PageHeader =({header})=>{
  <div className="page-header">
  <h1 className="page-header-title">{header}</h1>
</div>
}
const BasePage = (props) => {
  const router = useRouter()
    const {noWrapper, indexPage, children, header, title = "Portfolio - Abayneh", metaDescription="My name is Abayneh Asaye and I am an experienced software engineer and freelance developer.", canonicalPath, className=""} = props;
  const pageType = indexPage ? 'index-page' : 'base-page';
  const Wrapper = noWrapper ? React.Fragment : Container;
    return (
    <>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content="initial-scale=1.0, width=device-width"></meta>
      <meta name={"description"} key="description" content={metaDescription}/>
      <meta name={"title"} key="title" content={title}/>
      <meta property={"og:title"} key="og:title" content={title}/>
      <meta property={"og:locale"} key="og:locale" content="en_US"/>
      <meta property={"og:url"} key="og:url" content={`${process.env.BASE_URL}${router.asPath}`}/>
      <meta property={"og:type"} key="og:type" content="website"/>
      <meta property={"og:description"} key="og:description" content={metaDescription}/>
      <meta property={"og:image"} key="og:image" content={`${process.env.BASE_URL}/images/section-1.jpg`}/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      <link property={"og:canonical"} href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`}/>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <div className={`${pageType} ${className}`}>
      <Wrapper>
        {
          header && <PageHeader header={header}/>}
        {children}
      </Wrapper>
    </div>
    </>
  );
};

export default BasePage;
