package crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AdminPatientManager extends PatientOperations {
    public AdminPatientManager(Connection connection, String tableName) {
        super(connection, tableName);
    }

    @Override
    public void insertPatient(Patient patient) {
        try {
            String query = "INSERT INTO " + tableName + " (name, address, phnno, age, sex, illness) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement pst = connection.prepareStatement(query);
            pst.setString(1, patient.getName());
            pst.setString(2, patient.getAddress());
            pst.setString(3, patient.getPhnno());
            pst.setInt(4, patient.getAge());
            pst.setString(5, patient.getSex());
            pst.setString(6, patient.getIllness());

            pst.executeUpdate();
            pst.close();
            System.out.println("Patient inserted successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to insert patient.");
        }
    }

    @Override
    public void addBillsForPatient(int patientId, String billItems, double billAmount) {
        try {
            String query = "UPDATE " + tableName + " SET bill_items = ?, bill_amount = ? WHERE id = ?";
            PreparedStatement pst = connection.prepareStatement(query);
            pst.setString(1, billItems);
            pst.setDouble(2, billAmount);
            pst.setInt(3, patientId);

            pst.executeUpdate();
            pst.close();
            System.out.println("Bills added successfully for patient with ID " + patientId);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to add bills for patient with ID " + patientId);
        }
    }

    @Override
    public void viewPatientBills(int patientId) {
        try {
            String query = "SELECT bill_items, bill_amount FROM " + tableName + " WHERE id = ?";
            PreparedStatement pst = connection.prepareStatement(query);
            pst.setInt(1, patientId);

            ResultSet rs = pst.executeQuery();
            if (rs.next()) {
                String billItems = rs.getString("bill_items");
                double billAmount = rs.getDouble("bill_amount");
                System.out.println("Bills for patient with ID " + patientId + ":");
                System.out.println("Bill Items: " + billItems);
                System.out.println("Bill Amount: " + billAmount);
            } else {
                System.out.println("No bills found for patient with ID " + patientId);
            }

            rs.close();
            pst.close();
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to view bills for patient with ID " + patientId);
        }
    }

    @Override
    public void viewPatients() {
        try {
            String query = "SELECT * FROM " + tableName;
            PreparedStatement pst = connection.prepareStatement(query);
            ResultSet rs = pst.executeQuery();

            System.out.println("Viewing all patient records:");
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

            rs.close();
            pst.close();
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to view patient records.");
        }
    }

    @Override
    public void updatePatient(int id, Patient patient) {
        try {
            String query = "UPDATE " + tableName + " SET name = ?, address = ?, phnno = ?, age = ?, sex = ?, illness = ? WHERE id = ?";
            PreparedStatement pst = connection.prepareStatement(query);
            pst.setString(1, patient.getName());
            pst.setString(2, patient.getAddress());
            pst.setString(3, patient.getPhnno());
            pst.setInt(4, patient.getAge());
            pst.setString(5, patient.getSex());
            pst.setString(6, patient.getIllness());
            pst.setInt(7, id);

            pst.executeUpdate();
            pst.close();
            System.out.println("Patient with ID " + id + " updated successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to update patient with ID " + id);
        }
    }

    @Override
    public void deletePatient(int patientId) {
        try {
            String query = "DELETE FROM " + tableName + " WHERE id = ?";
            PreparedStatement pst = connection.prepareStatement(query);
            pst.setInt(1, patientId);

            pst.executeUpdate();
            pst.close();
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to delete patient with ID " + patientId);
        }
    }
    @Override
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
    public boolean checkPatientExists(int patientId) {
        try {
            String query = "SELECT id FROM " + tableName + " WHERE id = ?";
            PreparedStatement pst = connection.prepareStatement(query);
            pst.setInt(1, patientId);

            ResultSet rs = pst.executeQuery();
            boolean exists = rs.next();

            rs.close();
            pst.close();
            return exists;
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: Unable to check patient with ID " + patientId);
            return false;
        }
    }
}
