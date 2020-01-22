import React from 'react';

import Content from '../components/content';
import { H1, H2, H3, H4, P } from '../components/text';
import Image from '../components/image';
import Layout from '../components/layout';
import Row from '../components/row';
import Subscribe from '../components/subscribe';

import { SideBox, Contact, ContactItem, ContactIcon } from '../styles/landing-page';

import discord_icon from '../images/icons/discord.svg';
import placeholder from '../images/frontside/bigtest-icon.svg';

import tests_intro from '../images/landing/tests-intro.svg';
import reusable from '../images/landing/reusable.svg';
import user_experience from '../images/landing/user-experience.svg';


const IndexPage = () => (
  <Layout>
    <Content coolbar={true}>
      <Row>
        <div flex={2}>
          <H1 bold={true}>
            Tests that speed up development,
          </H1>
          <H1>
            not the other way around
          </H1>
          <P>
            BigTest is a toolkit that enables you to test real-world experiences on your app rapidly, in every browser and device, regardless of your JS framework of choice.
          </P>
          <Subscribe text="Get notified about BigTest progress and know when it's ready:" bold={true} />
        </div>
        <div flex={1}>
          <Image>
            <img src={tests_intro} alt="BigTestJS" />
          </Image>
        </div>
      </Row>
    </Content>
    <Content>
      <H2 color="light-blue">Why BigTest?</H2>
      <Row>
        <div flex={1}>
          <H4>
            SERIOUSLY FAST
          </H4>
          <P>
            Designed and implemented for speed.
          </P>
          <H4>
            EXPERIENCE-CENTERED
          </H4>
          <P>
            Test what matters to users through a refined developer experience.
          </P>
        </div>
        <div flex={1}>
          <H4>
            CROSS-BROWSER
          </H4>
          <P>
            Chrome, Safari, Firefox, Opera, etc.
          </P>
          <H4>
            CROSS-DEVICE
          </H4>
          <P>
            Windows, macOS, iOS, Android, etc.
          </P>
        </div>
        <div flex={1}>
          <H4>
            CROSS_FRAMEWORK
          </H4>
          <P>
            React, Vue, Ember, Angular, etc.
          </P>
          <H4>
            CROSS-TEST FRAMEWORK
          </H4>
          <P>
            Mocha, Jasmine, etc.
          </P>
        </div>
      </Row>
    </Content>
    <Content>
      <Row>
        <div flex={2}>
          <H2 color="pink">
            Are you testing code or actual user experiences?
          </H2>
          <P>
            When building an application for the web, it's not enough to know if the code works at the component level. Instead, it's vital to test from the perspective of a real person who will be using it. Does your app work in a real browser? What about multiple browsers and devices? Where are the wrinkles that need to be ironed out?
          </P>
          <P>
            BigTest validates your code from the perspective of your user--what they see and interact with. This makes it possible to not only test individual functionality, but also get visibility on how different components interact and how a release will affect other parts of the code base.
          </P>
        </div>
        <div flex={1}>
          <Image>
            <img src={user_experience} alt="BigTestJS" />
          </Image>
        </div>
      </Row>
    </Content>
    <Content>
      <Row>
        <div flex={2}>
          <H2 color="dark-blue">
            Seriously fast testing
          </H2>
          <P>
            When you're trying to test from the perspective of your user, there's a lot of information coming in. All the clicks, streaming updates from the server, and the hundreds (or thousands) of background processes create a highly asynchronous environment. As a result, UI testing has historically been time-intensive in both setup and run time.
          </P>
          <P>
            BigTest cuts through the noise with a process we call <i>convergences</i>. Convergences are immutable, reusable, and composable assertions that allow you to know immediately when the desired state is achieved. In other words, BigTest checks the DOM every 10ms to verify that an assertion is true, so tests pass at the soonest possible point. This adds up to a test suite that outperforms all alternatives.
          </P>
        </div>
        <div flex={1}>
          <SideBox>
            <H3>
              Flexible & framework agnostic
            </H3>
            <P font="sans-serif">
              BigTest is a toolkit of several packages that can be used separately or together. The result is open source software that's flexible to fit your application, regardless of framework (React, Vue, Ember, Angular, etc.), test framework (Mocha, Jasmine, etc.), browser, or device.
            </P>
          </SideBox>
        </div>
      </Row>
    </Content>
    <Content>
      <Row>
        <div flex={2}>
          <H2 color="light-blue">
            BigTest makes your tests reusable
          </H2>
          <P>
            Traditional testing has a tendency to become unwieldy. And when it comes to SPAs, most testing tools aren't designed to easily test asynchrony and DOM based interactions. As a result, your team spends more time dealing with asynchrony and figuring out DOM selectors than actually writing tests.
          </P>
          <P>
            BigTest solves this with what we call <i>Interactors</i>, which act as a composable abstractions that are easy to reuse, even in large component-based applications. This allows your team to focus on writing tests, rather than looking for DOM selectors or making updates every time a selector changes.
          </P>
        </div>
        <div flex={1}>
          <Image>
            <img src={reusable} alt="BigTestJS" />
          </Image>
        </div>
      </Row>
    </Content>
    <Content coolbar={true}>
      <Row align="initial">
        <div flex={2}>
          <H2 color="dark-blue">
            Want to know more about BigTest?
          </H2>
          <Subscribe text="Join our mailing list! Receive updates and be an expert by the time BigTest is officially released." />
        </div>
        <div flex={1}>
          <H4 marginTop="0">Reach out!</H4>
          <Contact>
            <li>
              <ContactItem href="https://twitter.com/thefrontside">
                <ContactIcon src={placeholder} alt="placeholder" />  @thefrontside #bigTest
              </ContactItem>
            </li>
            <li>
              <ContactItem href="mailto:bigtest@frontside.io">
                <ContactIcon src={placeholder} alt="placeholder" />
                bigtest@frontside.io
              </ContactItem>
            </li>
            <li>
              <ContactItem href="https://discord.com">
                <ContactIcon src={discord_icon} alt="discord" />
                Join our Discord!
              </ContactItem>
            </li>
          </Contact>
        </div>
      </Row>
    </Content>
  </Layout>
);

export default IndexPage;
