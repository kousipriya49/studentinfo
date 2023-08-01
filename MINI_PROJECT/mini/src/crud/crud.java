//package crud;
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;
//
//public class crud{
//    public static void main(String args[]) {
//        try {
//            Class.forName("com.mysql.jdbc.Driver");
//            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mini", "root", "Pr@040903");
//            Statement st = con.createStatement();
//            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//            String username;
//            String password;
//            boolean loggedIn = false;
//
//            do {
//                System.out.println("Enter your username: ");
//                username = br.readLine();
//                System.out.println("Enter your password: ");
//                password = br.readLine();
//
//                loggedIn = loginUser(con, username, password);
//
//                if (!loggedIn) {
//                    System.out.println("Invalid credentials. Please try again.");
//                }
//            } while (!loggedIn);
//
//            System.out.println("Enter the Table Name: ");
//            String tname = br.readLine();
//
//            int choice;
//            do {
//                System.out.println("CRUD Operations:");
//                System.out.println("1. Insert patient details");
//                System.out.println("2. View table data");
//                System.out.println("3. Update patient details");
//                System.out.println("4. Delete patient from the table");
//                System.out.println("5. Add bills for a particular ID");
//                System.out.println("6. Exit");
//                System.out.println("Enter choice:");
//
//                choice = Integer.parseInt(br.readLine());
//
//                switch (choice) {
//                case 1:
//                    System.out.println("Enter the values to insert:");
//                    // Skip asking for Id from the user since it will be generated automatically.
//                    // int id = Integer.parseInt(br.readLine());
//
//                    System.out.print("Name: ");
//                    String name = br.readLine();
//                    System.out.print("Address: ");
//                    String address = br.readLine();
//                    System.out.print("Phn no: ");
//                    String phnno = br.readLine();
//                    System.out.print("Enter age: ");
//                    int age = Integer.parseInt(br.readLine());
//                    System.out.print("Enter sex: ");
//                    String sex = br.readLine();
//                    System.out.print("Enter illness: ");
//                    String illness = br.readLine();
//                    System.out.print("Enter bill items: ");
//                    String billItems = br.readLine();
//                    System.out.print("Enter bill amount: ");
//                    double billAmount = Double.parseDouble(br.readLine());
//
//                    String insertQuery = "insert into " + tname + "(name, address, phnno, age, sex, illness, bill_items, bill_amount) values (?, ?, ?, ?, ?, ?, ?, ?)";
//                    PreparedStatement insertStatement = con.prepareStatement(insertQuery, Statement.RETURN_GENERATED_KEYS);
//                    // Skip setting Id in the insert statement.
//
//                    insertStatement.setString(1, name);
//                    insertStatement.setString(2, address);
//                    insertStatement.setString(3, phnno);
//                    insertStatement.setInt(4, age);
//                    insertStatement.setString(5, sex);
//                    insertStatement.setString(6, illness);
//                    insertStatement.setString(7, billItems);
//                    insertStatement.setDouble(8, billAmount);
//                    insertStatement.executeUpdate();
//
//                    // Retrieve the generated Id
//                    ResultSet generatedKeys = insertStatement.getGeneratedKeys();
//                    if (generatedKeys.next()) {
//                        int generatedId = generatedKeys.getInt(1);
//                        System.out.println("Generated Id: " + generatedId);
//                    }
//
//                    insertStatement.close();
//                    break;
//
//                case 2:
//                	   String viewQuery = "select * from " + tname;
//                       ResultSet resultSet = st.executeQuery(viewQuery);
//                       System.out.println("Table Data:");
//                       while (resultSet.next()) {
//                           int recordId = resultSet.getInt("Id");
//                           String recordName = resultSet.getString("name");
//                           String recordAddress = resultSet.getString("address");
//                           String recordPhnno = resultSet.getString("phnno");
//                           int recordAge = resultSet.getInt("age");
//                           String recordSex = resultSet.getString("sex");
//                           String recordIllness = resultSet.getString("illness");
//                           System.out.println("Id: " + recordId + ", Name: " + recordName + ", Address: " + recordAddress + ", Phn no: " + recordPhnno + ", Age: " + recordAge + ", Sex: " + recordSex + ", Illness: " + recordIllness);
//                       }
//                       resultSet.close();
//                       break;
//
//
//                case 3:
//                    System.out.println("Enter the ID of the row to update:");
//                    int idToUpdate = Integer.parseInt(br.readLine());
//
//                    String viewSingleQuery = "select * from " + tname + " where Id = ?";
//                    PreparedStatement viewSingleStatement = con.prepareStatement(viewSingleQuery);
//                    viewSingleStatement.setInt(1, idToUpdate);
//                    ResultSet singleResult = viewSingleStatement.executeQuery();
//
//                    if (singleResult.next()) {
//                        int recordId = singleResult.getInt("Id");
//                        String recordName = singleResult.getString("name");
//                        String recordAddress = singleResult.getString("address");
//                        String recordPhnno = singleResult.getString("phnno");
//                        int recordAge = singleResult.getInt("age");
//                        String recordSex = singleResult.getString("sex");
//                        String recordIllness = singleResult.getString("illness");
//                        String recordBillItems = singleResult.getString("bill_items");
//                        double recordBillAmount = singleResult.getDouble("bill_amount");
//
//                        System.out.println("Current Data for ID: " + idToUpdate);
//                        System.out.println("1. Name: " + recordName);
//                        System.out.println("2. Address: " + recordAddress);
//                        System.out.println("3. Phone Number: " + recordPhnno);
//                        System.out.println("4. Age: " + recordAge);
//                        System.out.println("5. Sex: " + recordSex);
//                        System.out.println("6. Illness: " + recordIllness);
//                        System.out.println("7. Bill Items: " + recordBillItems);
//                        System.out.println("8. Bill Amount: " + recordBillAmount);
//
//                        System.out.print("Enter the number of the field to update: ");
//                        int fieldToUpdate = Integer.parseInt(br.readLine());
//
//                        switch (fieldToUpdate) {
//                        case 1:
//                            System.out.print("Enter new Name: ");
//                            String updatedName = br.readLine();
//                            String updateNameQuery = "update " + tname + " set name = ? where Id = ?";
//                            PreparedStatement updateNameStatement = con.prepareStatement(updateNameQuery);
//                            updateNameStatement.setString(1, updatedName);
//                            updateNameStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedName = updateNameStatement.executeUpdate();
//                            if (rowsUpdatedName > 0) {
//                                System.out.println("Name updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateNameStatement.close();
//                            break;
//
//                        case 2:
//                            System.out.print("Enter new Address: ");
//                            String updatedAddress = br.readLine();
//                            String updateAddressQuery = "update " + tname + " set address = ? where Id = ?";
//                            PreparedStatement updateAddressStatement = con.prepareStatement(updateAddressQuery);
//                            updateAddressStatement.setString(1, updatedAddress);
//                            updateAddressStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedAddress = updateAddressStatement.executeUpdate();
//                            if (rowsUpdatedAddress > 0) {
//                                System.out.println("Address updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateAddressStatement.close();
//                            break;
//
//                        case 3:
//                            System.out.print("Enter new Phone Number: ");
//                            String updatedPhnno = br.readLine();
//                            String updatePhnnoQuery = "update " + tname + " set phnno = ? where Id = ?";
//                            PreparedStatement updatePhnnoStatement = con.prepareStatement(updatePhnnoQuery);
//                            updatePhnnoStatement.setString(1, updatedPhnno);
//                            updatePhnnoStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedPhnno = updatePhnnoStatement.executeUpdate();
//                            if (rowsUpdatedPhnno > 0) {
//                                System.out.println("Phone Number updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updatePhnnoStatement.close();
//                            break;
//
//                        case 4:
//                            System.out.print("Enter new Age: ");
//                            int updatedAge = Integer.parseInt(br.readLine());
//                            String updateAgeQuery = "update " + tname + " set age = ? where Id = ?";
//                            PreparedStatement updateAgeStatement = con.prepareStatement(updateAgeQuery);
//                            updateAgeStatement.setInt(1, updatedAge);
//                            updateAgeStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedAge = updateAgeStatement.executeUpdate();
//                            if (rowsUpdatedAge > 0) {
//                                System.out.println("Age updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateAgeStatement.close();
//                            break;
//
//                        case 5:
//                            System.out.print("Enter new Sex: ");
//                            String updatedSex = br.readLine();
//                            String updateSexQuery = "update " + tname + " set sex = ? where Id = ?";
//                            PreparedStatement updateSexStatement = con.prepareStatement(updateSexQuery);
//                            updateSexStatement.setString(1, updatedSex);
//                            updateSexStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedSex = updateSexStatement.executeUpdate();
//                            if (rowsUpdatedSex > 0) {
//                                System.out.println("Sex updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateSexStatement.close();
//                            break;
//
//                        case 6:
//                            System.out.print("Enter new Illness: ");
//                            String updatedIllness = br.readLine();
//                            String updateIllnessQuery = "update " + tname + " set illness = ? where Id = ?";
//                            PreparedStatement updateIllnessStatement = con.prepareStatement(updateIllnessQuery);
//                            updateIllnessStatement.setString(1, updatedIllness);
//                            updateIllnessStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedIllness = updateIllnessStatement.executeUpdate();
//                            if (rowsUpdatedIllness > 0) {
//                                System.out.println("Illness updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateIllnessStatement.close();
//                            break;
//
//                        case 7:
//                            System.out.print("Enter new Bill Items: ");
//                            String updatedBillItems = br.readLine();
//                            String updateBillItemsQuery = "update " + tname + " set bill_items = ? where Id = ?";
//                            PreparedStatement updateBillItemsStatement = con.prepareStatement(updateBillItemsQuery);
//                            updateBillItemsStatement.setString(1, updatedBillItems);
//                            updateBillItemsStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedBillItems = updateBillItemsStatement.executeUpdate();
//                            if (rowsUpdatedBillItems > 0) {
//                                System.out.println("Bill Items updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateBillItemsStatement.close();
//                            break;
//
//                        case 8:
//                            System.out.print("Enter new Bill Amount: ");
//                            double updatedBillAmount = Double.parseDouble(br.readLine());
//                            String updateBillAmountQuery = "update " + tname + " set bill_amount = ? where Id = ?";
//                            PreparedStatement updateBillAmountStatement = con.prepareStatement(updateBillAmountQuery);
//                            updateBillAmountStatement.setDouble(1, updatedBillAmount);
//                            updateBillAmountStatement.setInt(2, idToUpdate);
//                            int rowsUpdatedBillAmount = updateBillAmountStatement.executeUpdate();
//                            if (rowsUpdatedBillAmount > 0) {
//                                System.out.println("Bill Amount updated successfully!");
//                            } else {
//                                System.out.println("No rows found with the given ID.");
//                            }
//                            updateBillAmountStatement.close();
//                            break;
//
//                        default:
//                            System.out.println("Invalid choice!");
//                            break;
//                    }
//                    viewSingleStatement.close();
//                    break;
//                    }
//                case 4:
//                	 System.out.println("Enter the Id of the row to delete:");
//                     int idToDelete = Integer.parseInt(br.readLine());
//
//                     String deleteQuery = "delete from " + tname + " where Id = ?";
//                     PreparedStatement deleteStatement = con.prepareStatement(deleteQuery);
//                     deleteStatement.setInt(1, idToDelete);
//                     int rowsDeleted = deleteStatement.executeUpdate();
//                     if (rowsDeleted > 0) {
//                         System.out.println("Row deleted successfully!");
//                     } else {
//                         System.out.println("No rows found with the given Id.");
//                     }
//                     deleteStatement.close();
//                     break;
//
//
//                case 5:
//                    System.out.println("Enter the ID to add bills:");
//                    int idForBills = Integer.parseInt(br.readLine());
//                    System.out.print("Enter bill items: ");
//                    String billItemsForId = br.readLine();
//                    System.out.print("Enter bill amount: ");
//                    double billAmountForId = Double.parseDouble(br.readLine());
//
//                    String insertBillQuery = "update " + tname + " set bill_items = ?, bill_amount = ? where Id = ?";
//                    PreparedStatement insertBillStatement = con.prepareStatement(insertBillQuery);
//                    insertBillStatement.setString(1, billItemsForId);
//                    insertBillStatement.setDouble(2, billAmountForId);
//                    insertBillStatement.setInt(3, idForBills);
//                    int rowsUpdated1 = insertBillStatement.executeUpdate();
//                    if (rowsUpdated1 > 0) {
//                        System.out.println("Bills added successfully for ID: " + idForBills);
//                    } else {
//                        System.out.println("No rows found with the given ID.");
//                    }
//                    insertBillStatement.close();
//                    break;
//
//
//                    case 6:
//                        break;
//
//                    default:
//                        System.out.println("Invalid choice!");
//                        break;
//                }
//            } while (choice != 6);
//
//            st.close();
//            con.close();
//        } catch (ClassNotFoundException | SQLException e) {
//            e.printStackTrace();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//    private static boolean loginUser(Connection con, String username, String password) throws SQLException {
//        String query = "SELECT * FROM users WHERE username=? AND password=?";
//        PreparedStatement pst = con.prepareStatement(query);
//        pst.setString(1, username);
//        pst.setString(2, password);
//        ResultSet rs = pst.executeQuery();
//
//        boolean loggedIn = rs.next();
//        rs.close();
//        pst.close();
//
//        return loggedIn;
//    }
//}