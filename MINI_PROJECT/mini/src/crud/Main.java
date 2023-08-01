package crud;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {
    // Method to establish a connection with the database
    private static Connection getConnection(String url, String username, String password) throws SQLException {
        return DriverManager.getConnection(url, username, password);
    }

    public static void main(String[] args) {
        try {
            // Connect to the database
            Connection connection = getConnection("jdbc:mysql://localhost:3306/mini", "root", "Pr@040903");

            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            String username;
            String password;
            boolean loggedIn = false;
            User currentUser = null;

            do {
                System.out.println("Enter your username: ");
                username = br.readLine();
                System.out.println("Enter your password: ");
                password = br.readLine();

                UserManager userManager = new UserManager(connection);
                currentUser = userManager.loginUser(username, password);

                if (currentUser == null) {
                    System.out.println("Invalid credentials. Please try again.");
                } else {
                    String userType = currentUser.getUserType();
                    if (userType != null) {
                        System.out.println("Logged in as " + userType);
                    } else {
                        System.out.println("User type is not available.");
                    }
                    loggedIn = true;
                }
            } while (!loggedIn);



            System.out.println("Logged in as " + currentUser.getUserType());

            System.out.println("Enter the Table Name: ");
            String tname = br.readLine();

            // Depending on user type, create appropriate PatientManager
            PatientOperations patientManager;
            if (currentUser instanceof Admin) {
                patientManager = new AdminPatientManager(connection, tname);
            } else {
                patientManager = new RegularUserPatientManager(connection, tname);
            }

            int choice;
            do {
                System.out.println("CRUD Operations:");
                System.out.println("1. Insert patient details");
                System.out.println("2. View table data");
                System.out.println("3. Update patient details");
                System.out.println("4. Delete patient from the table");
                System.out.println("5. Add bills for a particular ID");
                System.out.println("6. View bills for a particular ID");
                System.out.println("7. Exit");
                System.out.println("Enter choice:");

                choice = Integer.parseInt(br.readLine());

                switch (choice) {
                case 1:
                    System.out.println("Enter the values to insert:");

                    System.out.print("Name: ");
                    String name = br.readLine();
                    System.out.print("Address: ");
                    String address = br.readLine();
                    System.out.print("Phone Number: ");
                    String phoneNumber = br.readLine();
                    System.out.print("Age: ");
                    int age = Integer.parseInt(br.readLine());
                    System.out.print("Sex: ");
                    String sex = br.readLine();
                    System.out.print("Illness: ");
                    String illness = br.readLine();

                    // Create a new Patient object with the entered details
                    Patient patient = new Patient(age, name, address, phoneNumber, age, sex, illness,"",0.0);

                    // Insert the patient into the database using the PatientManager
                    patientManager.insertPatient(patient);
                    break;

                case 2:
                    System.out.println("Viewing all patient records:");

                    // Retrieve all patient records from the database using the PatientManager
                    patientManager.viewPatients();
                    break;

                case 3:
                    System.out.println("Enter the ID of the row to update:");
                    int idToUpdate = Integer.parseInt(br.readLine());

                    // Retrieve the patient record based on the given ID
                    Patient existingPatient = patientManager.getPatientById(idToUpdate);

                    if (existingPatient != null) {
                        System.out.println("Current Data for ID: " + idToUpdate);
                        System.out.println("1. Name: " + existingPatient.getName());
                        System.out.println("2. Address: " + existingPatient.getAddress());
                        System.out.println("3. Phone Number: " + existingPatient.getPhnno());
                        System.out.println("4. Age: " + existingPatient.getAge());
                        System.out.println("5. Sex: " + existingPatient.getSex());
                        System.out.println("6. Illness: " + existingPatient.getIllness());

                        System.out.print("Enter the number of the field to update: ");
                        int fieldToUpdate = Integer.parseInt(br.readLine());

                        switch (fieldToUpdate) {
                            case 1:
                                System.out.print("Enter new Name: ");
                                String updatedName = br.readLine();
                                existingPatient.setName(updatedName);
                                break;
                            case 2:
                                System.out.print("Enter new Address: ");
                                String updatedAddress = br.readLine();
                                existingPatient.setAddress(updatedAddress);
                                break;
                            case 3:
                                System.out.print("Enter new Phone Number: ");
                                String updatedPhnno = br.readLine();
                                existingPatient.setPhnno(updatedPhnno);
                                break;
                            case 4:
                                System.out.print("Enter new Age: ");
                                int updatedAge = Integer.parseInt(br.readLine());
                                existingPatient.setAge(updatedAge);
                                break;
                            case 5:
                                System.out.print("Enter new Sex: ");
                                String updatedSex = br.readLine();
                                existingPatient.setSex(updatedSex);
                                break;
                            case 6:
                                System.out.print("Enter new Illness: ");
                                String updatedIllness = br.readLine();
                                existingPatient.setIllness(updatedIllness);
                                break;
                            default:
                                System.out.println("Invalid choice!");
                                break;
                        }

                        // Update the patient record in the database
                        patientManager.updatePatient(idToUpdate, existingPatient);
                    } else {
                        System.out.println("No patient found with the given ID.");
                    }
                    break;

                case 4:
                    System.out.println("Enter the ID of the row to delete:");
                    int idToDelete = Integer.parseInt(br.readLine());

                    // Check if the patient record with the given ID exists
                    boolean isPatientExistsToDelete = patientManager.checkPatientExists(idToDelete);

                    if (isPatientExistsToDelete) {
                        // Delete the patient record from the database
                        patientManager.deletePatient(idToDelete);
                        System.out.println("Patient with ID " + idToDelete + " deleted successfully!");
                    } else {
                        System.out.println("No patient found with the given ID.");
                    }
                    break;

              
                case 5:
                    System.out.println("Enter the ID to add bills:");
                    int idForBills1 = Integer.parseInt(br.readLine());

                    // Check if the patient record with the given ID exists
                    boolean isPatientExistsToAddBills = patientManager.checkPatientExists(idForBills1);

                    if (isPatientExistsToAddBills) {
                        System.out.print("Enter bill items: ");
                        String billItemsForId = br.readLine();

                        System.out.print("Enter bill amount: ");
                        double billAmountForId = Double.parseDouble(br.readLine());

                        // Update the bill items and bill amount for the patient
                        patientManager.addBillsForPatient(idForBills1, billItemsForId, billAmountForId);
                        System.out.println("Bills added successfully for patient with ID " + idForBills1);
                    } else {
                        System.out.println("No patient found with the given ID.");
                    }
                    break;
                
                case 6:
                    System.out.println("Enter the ID to view bills:");
                    int idToViewBills = Integer.parseInt(br.readLine());

                    // View bills for the patient with the given ID
                    patientManager.viewPatientBills(idToViewBills);
                    break;
                case 7:
                	System.out.println("THANKYOU!");
                	break;
                default:
                    System.out.println("Invalid choice!");
                    break;
            }
        } while (choice != 7);


            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
