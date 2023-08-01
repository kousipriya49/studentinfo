package crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public abstract class PatientOperations {
    protected Connection connection;
    protected String tableName;

    public PatientOperations(Connection connection, String tableName) {
        this.connection = connection;
        this.tableName = tableName;
    }

    public abstract void insertPatient(Patient patient);

    public abstract void addBillsForPatient(int patientId, String billItems, double billAmount);

    public abstract void viewPatientBills(int patientId);

    public abstract void viewPatients();

    public abstract void updatePatient(int id, Patient patient);

    public abstract void deletePatient(int patientId);

    public abstract boolean checkPatientExists(int patientId);

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


	
    // Common helper methods (if any) can be defined here
}
