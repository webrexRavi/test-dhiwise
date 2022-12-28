import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  Input,
  TextArea,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const ContanctUsPage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-worksans items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1440px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Column className="border border-gray_200 border-solid flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Row className="bg-gray_300 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[4px] md:px-[5px] px-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="max-w-[100%] w-[18%]"
                        alt="checkmark"
                      />
                      <Column className="flex flex-col items-center md:ml-[6px] ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                            <Img
                              src="images/img_curvel.svg"
                              className="max-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[3%]"
                              alt="CurveL"
                            />
                            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] sm:w-[100%] w-[95%] common-row-list common-row-list">
                              <ul className="flex flex-row items-center justify-between">
                                <li className="w-[9%] sm:w-[100%] sm:my-[10px] rounded-radius50 my-[1px]">
                                  <Img
                                    src="images/img_favicon.png"
                                    className="md:h-[12px] h-[16px] sm:h-[9px] rounded-radius50"
                                    alt="Favicon"
                                  />
                                </li>
                                <li className="w-[auto] sm:w-[100%] sm:my-[10px] my-[2px]">
                                  <a
                                    href={"javascript:"}
                                    className="cursor-pointer font-normal not-italic text-[12px] text-gray_800 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                                    rel="noreferrer"
                                  >
                                    sportcycle.com .
                                  </a>
                                </li>
                                <li className="w-[10%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                                  <Img
                                    src="images/img_close.svg"
                                    className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                                    alt="close"
                                  />
                                </li>
                              </ul>
                            </Row>
                            <Img
                              src="images/img_curver.svg"
                              className="max-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[3%]"
                              alt="CurveR"
                            />
                          </Row>
                          <Img
                            src="images/img_plus.svg"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="plus"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Row>
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[2px] md:p-[3px] p-[5px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="common-pointer md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          onClick={handleBackNavigation}
                          alt="arrowleft"
                        />
                        <Img
                          src="images/img_arrowright.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="arrowright"
                        />
                        <Img
                          src="images/img_refresh.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="refresh"
                        />
                        <Img
                          src="images/img_home.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="home"
                        />
                      </Row>
                      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius14 sm:w-[100%] w-[87%]">
                        <Img
                          src="images/img_lock.svg"
                          className="h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                          alt="lock"
                        />
                        <Column className="flex flex-col items-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_900 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              jugl.com
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_701 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              /Chat
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_bookmark.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[1068px] sm:ml-[568px] md:ml-[734px] mr-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="bookmark"
                        />
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
                        <Img
                          src="images/img_imageuserpr.png"
                          className="sm:h-[12px] md:h-[16px] h-[22px] rounded-radius50 sm:w-[11px] md:w-[15px] w-[22px]"
                          alt="ImageUserPr"
                        />
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="overflowmenu"
                        />
                      </Row>
                    </Row>
                  </Row>
                </Column>
                <Img
                  src="images/img_imagegoeshere.png"
                  className="max-w-[100%] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                  alt="IMAGEGOESHERE"
                />
              </Column>
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Button
                  className="cursor-pointer font-medium text-[16px] text-center text-gray_901 w-[100%]"
                  variant="FillBluegray50"
                >
                  Free Shipping Order above the $50
                </Button>
                <Column className="bg-white_A700 flex flex-col items-center justify-end md:pt-[10px] pt-[15px] sm:pt-[7px] md:px-[10px] px-[15px] sm:px-[7px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                          <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_900_90 w-[auto]"
                              variant="body2"
                            >
                              Home
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[23%]">
                            <Text
                              className="font-normal my-[2px] not-italic text-gray_900_90 w-[auto]"
                              variant="body2"
                            >
                              Adult’s Board
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                            <Text
                              className="font-normal not-italic text-gray_900_90 w-[auto]"
                              variant="body2"
                            >
                              Kid’s Board
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[20%]">
                            <Text
                              className="font-normal mt-[3px] not-italic text-gray_900_90 w-[auto]"
                              variant="body2"
                            >
                              Long Board
                            </Text>
                          </Column>
                          <Stack className="h-[24px] pr-[4px] pt-[4px] relative w-[10%]">
                            <Text
                              className="absolute font-medium text-red_A700 w-[auto]"
                              variant="body2"
                            >
                              Blog
                            </Text>
                            <div className="absolute bg-red_A700 h-[1px] rounded-radius05 sm:w-[100%] w-[41%]"></div>
                          </Stack>
                        </Row>
                        <Img
                          src="images/img_logo12.png"
                          className="max-w-[100%] md:ml-[105px] ml-[154px] sm:ml-[82px] w-[8%]"
                          alt="logoTwelve"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[174px] ml-[253px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                              <Text
                                className="flex-grow not-italic text-gray_900_87 tracking-ls024 md:tracking-ls11 sm:tracking-ls11"
                                variant="body5"
                              >
                                Search...
                              </Text>
                              <Img
                                src="images/img_search.svg"
                                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                alt="search One"
                              />
                            </Row>
                            <Button
                              className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                              size="smIcn"
                            >
                              <Img
                                src="images/img_cart.svg"
                                className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                                alt="cart"
                              />
                            </Button>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                              <Column className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                                <Text
                                  className="not-italic text-blue_A400 w-[auto]"
                                  variant="body5"
                                >
                                  Welcome!
                                </Text>
                                <Text
                                  className="font-medium text-gray_901 w-[auto]"
                                  variant="body3"
                                >
                                  Suganth A
                                </Text>
                              </Column>
                              <Img
                                src="images/img_ellipse5.png"
                                className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                alt="EllipseFive"
                              />
                            </Row>
                          </Row>
                          <Line className="bg-gray_900_7e sm:h-[19px] md:h-[25px] h-[35px] w-[1px]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[24%]">
                            <Img
                              src="images/img_1280pxflagof.png"
                              className="max-w-[100%] w-[32%]"
                              alt="1280pxFlagof"
                            />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                              <Text
                                className="font-normal not-italic text-gray_901 w-[auto]"
                                variant="body2"
                              >
                                ₹
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_901 w-[auto]"
                                variant="body4"
                              >
                                INR
                              </Text>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="max-w-[100%] w-[17%]"
                                alt="arrowdown"
                              />
                            </Row>
                          </Row>
                        </Row>
                      </Row>
                      <Line className="bg-gray_400_7e h-[0.5px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
          </header>
          <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[809px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] md:px-[3px] px-[5px] w-[100%]">
              <Text
                className="not-italic text-gray_901 uppercase w-[auto]"
                as="h2"
                variant="h2"
              >
                CONTACT US
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Text
                  className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-center text-gray_800_99 tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body3"
                >
                  Monday – Friday: 10:00am – 7:30pm Saturday: 10:00am – 6:00pm
                  Sunday: 11:00am – 6:00pm
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[33px] rounded-radius4 w-[100%]">
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-medium text-gray_802 w-[auto]"
                      variant="body4"
                    >
                      Full Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[13px] placeholder:text-bluegray_100 text-bluegray_100 w-[100%]"
                      wrapClassName="md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                      type="text"
                      name="GroupNineteen"
                      placeholder="Enter full name"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-medium text-gray_802 w-[auto]"
                      variant="body4"
                    >
                      Phone Number
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[13px] placeholder:text-bluegray_100 text-bluegray_100 w-[100%]"
                      wrapClassName="md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                      type="number"
                      name="GroupTwenty"
                      placeholder="Enter Mobile number"
                    ></Input>
                  </Column>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] rounded-radius4 w-[100%]">
                  <Text
                    className="font-medium text-gray_802 w-[auto]"
                    variant="body4"
                  >
                    Your Email
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[13px] placeholder:text-bluegray_100 text-bluegray_100 w-[100%]"
                    wrapClassName="md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                    type="email"
                    name="GroupTwentyOne"
                    placeholder="Enter Email"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] rounded-radius4 w-[100%]">
                  <Text
                    className="font-medium text-gray_802 w-[auto]"
                    variant="body4"
                  >
                    Your Message
                  </Text>
                  <TextArea
                    className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[13px] placeholder:text-bluegray_100 text-bluegray_100 w-[100%]"
                    name="GroupTwentyTwo"
                    placeholder="Message"
                  ></TextArea>
                </Column>
                <Button
                  className="cursor-pointer font-medium min-w-[30%] sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-center text-white_A700 w-[max-content]"
                  size="lg"
                  variant="OutlineRedA700"
                >
                  SEND MESSAGE
                </Button>
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[42px] md:mt-[55px] mt-[80px] w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:p-[15px] md:p-[29px] p-[43px] w-[100%]"
                style={{ backgroundImage: "url('images/img_subscribe.png')" }}
              >
                <Column className="flex flex-col items-center justify-start max-w-[1353px] ml-[auto] mr-[auto] sm:my-[21px] md:my-[28px] my-[41px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:px-[15px] md:px-[365px] px-[531px] shadow-bs w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls18 uppercase w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Stay updated!
                          </Text>
                        </Column>
                      </Column>
                      <Text
                        className="mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-shadow-ts text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 uppercase w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        For promotions, special offers & good vibes.
                      </Text>
                    </Column>
                    <Input
                      className="font-normal not-italic p-[0] text-[13px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                      wrapClassName="flex md:mt-[27px] mt-[40px] sm:mt-[21px] sm:mx-[0] sm:w-[100%] w-[37%]"
                      type="email"
                      name="Frame57641"
                      placeholder="Enter Email to Subscribe newsletter"
                      suffix={
                        <Img
                          src="images/img_send.svg"
                          className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                          alt="send"
                        />
                      }
                      size="sm"
                      variant="OutlineWhiteA700"
                    ></Input>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-bluegray_900 flex flex-col items-center justify-end sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                <Column className="flex flex-col items-center justify-start max-w-[1199px] ml-[auto] mr-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                        <Img
                          src="images/img_image1.png"
                          className="max-w-[100%] w-[38%]"
                          alt="imageOne"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Text
                            className="font-normal not-italic text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 uppercase w-[auto]"
                            variant="body2"
                          >
                            Follow us on social media
                          </Text>
                          <Img
                            src="images/img_frame57629.svg"
                            className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[55%]"
                            alt="Frame57629"
                          />
                        </Column>
                      </Column>
                      <List
                        className="gap-[109px] sm:gap-[58px] md:gap-[75px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] pb-[3px] pr-[3px] sm:w-[100%] w-[61%]"
                        orientation="horizontal"
                      >
                        <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                          <Text
                            className="font-semibold text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
                            variant="body2"
                          >
                            Section header
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-white_A700 uppercase w-[auto]"
                            variant="body4"
                          >
                            Adult’s Board
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                            variant="body4"
                          >
                            kid’s Board
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                            variant="body4"
                          >
                            long board
                          </Text>
                          <Text
                            className="font-semibold ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                            variant="body4"
                          >
                            Blogs
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                            variant="body4"
                          >
                            My profile
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                          <Text
                            className="font-semibold text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
                            variant="body2"
                          >
                            Section header
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            PRIVACY POLICY
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            TERMS AND CONDITIONS
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            CONTACT US
                          </Text>
                          <Text
                            className="font-semibold ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            SHIPPING & RETURNS
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            TRACK ORDER
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                          <Text
                            className="font-semibold text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
                            variant="body2"
                          >
                            Section header
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            PRIVACY POLICY
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            TERMS AND CONDITIONS
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            CONTACT US
                          </Text>
                          <Text
                            className="font-semibold ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            SHIPPING & RETURNS
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            TRACK ORDER
                          </Text>
                        </Column>
                      </List>
                    </Row>
                    <Line className="bg-white_A700_75 h-[2px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                        <Text
                          className="font-normal not-italic text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Privacy Policy
                        </Text>
                        <Text
                          className="font-normal not-italic text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Terms
                        </Text>
                      </Row>
                      <Text
                        className="font-medium text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        © 2022 companyname. All rights reserved.
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ContanctUsPage;
