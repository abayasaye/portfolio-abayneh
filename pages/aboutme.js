import { useEffect } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Col, Row } from "reactstrap";

const AboutMe = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Abayneh Asaye"
        className="about-page"
        canonicalPath="/about"
      >
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title `}>Hello, Welcome</h1>
              <h4 className={`subtitle `}>To About Page</h4>
              <p className={`subsubTitle `}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={``}>
              <p>
                My name is Abayneh Asaye and I am an experienced software
                engineer and freelance developer.{" "}
              </p>
              <p>
                I Graduate in Full Stack Development and several years of
                experience working on a wide range of technologies and projects
                from JavaScript development for ultrasound devices to modern
                mobile and web applications in React and Next.
              </p>
              <p>
                Throughout my career, I have acquired advanced technical
                knowledge and the ability to explain programming topics clearly
                and in detail to a broad audience. I invite you to take my
                course, where I have put a lot of effort to explain web and
                software engineering concepts in a detailed, hands-on and
                understandable way.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default AboutMe;
