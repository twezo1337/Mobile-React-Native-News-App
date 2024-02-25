import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
const PostInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PostTitle = styled.Text`
  font-family: 'Montserrat';
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`;
const PostDate = styled.Text`
  font-family: 'Montserrat';
  font-size: 12px;
  font-weight: 200;
  color: #000000;
`;
const PostEdit = styled.Text`
font-family: 'Montserrat';
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 0, 0, 0.9);
`;

const truncateTitle = (str) => {
  if (str.length >= 60) {
    return str.substring(0, 50) + ' ... '
  }

  return str;
}
const truncateDate = (str) => {
  return str.substring(0, 10).replace('-', '/').replace('-', '/')
}

export const Post = ({ title, imageUrl, createdAt, edit}) => {
    return (
        <PostView>
            <PostImage
                source={{
                    uri: imageUrl
                }}
            />
            <PostDetails>
              <PostTitle>{truncateTitle(title)}</PostTitle>
              <PostInfo>
                <PostEdit>{edit}</PostEdit>
                <PostDate>{truncateDate(createdAt)}</PostDate>
              </PostInfo>
            </PostDetails>
        </PostView>
    );
    
}