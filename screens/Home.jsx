import axios from "axios";
import React from "react";
import { StyleSheet, 
         StatusBar, 
         Text, 
         View, 
         FlatList, 
         ActivityIndicator, 
         refreshControl, 
         RefreshControl,
         TouchableOpacity
} from "react-native";
import { Post } from "../components/Post"
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

export const Home = ({ navigation }) => {
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ items, setItems ] = React.useState()

  const fetchPosts = () => {
    setIsLoading(true);

    axios
    .get('https://newsdata.io/api/1/news?apikey=pub_3470845a5bd08a7aed08ae0d9a1514959a44d&q=news&language=en')
    .then(({ data }) => {
      setItems(data);

      console.log(items)
    })
    .catch(err => {
      console.log(err)
      alert('Ошибка при загрузке')
    }).finally(() => {
      setIsLoading(false)
    });
  }

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator size="large" />
        <Text style={{
          marginTop: 15
        }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data = {items == undefined ? items : items.results}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', { title: item.title, pubDate: item.pubDate, image_url: item.image_url == null ? 'https://i.pinimg.com/736x/11/13/f6/1113f62b818e33f88264df5494694b1a.jpg' : item.image_url, source_id: item.source_id, content: item.content })}>
            <Post title={ item.title } createdAt={ item.pubDate } imageUrl= { item.image_url == null ? 'https://i.pinimg.com/736x/11/13/f6/1113f62b818e33f88264df5494694b1a.jpg' : item.image_url } edit={ item.source_id } />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});