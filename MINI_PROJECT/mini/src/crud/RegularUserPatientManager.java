package crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RegularUserPatientManager extends PatientOperations {
    public RegularUserPatientManager(Connection connection, String tableName) {
        super(connection, tableName);
    }

    @Override
    public void insertPatient(Patient patient) {
        System.out.println("Regular users do not have permission to insert patients.");
    }

    @Override
    public void addBillsForPatient(int patientId, String billItems, double billAmount) {
        System.out.println("Regular users do not have permission to add bills for patients.");
    }

    @Override
    public void viewPatientBills(int patientId) {
        System.out.println("Regular users do not have permission to view patient bills.");
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

                System.out.println("ID: " + id);
                System.out.println("Name: " + name);
                System.out.println("Address: " + address);
                System.out.println("Phone Number: " + phnno);
                System.out.println("Age: " + age);
                System.out.println("Sex: " + sex);
                System.out.println("Illness: " + illness);
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
        System.out.println("Regular users do not have permission to update patients.");
    }

    @Override
    public void deletePatient(int patientId) {
        System.out.println("Regular users do not have permission to delete patients.");
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
