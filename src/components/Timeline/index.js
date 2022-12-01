import './index.scss'
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import classNames from 'classnames';

const Timeline = () => {

    const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
          >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
      ));
      
      const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
          className={classNames('AccordionContent', className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
      ));

    return (
        <section className='timelineContainer' id="timeline">
            <div className='descriptionTimeline' data-aos="fade-right">
                <p>Timeline</p>
                <h1>Companies that I've been experience.</h1>
            </div>
            {/* <div class="flip flip-vertical">
                <div class="front">
                    <h1 class="text-shadow">Software Engineer, ClusterStack</h1>
                    <p>JUN 2022 - Present</p>
                </div>
                <div class="back">
                    <h1>Software Engineer</h1>
                    <p>As Software Engineer I'm working to help the company build a system that have as mainly idea bring more information and opportunities to the person that want immigrate to another country.</p>
                </div>
            </div>
            <div class="flip flip-vertical">
                <div class="front">
                    <h1 class="text-shadow">Java Software Engineer, Freedom System</h1>
                    <p>AUG 2015 - DEC 2021</p>
                </div>
                <div class="back">
                    <h2>Java Software Enginner</h2>
                    <p>At Freedom System I was worked as Java Software developer, and as some tasks that I had to perform being start new projects, talk with their clients, get the requirements of the project and build projects with clean code and excellence using the languages of the company.
Sometimes handling with problems and having to find the best approach to solve them, giving to the client the best result and experience.
In different cases I had to learn new languages, methods and external API's to improve the project experience.</p>
                </div>
            </div> */}

            <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible data-aos="fade-right">
                <Accordion.Item className="AccordionItem" value="item-1">
                    <AccordionTrigger className='AccordionTrigger'>
                        <div>
                            <h1 class="text-shadow">Software Engineer, ClusterStack</h1>
                            <p>JUN 2022 - Present</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='AccordionContent'>As Software Engineer I'm working to help the company build a system that have as mainly idea bring more information and opportunities to the person that want immigrate to another country.</AccordionContent>
                </Accordion.Item>
                <Accordion.Item className="AccordionItem" value="item-2">
                    <AccordionTrigger className='AccordionTrigger'>
                        <div>
                            <h1 class="text-shadow">Java Software Engineer, Freedom System</h1>
                            <p>AUG 2015 - DEC 2021</p>    
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='AccordionContent'>At Freedom System I was worked as Java Software developer, and as some tasks that I had to perform being start new projects, talk with their clients, get the requirements of the project and build projects with clean code and excellence using the languages of the company.
Sometimes handling with problems and having to find the best approach to solve them, giving to the client the best result and experience.
In different cases I had to learn new languages, methods and external API's to improve the project experience.</AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
        </section>
    )
}

export default Timeline;