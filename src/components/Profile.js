import React from 'react';
import styled from 'styled-components'
import SingleImage from './Image.js'

const feedsource = [
  {
    source: 'https://scontent-lhr3-1.cdninstagram.com/vp/ea6621cf5f948bd2eaf5bebfcfcde5d1/5D1B1250/t51.2885-15/e35/c0.135.1080.1080/s480x480/31819148_387652391751516_4869384593058299904_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '43',
    comments: '3',
    isVideo: false
  },
  {
    source: 'https://scontent-lhr3-1.cdninstagram.com/vp/e04efda2c540395021c64bd2b199eb14/5C7E0E30/t51.2885-15/e15/14240675_192169101203223_495226036_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '313',
    comments: '10',
    isVideo: true
  },
  {
    source: 'https://scontent-lhr3-1.cdninstagram.com/vp/9e4e0f7667fe733406f88b9f86bdf84a/5D19E7B2/t51.2885-15/e35/s480x480/14262723_1219537941422458_2127857940_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '29',
    comments: '2',
    isVideo: false
  },
  {
    source: 'https://scontent-lhr3-1.cdninstagram.com/vp/3c9520014265a02a446841b20c529066/5D188BE1/t51.2885-15/e35/c135.0.810.810/s240x240/14294939_1218250054909378_1762757626_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '18',
    comments: '2',
    isVideo: false
  },
  {
    source: 'https://scontent-lhr3-1.cdninstagram.com/vp/34afcdf7b06fc1f4a6b1a0e7985ebe1a/5D24FDF9/t51.2885-15/e35/c135.0.810.810/s480x480/14240669_1005823466206583_2103344102_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '30',
    comments: '4',
    isVideo: false
  }
]

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`

const ProfileDetails = styled.div`
  display: flex;
`
const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: transparent;
    border: 1px solid #dbdbdb;
    color: #262626;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    padding: 5px 9px;
    text-transform: capitalize;
    font-size: 14px;
    margin-left: 20px;
  }
`
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin-right: 25px;
  }
`
const ProfileDetailsName = styled.div`
  text-align: left;
  p {
    text-align: center;
  }
`

const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`

function Profile () {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png"></ProfileImage>
        </ProfileDetailsLeft>

        <ProfileDetailsRight>

          <ProfileDetailsUsername>
            <h3>yomieluwande</h3>
            <button>Edit profile</button>
          </ProfileDetailsUsername>

          <ProfileDetailsMeta>
            <p><strong>5</strong> posts</p>
            <p><strong>296</strong> followers</p>
            <p><strong>269</strong> following</p>
          </ProfileDetailsMeta>

          <ProfileDetailsName>
            <p><strong>Yomi</strong></p>
          </ProfileDetailsName>

        </ProfileDetailsRight>

      </ProfileDetails>

      <ImagesWrapper>
        {feedsource.map(item => 
          <SingleImage image={item} />
        )}
      </ImagesWrapper>
    </ProfileContainer>
  )
}

export default Profile;