import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, SafeAreaView, Image, 
  TouchableOpacity, ScrollView, Dimensions 
} from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Thêm navigation vào props
const ProductDetailScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        {/* Sửa: Thêm onPress để quay lại trang trước (Home) */}
        <TouchableOpacity 
          style={styles.headerBtn} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={26} color="#181725" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.headerBtn}>
          <Entypo name="share-alternative" size={22} color="#181725" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.imageWrapper}>
          <Image 
            source={require('../assets/anh/tao.png')} 
            style={styles.mainImage} 
            resizeMode="contain" 
          />

          <View style={styles.pagination}>
            <View style={styles.activeDot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.contentSection}>
          <View style={styles.titleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>Naturel Red Apple</Text>
              <Text style={styles.productSpec}>1kg, Price</Text>
            </View>
            <TouchableOpacity>
              <Image source={require('../assets/anh/tim.png')} style={styles.heartIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <View style={styles.priceRow}>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
                <MaterialIcons name="remove" size={30} color="#B3B3B3" />
              </TouchableOpacity>
              <View style={styles.quantityDisplay}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <MaterialIcons name="add" size={30} color="#53B175" />
              </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>$4.99</Text>
          </View>

          <View style={styles.line} />

          <TouchableOpacity style={styles.accordionHeader} onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Ionicons name={isExpanded ? "chevron-down" : "chevron-forward"} size={20} color="#181725" />
          </TouchableOpacity>
          {isExpanded && (
            <Text style={styles.description}>
              Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.
            </Text>
          )}

          <View style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={styles.row}>
              <View style={styles.nutritionTag}><Text style={styles.tagText}>100gr</Text></View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </View>

          <View style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.row}>
              <View style={styles.stars}>
                {[1,2,3,4,5].map(i => <Ionicons key={i} name="star" size={16} color="#F3603F" />)}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {/* Bạn có thể thêm điều hướng vào đây nếu muốn ấn nút này xong chuyển sang Explore */}
        <TouchableOpacity 
          style={styles.basketBtn}
          onPress={() => navigation.navigate('Explore')}
        >
          <Text style={styles.basketBtnText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    paddingTop: 10, 
    position: 'absolute', 
    zIndex: 1, 
    width: '100%' 
  },
  headerBtn: { padding: 10 },
  imageWrapper: { 
    height: 350, 
    backgroundColor: '#F2F3F2', 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  mainImage: { width: width * 0.8, height: 200 },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 20 },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#B3B3B3', marginHorizontal: 3 },
  activeDot: { width: 15, height: 4, borderRadius: 2, backgroundColor: '#53B175', marginHorizontal: 3 },
  contentSection: { padding: 25 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productName: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  productSpec: { fontSize: 16, color: '#7C7C7C', marginTop: 5 },
  heartIcon: { width: 24, height: 24 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 },
  counter: { flexDirection: 'row', alignItems: 'center' },
  quantityDisplay: { 
    borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, 
    width: 45, height: 45, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 
  },
  quantityText: { fontSize: 18, fontWeight: 'bold' },
  priceText: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  line: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 25 },
  accordionHeader: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' 
  },
  accordionTitle: { fontSize: 16, fontWeight: '600', color: '#181725' },
  description: { color: '#7C7C7C', lineHeight: 21, fontSize: 13, marginTop: 10, marginBottom: 5 },
  row: { flexDirection: 'row', alignItems: 'center' },
  nutritionTag: { backgroundColor: '#EBEBEB', padding: 5, borderRadius: 5, marginRight: 10 },
  tagText: { fontSize: 12, color: '#7C7C7C' },
  stars: { flexDirection: 'row', marginRight: 10 },
  footer: { padding: 25 },
  basketBtn: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  basketBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});

export default ProductDetailScreen;