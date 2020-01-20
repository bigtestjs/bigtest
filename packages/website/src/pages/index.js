import React from 'react';

import Index from '../styles/index';

import Layout from '../components/layout';
import Row from '../components/row';
import Text from '../components/text';
import Content from '../components/content';
import Subscribe from '../components/subscribe';

import discord_icon from '../images/icons/discord.svg';
import placeholder from '../images/frontside/bigtest-icon.svg';

import tests_intro from '../images/landing/tests-intro.svg';
import reusable from '../images/landing/reusable.svg';
import user_experience from '../images/landing/user-experience.svg';


const IndexPage = () => (
  <Layout>
    <Index>
      <Content coolbar={true}>
        <Row>
          <div flex={2}>
            <Text tag="h1" className="head">
              Tests that speed up development,
          </Text>
            <Text tag="h1" className="sub">
              not the other way around
          </Text>
            <Text tag="p">
              BigTest is a toolkit that enables you to test real-world experiences on your app rapidly, in every browser and device, regardless of your JS framework of choice.
          </Text>
            <Text tag="p" className="subscribe-top">
              Get notified about BigTest progress and know when it's ready:
          </Text>
            <Subscribe />
          </div>
          <div flex={1}>
            <div className="image">
              <img src={tests_intro} alt="BigTestJS" />
            </div>
          </div>
        </Row>
      </Content>
      <Content>
        <Text tag="h2" className="light-blue">Why BigTest?</Text>
        <Row>
          <div flex={1}>
            <Text tag="h4">
              SERIOUSLY FAST
          </Text>
            <Text tag="p">
              Designed and implemented for speed.
          </Text>
            <Text tag="h4">
              EXPERIENCE-CENTERED
          </Text>
            <Text tag="p">
              Test what matters to users through a refined developer experience.
          </Text>
          </div>
          <div flex={1}>
            <Text tag="h4">
              CROSS-BROWSER
          </Text>
            <Text tag="p">
              Chrome, Safari, Firefox, Opera, etc.
          </Text>
            <Text tag="h4">
              CROSS-DEVICE
          </Text>
            <Text tag="p">
              Windows, macOS, iOS, Android, etc.
          </Text>
          </div>
          <div flex={1}>
            <Text tag="h4">
              CROSS_FRAMEWORK
          </Text>
            <Text tag="p">
              React, Vue, Ember, Angular, etc.
          </Text>
            <Text tag="h4">
              CROSS-TEST FRAMEWORK
          </Text>
            <Text tag="p">
              Mocha, Jasmine, etc.
          </Text>
          </div>
        </Row>
      </Content>
      <Content>
        <Row>
          <div flex={2}>
            <Text tag="h2" className="pink">
              Are you testing code or actual user experiences?
          </Text>
            <Text tag="p">
              When building an application for the web, it's not enough to know if the code works at the component level. Instead, it's vital to test from the perspective of a real person who will be using it. Does your app work in a real browser? What about multiple browsers and devices? Where are the wrinkles that need to be ironed out?
          </Text>
            <Text tag="p">
              BigTest validates your code from the perspective of your user--what they see and interact with. This makes it possible to not only test individual functionality, but also get visibility on how different components interact and how a release will affect other parts of the code base.
          </Text>
          </div>
          <div flex={1}>
            <div className="image">
              <img src={user_experience} alt="BigTestJS" />
            </div>
          </div>
        </Row>
      </Content>
      <Content>
        <Row>
          <div flex={2}>
            <Text tag="h2" className="dark-blue">
              Seriously fast testing
          </Text>
            <Text tag="p">
              When you're trying to test from the perspective of your user, there's a lot of information coming in. All the clicks, streaming updates from the server, and the hundreds (or thousands) of background processes create a highly asynchronous environment. As a result, UI testing has historically been time-intensive in both setup and run time.
          </Text>
            <Text tag="p">
              BigTest cuts through the noise with a process we call <i>convergences</i>. Convergences are immutable, reusable, and composable assertions that allow you to know immediately when the desired state is achieved. In other words, BigTest checks the DOM every 10ms to verify that an assertion is true, so tests pass at the soonest possible point. This adds up to a test suite that outperforms all alternatives.
          </Text>
          </div>
          <div flex={1}>
            <div className="side-note">
              <Text tag="h3">
                Flexible & framework agnostic
            </Text>
              <Text tag="p" className="proxima">
                BigTest is a toolkit of several packages that can be used separately or together. The result is open source software that's flexible to fit your application, regardless of framework (React, Vue, Ember, Angular, etc.), test framework (Mocha, Jasmine, etc.), browser, or device.
            </Text>
            </div>
          </div>
        </Row>
      </Content>
      <Content>
        <Row>
          <div flex={2}>
            <Text tag="h2" className="light-blue">
              BigTest makes your tests reusable
          </Text>
            <Text tag="p">
              Traditional testing has a tendency to become unwieldy. And when it comes to SPAs, most testing tools aren't designed to easily test asynchrony and DOM based interactions. As a result, your team spends more time dealing with asynchrony and figuring out DOM selectors than actually writing tests.
          </Text>
            <Text tag="p">
              BigTest solves this with what we call <i>Interactors</i>, which act as a composable abstractions that are easy to reuse, even in large component-based applications. This allows your team to focus on writing tests, rather than looking for DOM selectors or making updates every time a selector changes.
          </Text>
          </div>
          <div flex={1}>
            <div className="image">
              <img src={reusable} alt="BigTestJS" />
            </div>
          </div>
        </Row>
      </Content>
      <Content coolbar={true}>
        <Row className="reach-out">
          <div flex={2}>
            <Text tag="h2" className="dark-blue">
              Want to know more about BigTest?
          </Text>
            <Text tag="p" className="subscribe-bottom">
              Join our mailing list! Receive updates and be an expert by the time BigTest is officially released.
          </Text>
            <Subscribe />
          </div>
          <div flex={1}>
            <Text tag="h4">Reach out!</Text>
            <ul>
              <li>
                <a href="https://twitter.com/thefrontside">
                  <img src={placeholder} alt="placeholder" />  @thefrontside #bigTest
              </a>
              </li>
              <li>
                <a href="mailto:bigtest@frontside.io">
                  <img src={placeholder} alt="placeholder" />  bigtest@frontside.io
              </a>
              </li>
              <li>
                <a href="https://discord.com">
                  <img src={discord_icon} alt="discord" />  Join our Discord!
              </a>
              </li>
            </ul>
          </div>
        </Row>
      </Content>
    </Index>
  </Layout>
);

export default IndexPage;
