package crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConcretePatientManager extends PatientOperations {

    public ConcretePatientManager(Connection connection, String tableName) {
        super(connection, tableName);
    }

    @Override
    public void insertPatient(Patient patient) {
        String query = "INSERT INTO " + tableName + " (name, address, phnno, age, sex, illness) VALUES (?, ?, ?, ?, ?, ?)";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, patient.getName());
            stmt.setString(2, patient.getAddress());
            stmt.setString(3, patient.getPhnno());
            stmt.setInt(4, patient.getAge());
            stmt.setString(5, patient.getSex());
            stmt.setString(6, patient.getIllness());

            int rowsInserted = stmt.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("Patient added successfully!");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void addBillsForPatient(int patientId, String billItems, double billAmount) {
        String query = "UPDATE " + tableName + " SET bill_items=?, bill_amount=? WHERE id=?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, billItems);
            stmt.setDouble(2, billAmount);
            stmt.setInt(3, patientId);

            int rowsUpdated = stmt.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("Bills added successfully for patient with ID " + patientId);
            } else {
                System.out.println("No patient found with the given ID.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void viewPatientBills(int patientId) {
        String query = "SELECT bill_items, bill_amount FROM " + tableName + " WHERE id=?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, patientId);

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                String billItems = rs.getString("bill_items");
                double billAmount = rs.getDouble("bill_amount");

                System.out.println("Patient ID: " + patientId);
                System.out.println("Bill Items: " + billItems);
                System.out.println("Bill Amount: " + billAmount);
            } else {
                System.out.println("No bills found for patient with ID " + patientId);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void viewPatients() {
        String query = "SELECT * FROM " + tableName;

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String address = rs.getString("address");
                String phnno = rs.getString("phnno");
                int age = rs.getInt("age");
                String sex = rs.getString("sex");
                String illness = rs.getString("illness");
                String billItems = rs.getString("bill_items");
                double billAmount = rs.getDouble("bill_amount");

                System.out.println("ID: " + id);
                System.out.println("Name: " + name);
                System.out.println("Address: " + address);
                System.out.println("Phone Number: " + phnno);
                System.out.println("Age: " + age);
                System.out.println("Sex: " + sex);
                System.out.println("Illness: " + illness);
                System.out.println("Bill Items: " + billItems);
                System.out.println("Bill Amount: " + billAmount);
                System.out.println();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public Patient getPatientById(int patientId) {
        String query = "SELECT * FROM " + tableName + " WHERE id = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, patientId);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                String name = rs.getString("name");
                String address = rs.getString("address");
                String phoneNumber = rs.getString("phnno");
                int age = rs.getInt("age");
                String sex = rs.getString("sex");
                String illness = rs.getString("illness");
                String billItems = rs.getString("bill_items");
                double billAmount = rs.getDouble("bill_amount");

                return new Patient(patientId, name, address, phoneNumber, age, sex, illness, billItems, billAmount);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }
    @Override
    public void updatePatient(int id, Patient patient) {
        String query = "UPDATE " + tableName + " SET name = ?, address = ?, phnno = ?, age = ?, sex = ?, illness = ?, bill_items = ?, bill_amount = ? WHERE id = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, patient.getName());
            stmt.setString(2, patient.getAddress());
            stmt.setString(3, patient.getPhnno());
            stmt.setInt(4, patient.getAge());
            stmt.setString(5, patient.getSex());
            stmt.setString(6, patient.getIllness());
            stmt.setString(7, patient.getBillItems());
            stmt.setDouble(8, patient.getBillAmount());
            stmt.setInt(9, id);

            int rowsAffected = stmt.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Patient with ID " + id + " updated successfully!");
            } else {
                System.out.println("Failed to update patient. Please try again.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deletePatient(int patientId) {
        String query = "DELETE FROM " + tableName + " WHERE id=?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, patientId);

            int rowsDeleted = stmt.executeUpdate();
            if (rowsDeleted > 0) {
                System.out.println("Patient with ID " + patientId + " deleted successfully!");
            } else {
                System.out.println("No patient found with the given ID.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean checkPatientExists(int patientId) {
        String query = "SELECT COUNT(*) FROM " + tableName + " WHERE id = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, patientId);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                int count = rs.getInt(1);
                return count > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }
}
