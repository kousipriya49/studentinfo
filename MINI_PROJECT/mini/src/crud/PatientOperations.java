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

    // Common helper methods (if any) can be defined here
}
