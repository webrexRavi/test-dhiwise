import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack, List } from "components";
import { useNavigate } from "react-router-dom";

const AccountinformationThreePage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-worksans items-center justify-end mx-[auto] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <header className="w-[100%]">
            <Column className="flex flex-col justify-start max-w-[1440px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Column className="border border-gray_200 border-solid flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Row className="bg-gray_300 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[4px] md:px-[5px] px-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_browsercontrol.svg"
                          className="max-w-[100%] w-[18%]"
                          alt="BrowserControl"
                        />
                        <Column className="flex flex-col items-center md:ml-[6px] ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                              <Img
                                src="images/img_curvel.svg"
                                className="max-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[3%]"
                                alt="CurveL"
                              />
                              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] sm:w-[100%] w-[95%] common-row-list">
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
                            <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                              <Text
                                className="font-medium text-red_A700 w-[auto]"
                                variant="body2"
                              >
                                Home
                              </Text>
                              <div className="bg-red_A700 h-[1px] mt-[3px] rounded-radius05 sm:w-[100%] w-[42%]"></div>
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
                            <Column className="flex flex-col items-center justify-start mt-[4px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                              <Text
                                className="font-normal not-italic text-gray_900_90 w-[auto]"
                                variant="body2"
                              >
                                Blogs
                              </Text>
                            </Column>
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
                                    className="not-italic text-red_A700 w-[auto]"
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[27px] ml-[40px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                <Img
                  src="images/img_home_24X24.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="home Two"
                />
                <div className="bg-gray_401 h-[1px] sm:ml-[4px] md:ml-[5px] ml-[8px] my-[11px] sm:my-[5px] md:my-[7px] w-[10%]"></div>
                <Text
                  className="font-normal mb-[1px] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-red_A700 w-[auto]"
                  variant="body3"
                >
                  My profile
                </Text>
              </Row>
            </Column>
          </header>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1154px] md:ml-[27px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
              <Text
                className="not-italic text-gray_901 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 uppercase w-[auto]"
                as="h4"
                variant="h4"
              >
                My profile
              </Text>
              <Stack className="h-[589px] sm:mt-[12px] md:mt-[16px] mt-[24px] outline outline-[0.25px] outline-black_900_63 py-[14px] sm:py-[7px] md:py-[9px] relative w-[100%]">
                <div className="absolute bg-blue_A400_63 sm:h-[25px] md:h-[32px] h-[46px] top-[13%] w-[100%]"></div>
                <Column className="absolute flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Column className="flex flex-col items-end justify-start sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[69%]">
                    <Text
                      className="capitalize font-normal mr-[1px] not-italic text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      Account information
                    </Text>
                  </Column>
                  <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                  <Column className="flex flex-col items-end justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[59%]">
                    <Text
                      className="capitalize font-normal not-italic text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      Change password
                    </Text>
                  </Column>
                  <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                  <Column className="flex flex-col items-end justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[33%]">
                    <Text
                      className="capitalize font-semibold text-blue_A400 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 w-[auto]"
                      variant="body2"
                    >
                      Address
                    </Text>
                  </Column>
                  <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                  <Column className="flex flex-col items-end justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[37%]">
                    <Text
                      className="capitalize font-normal not-italic text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      Order List
                    </Text>
                  </Column>
                  <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                </Column>
              </Stack>
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[41px] ml-[60px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text
                  className="font-semibold text-gray_901 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Address
                </Text>
                <Button
                  className="flex items-center justify-center min-w-[13%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_plus_24X24.svg"
                      className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder4"
                  variant="FillRedA700"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700 uppercase">
                    Add
                  </div>
                </Button>
              </Row>
              <List
                className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="clock"
                  />
                  <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-gray_703 w-[auto]"
                      variant="body4"
                    >
                      Home
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_901 w-[auto]"
                      variant="body2"
                    >
                      911 Hillside Dr, Kodiak, Alaska 99615, USA
                    </Text>
                  </Column>
                  <Text
                    className="font-medium sm:ml-[135px] md:ml-[174px] ml-[254px] text-red_A700 uppercase w-[auto]"
                    variant="body2"
                  >
                    Set as Default
                  </Text>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="clock One"
                  />
                  <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-gray_703 w-[auto]"
                      variant="body4"
                    >
                      Address1
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_901 w-[auto]"
                      variant="body2"
                    >
                      911 Hillside Dr, Kodiak, Alaska 99615, USA
                    </Text>
                  </Column>
                  <Text
                    className="font-medium sm:ml-[135px] md:ml-[174px] ml-[254px] text-red_A700 uppercase w-[auto]"
                    variant="body2"
                  >
                    Set as Default
                  </Text>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="clock Two"
                  />
                  <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-gray_703 w-[auto]"
                      variant="body4"
                    >
                      Address2
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_901 w-[auto]"
                      variant="body2"
                    >
                      911 Hillside Dr, Kodiak, Alaska 99615, USA
                    </Text>
                  </Column>
                  <Text
                    className="font-medium sm:ml-[135px] md:ml-[174px] ml-[254px] text-red_A700 uppercase w-[auto]"
                    variant="body2"
                  >
                    Set as Default
                  </Text>
                </Row>
              </List>
            </Column>
          </Row>
        </Column>
        <Column className="bg-bluegray_100_6c flex flex-col items-center justify-end sm:mt-[339px] md:mt-[439px] mt-[638px] sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1360px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-blue_A400 uppercase w-[auto]"
                variant="body2"
              >
                recommended
              </Text>
              <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                Men's sportswear is exclusively recommended for you.
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <Stack className="h-[360px] sm:mt-[3px] md:mt-[4px] mt-[7px] relative w-[24%]">
                  <Column className="absolute bg-white_A700 flex flex-col justify-center p-[11px] sm:p-[5px] md:p-[7px] rounded-radius2 top-[0] w-[100%]">
                    <Stack className="h-[26px] ml-[4px] sm:mt-[105px] md:mt-[136px] mt-[198px] relative sm:w-[100%] w-[99%]">
                      <Text
                        className="absolute font-semibold left-[0] text-gray_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $ 123.00
                      </Text>
                      <Img
                        src="images/img_map.svg"
                        className="absolute h-[16px] max-w-[100%] right-[0] top-[0] w-[34%]"
                        alt="map"
                      />
                    </Stack>
                    <Text
                      className="font-medium leading-[140.00%] ml-[4px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[95%]"
                      variant="body3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text>
                    <Img
                      src="images/img_frame36_white_A700.svg"
                      className="max-w-[100%] sm:mb-[3px] md:mb-[4px] mb-[7px] ml-[4px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:w-[100%] w-[41%]"
                      alt="FrameThirtySix"
                    />
                  </Column>
                  <Img
                    src="images/img_rectangle283.png"
                    className="absolute h-[199px] max-w-[100%] w-[100%]"
                    alt="Rectangle283"
                  />
                </Stack>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Stack className="h-[206px] relative w-[100%]">
                    <Img
                      src="images/img_rectangle272.png"
                      className="absolute h-[199px] max-w-[100%] top-[3%] w-[100%]"
                      alt="Rectangle272"
                    />
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:px-[0] right-[8%] shadow-bs1 top-[0] sm:w-[100%] w-[30%]">
                      <Img
                        src="images/img_vector15.svg"
                        className="max-w-[100%] w-[5%]"
                        alt="VectorFifteen One"
                      />
                      <Row className="bg-green_500 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] p-[1px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-normal mb-[2px] sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700 tracking-ls1 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          10%
                        </Text>
                        <Text
                          className="font-medium ml-[3px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          off
                        </Text>
                      </Row>
                    </Row>
                  </Stack>
                  <Column className="flex flex-col justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Stack className="h-[26px] relative w-[100%]">
                      <Text
                        className="absolute font-semibold left-[0] text-gray_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $ 534.00
                      </Text>
                      <Img
                        src="images/img_map.svg"
                        className="absolute h-[16px] max-w-[100%] right-[0] top-[0] w-[34%]"
                        alt="map One"
                      />
                    </Stack>
                    <Text
                      className="font-medium leading-[140.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[96%]"
                      variant="body3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text>
                    <Img
                      src="images/img_frame22.svg"
                      className="max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[100%] w-[42%]"
                      alt="FrameTwentyTwo"
                    />
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Img
                    src="images/img_rectangle273.png"
                    className="max-w-[100%] w-[100%]"
                    alt="Rectangle273"
                  />
                  <Column className="flex flex-col justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Stack className="h-[26px] relative w-[100%]">
                      <Text
                        className="absolute font-semibold left-[0] text-gray_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $ 865.00
                      </Text>
                      <Img
                        src="images/img_map.svg"
                        className="absolute h-[16px] max-w-[100%] right-[0] top-[0] w-[34%]"
                        alt="map Two"
                      />
                    </Stack>
                    <Text
                      className="font-medium leading-[140.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[96%]"
                      variant="body3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text>
                    <Img
                      src="images/img_frame22.svg"
                      className="max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[100%] w-[42%]"
                      alt="FrameTwentyFive"
                    />
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Stack className="h-[206px] relative w-[100%]">
                    <Img
                      src="images/img_rectangle274.png"
                      className="absolute h-[199px] max-w-[100%] top-[3%] w-[100%]"
                      alt="Rectangle274"
                    />
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:px-[0] right-[8%] shadow-bs1 top-[0] sm:w-[100%] w-[30%]">
                      <Img
                        src="images/img_vector15.svg"
                        className="max-w-[100%] w-[5%]"
                        alt="VectorFifteen Two"
                      />
                      <Row className="bg-green_500 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] p-[1px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-normal mb-[2px] sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700 tracking-ls1 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          10%
                        </Text>
                        <Text
                          className="font-medium ml-[3px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          off
                        </Text>
                      </Row>
                    </Row>
                  </Stack>
                  <Column className="flex flex-col justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Stack className="h-[26px] relative w-[100%]">
                      <Text
                        className="absolute font-semibold left-[0] text-gray_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $ 111.00
                      </Text>
                      <Img
                        src="images/img_map.svg"
                        className="absolute h-[16px] max-w-[100%] right-[0] top-[0] w-[34%]"
                        alt="map Three"
                      />
                    </Stack>
                    <Text
                      className="font-medium leading-[140.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[96%]"
                      variant="body3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text>
                    <Img
                      src="images/img_frame22.svg"
                      className="max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:w-[100%] w-[42%]"
                      alt="FrameTwentyEight"
                    />
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="bg-bluegray_900 flex flex-col items-center justify-end sm:p-[15px] md:p-[26px] p-[39px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1170px] ml-[auto] mr-[auto] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_logo12_45X83.png"
                    className="max-w-[100%] sm:ml-[13px] md:ml-[17px] ml-[25px] w-[24%]"
                    alt="logoTwelve One"
                  />
                  <Column className="flex flex-col justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                    <Img
                      src="images/img_logo13.png"
                      className="max-w-[100%] sm:w-[100%] w-[40%]"
                      alt="logoThirteen"
                    />
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_50_99 w-[100%]"
                      variant="body2"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sit dolor sed do labore et dolore aliqua. consectetur
                      adipiscing elit, sed do labore.
                    </Text>
                    <Img
                      src="images/img_socials.svg"
                      className="max-w-[100%] mt-[2px] w-[32%]"
                      alt="Socials"
                    />
                  </Column>
                </Column>
                <List
                  className="sm:gap-[50px] md:gap-[64px] gap-[94px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] mt-[1px] sm:w-[100%] w-[63%]"
                  orientation="horizontal"
                >
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text className="text-white_A700 w-[auto]" variant="body1">
                      Section header
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Donec sit tortor
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Nunc massa id
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Purus praesent nibh
                    </Text>
                    <Text
                      className="font-medium ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Tortor mauris non
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Egestas nunc euismod
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text className="text-white_A700 w-[auto]" variant="body1">
                      Section header
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Donec sit tortor
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Nunc massa id
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Purus praesent nibh
                    </Text>
                    <Text
                      className="font-medium ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Tortor mauris non
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Egestas nunc euismod
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text className="text-white_A700 w-[auto]" variant="body1">
                      Section header
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Donec sit tortor
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Nunc massa id
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Purus praesent nibh
                    </Text>
                    <Text
                      className="font-medium ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Tortor mauris non
                    </Text>
                    <Text
                      className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_305 w-[auto]"
                      variant="body2"
                    >
                      Egestas nunc euismod
                    </Text>
                  </Column>
                </List>
              </Row>
              <Line className="bg-white_A700_75 h-[2px] sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
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
                    legal & Agreements
                  </Text>
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Terms
                  </Text>
                </Row>
                <Text
                  className="font-normal not-italic text-white_A700 w-[auto]"
                  variant="body2"
                >
                  © 2022 companyname. All rights reserved.
                </Text>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AccountinformationThreePage;
