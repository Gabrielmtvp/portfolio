import "./index.scss";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";

const Timeline = () => {
  const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={classNames("AccordionTrigger", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={classNames("AccordionContent", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    )
  );

  return (
    <section className="timelineContainer" id="timeline">
      <div className="descriptionTimeline" data-aos="fade-right">
        <h1>Companies where I've been employed</h1>
      </div>

      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
        data-aos="fade-right"
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger className="AccordionTrigger">
            <div>
              <p class="text-shadow">FullStack Developer, Kanon Gaming</p>
              <p>MAR 2023 - PRESENT</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="AccordionContent">
            A dynamic and innovative maltese gaming company known for its
            cutting-edge. As part of this team I focused on developing new
            features, restful applications for our web platforms. Acquiring
            requirements and deploying web applications using a range of
            technologies such as React, NextJs, Node.js, Typescript, TypeOrm,
            Docker, Github Actions, Firebase and CloudFlare. Perform QA
            activities, including integration and system testing, to ensure the
            quality of the product released. Analyze, test, and troubleshoot
            applications and suggest solutions to improve user experience and
            performance. Assist the team in developing mobile-responsive design.
            Improving the legacy codebase, create technical documents, and
            review pull requests. Integrate third- party APIs and plugins as
            necessary. Analyze system requirements and develop technical
            specifications.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger className="AccordionTrigger">
            <div>
              <p class="text-shadow">Software Engineer, ClusterStack</p>
              <p>JUN 2022 - FEB 2023</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="AccordionContent">
            As a Software Engineer, my duties involved designing and developing
            a system that helps people to find new opportunities and information
            about abroad jobs. Developing new components and maintaining the
            legacy code to improve performance and code quality. Agile
            development methodology was used to enhance the workflow process,
            code review as well as to assist colleagues with their questions and
            difficulties. The technologies used include Html, Css, JavaScript,
            ReactJS, NodeJS, Rest Apis, ExpressJS, GraphQL, MongoDB, Tailwind,
            Amazon S3, Kubernetes, Docker, Git, and Clean Code.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger className="AccordionTrigger">
            <div>
              <p class="text-shadow">Java Software Engineer, Freedom System</p>
              <p>AUG 2015 - DEC 2021</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="AccordionContent">
            Freedom being a company involved with e-commerc portals and ECM/BPM
            solutions I could perform as Java Software Developer leading new
            projects, acquiring project requirements with clients and building
            high-quality projects using the company's languages. I faced big
            challenges during my path that helped me to found optimal solutions,
            and ensured a positive client experience. Technologies: HTML, CSS,
            JavaScript, jQuery, Java, Hibernate, Spring, Spring Data, REST APIs,
            Git, SQL Server, MySQL, Oracle, Clean Code, Scrum.
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};

export default Timeline;
