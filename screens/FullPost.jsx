import axios from "axios";
import React from "react";
import { View, ScrollView } from "react-native";
import styled from 'styled-components/native';

const PostMainContainer = styled.View`
    position: relative;
`

const PostTitleText = styled.Text`
    position: absolute;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 20px;
    color: #000000;
    top: 25px;
    left: 18px;
    width: 80%;
`

const PostImage = styled.Image`
    opacity: 0.6;
    padding-left: 50px;
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`

const PostDate = styled.Text`
    position: absolute;
    bottom: 50px;
    right: 18px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 700;
`

const PostSource = styled.Text`
    position: absolute;
    bottom: 35px;
    right: 18px;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 800;
    color: rgba(255, 0, 0, 1);
`

const PostText = styled.Text`
    font-size: 16px;
    color: #000000;
    font-family: 'Montserrat';
    font-weight: 500;
    line-height: 24px;
`

const truncateDate = (str) => {
    return str.substring(0, 10).replace('-', '/').replace('-', '/')
}

const FullPost = ( { route, navigation } ) => {
    const { title, pubDate, image_url, source_id, content } = route.params;

    React.useEffect(() => {
        navigation.setOptions({
            title,
        });
    }, []);


    return (
        <View style={{ padding: 20, backgroundColor: '#ffffff' }}>
            <ScrollView>
                <PostMainContainer>
                    <PostImage source={{ uri: image_url }}/>
                    <PostTitleText>{title}</PostTitleText>
                    <PostDate>{truncateDate(pubDate)}</PostDate>
                    <PostSource>{source_id}</PostSource>
                </PostMainContainer>
                <PostText>{ content }</PostText>
            </ScrollView>
        </View>
    )
}

export default FullPost