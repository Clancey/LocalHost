import styles from "./PropertyDetailsFrame.module.css";

const PropertyDetailsFrame = () => {
  return (
    <div className={styles.propertyDetailsFrame}>
      <header className={styles.mainContainerFrame}>
        <div className={styles.headerInstance}>
          <div className={styles.headerContentFrame}>
            <img
              className={styles.logoInstanceIcon}
              loading="eager"
              alt=""
              src="/logo.svg"
            />
            <div className={styles.navigationLinksFrame}>
              <div className={styles.navItems}>Home</div>
              <div className={styles.navItems1}>Stays</div>
              <div className={styles.navItems2}>Become a host</div>
            </div>
            <div className={styles.loginSectionFrame}>
              <img
                className={styles.alertsFrameIcon}
                loading="eager"
                alt=""
                src="/alerts.svg"
              />
              <img
                className={styles.avatarEllipseIcon}
                loading="eager"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.contentFrame}>
        <div className={styles.propertyInfoFrame}>
          <img
            className={styles.imageGalleryFrame}
            loading="eager"
            alt=""
            src="/frame-9@2x.png"
          />
          <div className={styles.galleryControlsFrame}>
            <img
              className={styles.controlFramesIcon}
              loading="eager"
              alt=""
              src="/frame-46@2x.png"
            />
            <img
              className={styles.controlFramesIcon1}
              loading="eager"
              alt=""
              src="/frame-47@2x.png"
            />
            <img
              className={styles.controlFramesIcon2}
              loading="eager"
              alt=""
              src="/frame-48@2x.png"
            />
            <img
              className={styles.controlFramesIcon3}
              loading="eager"
              alt=""
              src="/frame-49@2x.png"
            />
            <div className={styles.controlFrames}>
              <img
                className={styles.singleControlFrame}
                alt=""
                src="/single-control-frame@2x.png"
              />
              <div className={styles.wrapperControlVector}>
                <img
                  className={styles.controlVectorIcon}
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <img
                className={styles.controlGroupIcon}
                loading="eager"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.propertySummaryFrame}>
          <div className={styles.cabinInfoFrame}>
            <div className={styles.cabinDetailsFrame}>
              <div className={styles.cabinTitleFrame}>
                <div className={styles.titleFrame}>
                  <h2 className={styles.cabinNameText}>Brightwoods Cabin</h2>
                  <div className={styles.locationText}>
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <img
                  className={styles.favoriteIconInstance}
                  loading="eager"
                  alt=""
                  src="/hearticon.svg"
                />
              </div>
              <div className={styles.ratingFrame}>
                <div className={styles.ratingDetailsFrame}>
                  <div className={styles.ratingText}>5.0</div>
                  <img
                    className={styles.ratingVectorIcon}
                    alt=""
                    src="/rating-vector.svg"
                  />
                </div>
                <div className={styles.reviewCountFrame}>
                  <div className={styles.reviewCountText}>200 Reviews</div>
                </div>
              </div>
            </div>
            <div
              className={styles.cabinDescriptionText}
            >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
          </div>
          <div className={styles.bookingInfoContainer}>
            <div className={styles.priceInfoFrame}>
              <div className={styles.bestTimeToBookContainer}>
                <div className={styles.nightlyRateFrame}>
                  <b className={styles.rateText}>$658</b>
                  <div className={styles.perNightText}>
                    <div className={styles.nightText}>/night</div>
                  </div>
                </div>
                <div className={styles.trendInfoFrame}>
                  <div className={styles.trendIcon}>
                    <div className={styles.trendIconGroup}>
                      <img
                        className={styles.trendVectorIcon}
                        alt=""
                        src="/trend-vector.svg"
                      />
                      <div className={styles.trendRectangle} />
                    </div>
                  </div>
                  <div className={styles.bestBookingTime}>
                    Best time to Book
                  </div>
                </div>
              </div>
              <button className={styles.flightSearchButton}>
                <div className={styles.searchFlightsText}>Book this home</div>
              </button>
            </div>
            <div className={styles.hostInfoContainer}>
              <div className={styles.hostedByLabel}>Hosted by:</div>
              <div className={styles.hostProfileFrame}>
                <img
                  className={styles.hostAvatarEllipse}
                  loading="eager"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <div className={styles.hostNameFrame}>
                  <div className={styles.hostNameText}>Michelle Ward</div>
                  <div className={styles.hostJoinDate}>Joined in May 2021</div>
                </div>
                <button className={styles.superhostBadgeFrame}>
                  <img
                    className={styles.superhostVectorIcon}
                    alt=""
                    src="/superhost-vector.svg"
                  />
                  <div className={styles.superhostLabelText}>Superhost</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.propertyDetailsFrame1}>
        <div className={styles.homeDescriptionContainer}>
          <h3 className={styles.aboutHomeTitle}>About this home</h3>
          <div className={styles.homeSummaryFrame}>
            <div className={styles.propertyDescription}>
              <div className={styles.welcomeToBrightwoodsContainer}>
                <p className={styles.welcomeToBrightwoods}>
                  Welcome to Brightwoods Cabin, your idyllic retreat nestled in
                  the heart of Bridlepath, Ontario! Our cozy cabin, surrounded
                  by the tranquility of nature's embrace, is designed to provide
                  the ultimate relaxing getaway.
                </p>
                <p className={styles.livingSpaceThisCharmingCa}>
                  <b className={styles.livingSpace}>{`Living Space: `}</b>
                  <span>
                    This charming cabin boasts a spacious living area adorned
                    with rustic decor and modern amenities. Enjoy the warmth of
                    the wood-burning fireplace, relax on the plush sofas, and
                    make yourself at home with our entertainment center
                    featuring a flat-screen TV, WiFi, and more.
                  </span>
                </p>
                <p className={styles.bedroomsWith3BeautifullyA}>
                  <b className={styles.bedrooms}>Bedrooms:</b>
                  <span>
                    {" "}
                    With 3 beautifully appointed bedrooms, our cabin comfortably
                    accommodates up to [number of guests]. Each room is
                    furnished with luxurious bedding and unique
                    woodland-inspired touches to ensure a restful slumber.
                  </span>
                </p>
                <p className={styles.kitchenDiningOurFullyEq}>
                  <b className={styles.kitchenDining}>{`Kitchen & Dining:`}</b>
                  <span>
                    {" "}
                    Our fully-equipped kitchen offers everything you need to
                    prepare delicious home-cooked meals. The open dining area
                    provides a welcoming space to enjoy meals with friends and
                    family.
                  </span>
                </p>
                <p className={styles.bathrooms2ModernBathrooms}>
                  <b className={styles.bathrooms}>Bathrooms:</b>
                  <span>
                    {" "}
                    2 modern bathrooms stocked with fresh towels, toiletries,
                    and all essential amenities add to your convenience.
                  </span>
                </p>
                <p className={styles.outdoorSpaceStepOutsideTo}>
                  <b className={styles.outdoorSpace}>Outdoor Space:</b>
                  <span>
                    {" "}
                    Step outside to a serene outdoor setting. Whether it's a
                    morning coffee on the porch, a BBQ in the yard, or a
                    soothing evening by the fire pit, the beauty of Bridlepath
                    is at your doorstep.
                  </span>
                </p>
                <p className={styles.locationLocatedJustMinutes}>
                  <b className={styles.location}>Location:</b>
                  <span>
                    {" "}
                    Located just minutes from [local attractions, trails,
                    dining, shopping], our cabin offers the perfect base to
                    explore the best of the region or simply unwind in
                    seclusion.
                  </span>
                </p>
                <p className={styles.hostedWithLoveWeTakePrid}>
                  <b className={styles.hostedWithLove}>Hosted with Love:</b>
                  <span>
                    {" "}
                    We take pride in hosting our guests and are committed to
                    making your stay unforgettable. We're just a call or message
                    away should you need anything during your stay.
                  </span>
                </p>
                <p className={styles.comeBeOur}>
                  Come, be our guest at [Cabin Name], and experience a piece of
                  woodland serenity right here in Bridlepath, Ontario. Book now
                  and make yourself at home!
                </p>
              </div>
              <div className={styles.button}>Show more</div>
            </div>
            <div className={styles.amenityHighlights}>
              <div className={styles.amenityList}>
                <img
                  className={styles.amenityItemIcon}
                  loading="eager"
                  alt=""
                  src="/frame-65.svg"
                />
                <div className={styles.amenityDetails}>
                  <div className={styles.amenityFeature}>
                    Dedicated workspace
                  </div>
                  <div className={styles.amenityDescription}>
                    A private room equipped with WiFi
                  </div>
                </div>
              </div>
              <div className={styles.amenityList1}>
                <img
                  className={styles.amenityListChild}
                  loading="eager"
                  alt=""
                  src="/frame-651.svg"
                />
                <div className={styles.selfCheckInParent}>
                  <div className={styles.selfCheckIn}>Self check-in</div>
                  <div className={styles.checkInWith}>
                    Check in with just your phone
                  </div>
                </div>
              </div>
              <div className={styles.amenityList2}>
                <img
                  className={styles.amenityListItem}
                  loading="eager"
                  alt=""
                  src="/frame-652.svg"
                />
                <div className={styles.freeCancellationParent}>
                  <div className={styles.freeCancellation}>
                    Free cancellation
                  </div>
                  <div className={styles.cancelAnytime}>Cancel anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.amenitiesSection}>
          <div className={styles.amenityIcons}>
            <h3 className={styles.amenitiesTitle}>Amenities</h3>
            <div className={styles.amenityIconList}>
              <div className={styles.amenityIconGroup}>
                <div className={styles.amenityIconRow}>
                  <div className={styles.amenityIconItem}>
                    <img
                      className={styles.amenityIcon}
                      loading="eager"
                      alt=""
                      src="/mdilake.svg"
                    />
                    <div className={styles.amenityLabel}>Lakeside</div>
                  </div>
                  <div className={styles.amenityIconRowAlt}>
                    <img
                      className={styles.amenityIconAlt}
                      loading="eager"
                      alt=""
                      src="/tablertoolskitchen2.svg"
                    />
                    <div className={styles.amenityLabelAlt}>Kitchen</div>
                  </div>
                  <div className={styles.amenityIconRowSecondary}>
                    <img
                      className={styles.amenityIconSecondary}
                      loading="eager"
                      alt=""
                      src="/materialsymbolsnestcamiqoutdooroutline.svg"
                    />
                    <div className={styles.amenityLabelSecondary}>
                      Security cameras on property
                    </div>
                  </div>
                  <div className={styles.amenityIconRowTertiary}>
                    <img
                      className={styles.amenityIconTertiary}
                      loading="eager"
                      alt=""
                      src="/ionwifi.svg"
                    />
                    <div className={styles.amenityLabelTertiary}>Wifi</div>
                  </div>
                </div>
                <div className={styles.amenityIconRow1}>
                  <div className={styles.phcarParent}>
                    <img
                      className={styles.phcarIcon}
                      loading="eager"
                      alt=""
                      src="/phcar.svg"
                    />
                    <div className={styles.freeParking}>Free parking</div>
                  </div>
                  <div className={styles.cilshowerParent}>
                    <img
                      className={styles.cilshowerIcon}
                      alt=""
                      src="/cilshower.svg"
                    />
                    <div className={styles.outdoorShower}>Outdoor shower</div>
                  </div>
                  <div className={styles.materialSymbolswaterVocOutParent}>
                    <img
                      className={styles.materialSymbolswaterVocOutIcon}
                      loading="eager"
                      alt=""
                      src="/materialsymbolswatervocoutlinerounded.svg"
                    />
                    <div className={styles.hotWater}>Hot water</div>
                  </div>
                  <div className={styles.covidpersonalHygieneHandLiParent}>
                    <img
                      className={styles.covidpersonalHygieneHandLiIcon}
                      loading="eager"
                      alt=""
                      src="/covidpersonalhygienehandliquidsoap.svg"
                    />
                    <div className={styles.shampoo}>Shampoo</div>
                  </div>
                </div>
                <div className={styles.amenityIconRow2}>
                  <div className={styles.phfireExtinguisherParent}>
                    <img
                      className={styles.phfireExtinguisherIcon}
                      alt=""
                      src="/phfireextinguisher.svg"
                    />
                    <div className={styles.fireExtinguisher}>
                      Fire Extinguisher
                    </div>
                  </div>
                  <div className={styles.streamlinefoodKitchenwareReParent}>
                    <img
                      className={styles.streamlinefoodKitchenwareReIcon}
                      alt=""
                      src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                    />
                    <div className={styles.freezer}>Freezer</div>
                  </div>
                  <div className={styles.materialSymbolscoffeeMakerParent}>
                    <img
                      className={styles.materialSymbolscoffeeMakerIcon}
                      loading="eager"
                      alt=""
                      src="/materialsymbolscoffeemakeroutline.svg"
                    />
                    <div className={styles.coffeeMaker}>Coffee Maker</div>
                  </div>
                  <div className={styles.mdistoveParent}>
                    <img
                      className={styles.mdistoveIcon}
                      loading="eager"
                      alt=""
                      src="/mdistove.svg"
                    />
                    <div className={styles.glassStove}>Glass stove</div>
                  </div>
                </div>
              </div>
              <button className={styles.bookButton}>
                <div className={styles.actionButton}>Show all amenities</div>
              </button>
            </div>
          </div>
          <div className={styles.locationSection}>
            <div className={styles.locationFrame}>
              <div className={styles.locationSection1}>
                <div className={styles.locationContainer}>
                  <h3 className={styles.locationTitle}>Where you’ll be</h3>
                  <div className={styles.locationMapFrame}>
                    <img
                      className={styles.locationPinIcon}
                      alt=""
                      src="/location-pin-icon.svg"
                    />
                    <div className={styles.locationName}>The Bridle Path</div>
                  </div>
                </div>
                <div className={styles.weatherSection}>
                  <div className={styles.weatherContainer}>
                    <img
                      className={styles.weatherIconFrame}
                      loading="eager"
                      alt=""
                      src="/suncloud.svg"
                    />
                    <div className={styles.weatherDetailsFrame}>
                      <div className={styles.temperatureText}>20°C</div>
                      <div className={styles.weatherDescription}>
                        Broken clouds
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.sunParent}>
                      <img className={styles.sunIcon} alt="" src="/sun.svg" />
                      <div className={styles.cWrapper}>
                        <b className={styles.c}>23°C</b>
                      </div>
                    </div>
                    <div className={styles.sunGroup}>
                      <div className={styles.sun}>Sun</div>
                      <div className={styles.aug}>27 Aug</div>
                    </div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.suncloudParent}>
                      <img
                        className={styles.suncloudIcon}
                        alt=""
                        src="/suncloud.svg"
                      />
                      <div className={styles.cContainer}>
                        <b className={styles.c1}>22°C</b>
                      </div>
                    </div>
                    <div className={styles.monParent}>
                      <div className={styles.mon}>Mon</div>
                      <div className={styles.aug1}>28 Aug</div>
                    </div>
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.sunContainer}>
                      <img className={styles.sunIcon1} alt="" src="/sun.svg" />
                      <div className={styles.cFrame}>
                        <b className={styles.c2}>23°C</b>
                      </div>
                    </div>
                    <div className={styles.tueParent}>
                      <div className={styles.tue}>Tue</div>
                      <div className={styles.aug2}>29 Aug</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.suncloudGroup}>
                      <img
                        className={styles.suncloudIcon1}
                        alt=""
                        src="/suncloud.svg"
                      />
                      <div className={styles.cWrapper1}>
                        <b className={styles.c3}>20°C</b>
                      </div>
                    </div>
                    <div className={styles.wedParent}>
                      <div className={styles.wed}>Wed</div>
                      <div className={styles.aug3}>30 Aug</div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.suncloudContainer}>
                      <img
                        className={styles.suncloudIcon2}
                        alt=""
                        src="/suncloud.svg"
                      />
                      <div className={styles.cWrapper2}>
                        <b className={styles.c4}>19°C</b>
                      </div>
                    </div>
                    <div className={styles.thuParent}>
                      <div className={styles.thu}>Thu</div>
                      <div className={styles.aug4}>31 Aug</div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.sunParent1}>
                      <img className={styles.sunIcon2} alt="" src="/sun.svg" />
                      <div className={styles.cWrapper3}>
                        <b className={styles.c5}>24°C</b>
                      </div>
                    </div>
                    <div className={styles.friParent}>
                      <div className={styles.fri}>Fri</div>
                      <div className={styles.sep}>1 Sep</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.locationMapBackground}
                alt=""
                src="/location-map-background@2x.png"
              />
              <img
                className={styles.locationMapOverlay}
                loading="eager"
                alt=""
                src="/frame-92.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsContainer}>
          <h3 className={styles.reviewsTitle}>Reviews</h3>
          <div className={styles.allReviewsButton}>View all</div>
        </div>
        <div className={styles.reviewListFrame}>
          <div className={styles.reviewFrames}>
            <div className={styles.reviewerInfoFrames}>
              <div className={styles.reviewerProfileFrames}>
                <img
                  className={styles.reviewerAvatarFrames}
                  loading="eager"
                  alt=""
                  src="/ellipse-12@2x.png"
                />
                <div className={styles.reviewerNameDateFrames}>
                  <div className={styles.reviewerNames}>Johnny Cash</div>
                  <div className={styles.reviewDates}>June 2023</div>
                </div>
              </div>
              <div className={styles.reviewContentFrames}>
                <div className={styles.reviewText}>5.0</div>
                <img
                  className={styles.reviewIcons}
                  loading="eager"
                  alt=""
                  src="/rating-vector.svg"
                />
              </div>
            </div>
            <div className={styles.reviewComments}>
              Michelle’s place was so great and definitely the perfect place for
              our long weekend. The lake is amazing!
            </div>
          </div>
          <div className={styles.reviewFrames1}>
            <div className={styles.frameParent3}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  loading="eager"
                  alt=""
                  src="/ellipse-121@2x.png"
                />
                <div className={styles.yutaWatanabeParent}>
                  <div className={styles.yutaWatanabe}>Yuta Watanabe</div>
                  <div className={styles.may2023}>May 2023</div>
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>4.5</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/rating-vector.svg"
                />
              </div>
            </div>
            <div className={styles.theLocationIs}>
              The location is perfect. I love the lake so much!!! This is one of
              the best stays we had for a while. Definitely recommended.
            </div>
          </div>
          <div className={styles.reviewFrames2}>
            <div className={styles.frameParent4}>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/ellipse-122@2x.png"
                />
                <div className={styles.shaneWillisParent}>
                  <div className={styles.shaneWillis}>Shane Willis</div>
                  <div className={styles.december2022}>December 2022</div>
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.div1}>4.8</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/rating-vector.svg"
                />
              </div>
            </div>
            <div className={styles.aGreatPlace}>
              A great place overall. One of the nicest place in town for sure. I
              will come back in the next few months with my family :)
            </div>
          </div>
        </div>
      </section>
      <section className={styles.similarStaysSection}>
        <div className={styles.similarStaysSection1}>
          <h3 className={styles.similarStaysHeader}>Similar stays</h3>
          <div className={styles.viewAllButton}>View all</div>
        </div>
        <div className={styles.stayPreviewList}>
          <div className={styles.stayPreviewItems}>
            <div className={styles.stayPreview}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
                <div className={styles.superhost}>Superhost</div>
              </div>
              <div className={styles.wrapperFavoriteIconInstance}>
                <img
                  className={styles.favoriteIconInstances}
                  loading="eager"
                  alt=""
                  src="/hearticon1.svg"
                />
              </div>
            </div>
            <div className={styles.stayDetailsFrames}>
              <div className={styles.stayInfoFrames}>
                <div className={styles.stayTitles}>
                  <div className={styles.stayNames}>Missisuaga Aistream</div>
                  <div className={styles.stayLocations}>
                    Missisauga, Ontario, Canada
                  </div>
                </div>
                <div className={styles.stayRatingFrames}>
                  <div className={styles.ratingIcons}>4.8</div>
                  <img
                    className={styles.ratingVectorsIcon}
                    loading="eager"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.stayPriceFrames}>
                <div className={styles.priceInfoFrames}>
                  <div className={styles.priceLabels}>$502</div>
                  <div className={styles.pricePerNight}>/night</div>
                </div>
                <img
                  className={styles.priceVectorsIcon}
                  loading="eager"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.guestInfoFrames}>
                  <img
                    className={styles.guestIcons}
                    loading="eager"
                    alt=""
                    src="/user.svg"
                  />
                  <div className={styles.guestCounts}>2 guests</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stayPreviewItems1}>
            <div className={styles.frameParent5}>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
                <div className={styles.superhost1}>Superhost</div>
              </div>
              <div className={styles.wrapperHeartIcon}>
                <img
                  className={styles.heartIcon}
                  loading="eager"
                  alt=""
                  src="/hearticon1.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.urbanLoftParent}>
                  <div className={styles.urbanLoft}>Urban Loft</div>
                  <div className={styles.urbanLoft1}>Urban Loft</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>4.8</div>
                  <img
                    className={styles.vectorIcon4}
                    loading="eager"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.parent1}>
                  <div className={styles.div3}>$502</div>
                  <div className={styles.night}>/night</div>
                </div>
                <img className={styles.frameInner} alt="" src="/vector-1.svg" />
                <div className={styles.userParent}>
                  <img
                    className={styles.userIcon}
                    loading="eager"
                    alt=""
                    src="/user.svg"
                  />
                  <div className={styles.guests}>2 guests</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stayPreviewItems2}>
            <div className={styles.frameParent9}>
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon5} alt="" src="/vector.svg" />
                <div className={styles.superhost2}>Superhost</div>
              </div>
              <div className={styles.wrapperHeartIcon1}>
                <img
                  className={styles.heartIcon1}
                  loading="eager"
                  alt=""
                  src="/hearticon1.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.frameParent11}>
                <div className={styles.forestvilleCottagesParent}>
                  <div className={styles.forestvilleCottages}>
                    Forestville Cottages
                  </div>
                  <div className={styles.simcoeOntarioCanada}>
                    Simcoe, Ontario Canada
                  </div>
                </div>
                <div className={styles.parent2}>
                  <div className={styles.div4}>4.8</div>
                  <img
                    className={styles.vectorIcon6}
                    loading="eager"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent12}>
                <div className={styles.parent3}>
                  <div className={styles.div5}>$502</div>
                  <div className={styles.night1}>/night</div>
                </div>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.userGroup}>
                  <img
                    className={styles.userIcon1}
                    loading="eager"
                    alt=""
                    src="/user.svg"
                  />
                  <div className={styles.guests1}>2 guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footerSection}>
        <div className={styles.footerTopFrames}>
          <div className={styles.footerLinksFrames}>
            <div className={styles.hostingInfoFrames}>
              <div className={styles.supportOptions}>
                <div className={styles.supportLink}>Support</div>
                <div className={styles.supportResources}>Help Centre</div>
                <div className={styles.supportResources1}>AirCover</div>
                <div className={styles.supportResources2}>
                  Combating discrimination
                </div>
                <div className={styles.supportResources3}>
                  Supporting people with disabilities
                </div>
                <div className={styles.supportResources4}>
                  Cencellation options
                </div>
                <div className={styles.supportResources5}>
                  Report neighbourhood concern
                </div>
              </div>
              <div className={styles.hostingLinks}>
                <div className={styles.hostingCategories}>Hosting</div>
                <div className={styles.localCategories}>Local home</div>
                <div className={styles.hostResources}>Cover for hosts</div>
                <div className={styles.hostingGuides}>Hosting resources</div>
                <div className={styles.engagementPrograms}>Community forum</div>
                <div className={styles.responsibleHostingInfo}>
                  Hosting responsibly
                </div>
              </div>
              <div className={styles.hostingLinks1}>
                <div className={styles.localhost}>Localhost</div>
                <div className={styles.newsroom}>Newsroom</div>
                <div className={styles.newFeatures}>New Features</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.investres}>Investres</div>
                <div className={styles.giftCards}>Gift cards</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.legalSection}>
            <div className={styles.copyrightInfo}>
              <div className={styles.rightsDeclaration}>
                © 2023 Localhost, Inc. All Rights Reserved
              </div>
              <div className={styles.policyLinks}>
                <div className={styles.policyNavigation}>Privacy Policy</div>
                <div
                  className={styles.policyNavigation1}
                >{`Terms & Conditions`}</div>
                <div className={styles.policyNavigation2}>Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetailsFrame;
