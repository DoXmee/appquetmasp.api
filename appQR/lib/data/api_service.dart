import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {

  static const String baseUrl = "http://192.168.1.8:3000";

  /// lấy tất cả orders để đếm SL
  static Future<List<dynamic>> getOrders() async {

    final response = await http.get(
      Uri.parse("$baseUrl/orders/"),
    );

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    }

    throw Exception("Failed to load orders");
  }

  /// tìm order theo ID
  static Future<Map<String, dynamic>?> getOrder(String id) async {

    final response = await http.get(
      Uri.parse("$baseUrl/orders/$id"),
    );

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    }
    throw Exception("Failed to load orders");
    return null;
  }
}