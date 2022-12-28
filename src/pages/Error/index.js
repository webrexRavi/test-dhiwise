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
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-worksans items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1440px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="border border-gray_200 border-solid flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                <Row className="bg-gray_300 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[4px] md:px-[5px] px-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                    <Img
                      src="images/img_checkmark_12X52.svg"
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[226px] ml-[329px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
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
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_user.svg"
                              className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                              alt="user"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-gray_900_7e sm:h-[19px] md:h-[25px] h-[35px] w-[1px]" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[30%]">
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
                    <Line className="bg-gray_400_7e h-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </header>
        <Column className="flex flex-col items-center justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[158px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-semibold text-gray_901 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
              variant="body2"
            >
              Welcome, back
            </Text>
            <Text
              className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-red_A700 uppercase w-[auto]"
              as="h1"
              variant="h1"
            >
              Login
            </Text>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[335px] ml-[auto] mr-[auto] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_902 w-[auto]"
                  variant="body3"
                >
                  Email
                </Text>
                <Input
                  className="capitalize font-normal not-italic p-[0] text-[12px] placeholder:text-gray_901 text-gray_901 w-[100%]"
                  wrapClassName="mt-[4px] w-[100%]"
                  type="email"
                  name="Frame1833"
                  placeholder="Enter email"
                  variant="OutlineGray303"
                ></Input>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_902 w-[auto]"
                    variant="body3"
                  >
                    Password
                  </Text>
                  <Input
                    className="capitalize font-normal not-italic p-[0] text-[12px] placeholder:text-gray_901 text-gray_901 w-[100%]"
                    wrapClassName="mt-[4px] w-[100%]"
                    type="password"
                    name="Frame1833 One"
                    placeholder="Enter password"
                    variant="OutlineGray303"
                  ></Input>
                </Column>
                <Text
                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-red_A700 tracking-ls015000000596046448 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  Forgot password?
                </Text>
              </Column>
            </Column>
            <Button
              className="cursor-pointer font-medium md:mt-[11px] mt-[16px] sm:mt-[8px] text-[14px] text-center text-white_A700 uppercase w-[100%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillRedA700"
            >
              login
            </Button>
            <Text
              className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-red_A700 tracking-ls015000000596046448 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              Create Account
            </Text>
          </Column>
          <Column className="bg-bluegray_100_6c flex flex-col items-center justify-end sm:mt-[483px] md:mt-[624px] mt-[908px] sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1360px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-blue_900 uppercase w-[auto]"
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
                        src="images/img_frame36.svg"
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
                          alt="VectorFifteen"
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
                      <Text
                        className="text-white_A700 w-[auto]"
                        variant="body1"
                      >
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
                      <Text
                        className="text-white_A700 w-[auto]"
                        variant="body1"
                      >
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
                      <Text
                        className="text-white_A700 w-[auto]"
                        variant="body1"
                      >
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
      </Column>
    </>
  );
};

export default ErrorPage;
