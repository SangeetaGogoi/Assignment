import React from 'react';
import './App.css';
import BANNER from './Assets/Banner.jpg';
import SKYDIVING from './Assets/Sky Diving.jpg';
import SCUBADIVING from './Assets/Scuba Diving.jpg';
import BUNGEEJUMPING from './Assets/Bungee Jumping.jpg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function App() {
  return (
    <div className='App'>
      <div className='banner-container'>
        <img
          src={BANNER}
          alt='icon'
          className='banner-image'
        />
        <div className='logo'>
          Universal Adventures
        </div>
      </div>
      <div className='lower-container'>
        <div className='item-container'>
          <div className='skydiving-con'>
            <img
              src={SKYDIVING}
              alt='icon'
              className='skydiving-image'
            />
            <div className='tag'>Sky Diving</div>
          </div>
          <div className='imagesand-review'>
            <div className='scubadiving-con'>
              <div className='scubaimage-con'>
                <img
                  src={SCUBADIVING}
                  alt='icon'
                  className='scuba-image'
                />
              </div>
              <div className='scubaoptions-scheme'>
                <h2>
                  Scuba Diving in Grande Island,
                  Goa{' '}
                </h2>
                <div className='hourand-location'>
                  <h4 className='hour-con'>
                    <AccessTimeIcon
                      style={{ fontSize: '18px' }}
                    ></AccessTimeIcon>{' '}
                    8 hour
                  </h4>
                  <h4 className='location-con'>
                    <LocationOnIcon
                      style={{ fontSize: '18px' }}
                    ></LocationOnIcon>{' '}
                    Goa, India
                  </h4>
                </div>
                <div className='menu-options'>
                  <div className='snacks-con'>
                    <RestaurantMenuIcon
                      style={{ fontSize: '33px' }}
                    ></RestaurantMenuIcon>
                    <h4>Snacks</h4>
                  </div>
                  <div className='transport-con'>
                    <DirectionsCarIcon
                      style={{ fontSize: '33px' }}
                    ></DirectionsCarIcon>
                    <h4>Transport</h4>
                  </div>
                  <div className='photo-con'>
                    <PhotoCameraIcon
                      style={{ fontSize: '33px' }}
                    ></PhotoCameraIcon>
                    <h4>Photo/Video</h4>
                  </div>
                  <div className='activities-con'>
                    <FilterHdrIcon
                      style={{ fontSize: '33px' }}
                    ></FilterHdrIcon>
                    <h4>Activities</h4>
                  </div>
                </div>
                <div className='button-options'>
                  <button
                    type='submit'
                    className='boat-options'
                  >
                    Long tail boat ride
                  </button>
                  <button
                    type='submit'
                    className='underwater-options'
                  >
                    Underwater Photo & Video
                  </button>
                </div>
              </div>
              <div className='scubadiving-review'>
                <div className='for-mobilescreen'>
                  <div className='star-review'>
                    <div className='star-con'>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <div className='rate'>
                        4.7
                      </div>
                    </div>
                    <div>
                      <h4>36 reviews</h4>
                    </div>
                  </div>
                  <div className='rupees-con'>
                    <h4>Starting From</h4>{' '}
                    <div className='rupeesandicon'>
                      <CurrencyRupeeIcon
                        style={{
                          color: 'red',
                          fontSize: '24px',
                          fontWeight: '800',
                          textAlign: 'center',
                        }}
                      ></CurrencyRupeeIcon>
                      1799
                    </div>
                  </div>
                </div>
                <button className='view-btn'>
                  View Details
                </button>
              </div>
            </div>
            <div className='bungeejumping-con'>
              <div className='bungeeimage-con'>
                <img
                  src={BUNGEEJUMPING}
                  alt='icon'
                  className='bungee-image'
                />
              </div>
              <div className='bungeeoptions-scheme'>
                <h2>Bungee Jumping in Goa </h2>
                <div className='bungeehour-location'>
                  <h4 className='bungeehour-con'>
                    <AccessTimeIcon
                      style={{ fontSize: '18px' }}
                    ></AccessTimeIcon>{' '}
                    30 hour
                  </h4>
                  <h4 className='bungeelocation-con'>
                    <LocationOnIcon
                      style={{ fontSize: '18px' }}
                    ></LocationOnIcon>{' '}
                    Goa, India
                  </h4>
                </div>
                <div className='bungeemenu-options'>
                  <div className='bungeephoto-con'>
                    <PhotoCameraIcon
                      style={{ fontSize: '33px' }}
                    ></PhotoCameraIcon>
                    <h4>Photo/Video</h4>
                  </div>
                  <div className='bungeeactivities-con'>
                    <FilterHdrIcon
                      style={{ fontSize: '33px' }}
                    ></FilterHdrIcon>
                    <h4>Activities</h4>
                  </div>
                </div>
                <div className='bungeebutton-options'>
                  <button
                    type='submit'
                    className='bungeeheight'
                  >
                    61 meter height
                  </button>
                  <button
                    type='submit'
                    className='uploaded-photos'
                  >
                    Jump Photo & Video
                  </button>
                  <button
                    typr='submit'
                    className='certificate'
                  >
                    {' '}
                    Certificate
                  </button>
                </div>
              </div>
              <div className='bungeejumping-review'>
                <div className='mobilescreen'>
                  <div className='star-review'>
                    <div className='star-con'>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <StarIcon
                        style={{
                          color: 'gold',
                        }}
                      ></StarIcon>
                      <div className='rate'>
                        4.7
                      </div>
                    </div>
                    <h4>36 reviews </h4>
                  </div>
                  <div className='bungeerupees-con'>
                    <h4>Starting From</h4>{' '}
                    <div className='rupeesandicon'>
                      <CurrencyRupeeIcon
                        style={{
                          color: 'red',
                          fontSize: '24px',
                          fontWeight: '800',
                          textAlign: 'center',
                        }}
                      ></CurrencyRupeeIcon>
                      2800
                    </div>
                  </div>
                </div>
                <button className='view-btn'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
